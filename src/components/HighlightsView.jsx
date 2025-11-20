import React, { useMemo } from "react";
import { Card } from "react-bootstrap";

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export default function HighlightsView({ text, keywordSets }) {
    const html = useMemo(() => {
        if (!text) return "";

        const riskyKeywords = [
            ...keywordSets.dataCollection,
            ...keywordSets.thirdPartySharing,
            ...keywordSets.dataRetention
        ].map((k) => k.toLowerCase());

        const positiveKeywords = keywordSets.userRights.map((k) =>
            k.toLowerCase()
        );

        const allKeywords = [...new Set([...riskyKeywords, ...positiveKeywords])];

        if (allKeywords.length === 0) return text;

        const pattern = new RegExp(
            `(${allKeywords.map(escapeRegExp).join("|")})`,
            "gi"
        );

        return text.replace(pattern, (match) => {
            const lower = match.toLowerCase();
            if (positiveKeywords.includes(lower)) {
                return `<mark class="positive-term">${match}</mark>`;
            }
            if (riskyKeywords.includes(lower)) {
                return `<mark class="risky-term">${match}</mark>`;
            }
            return match;
        });
    }, [text, keywordSets]);

    return (
        <Card className="shadow-sm">
            <Card.Body>
                <Card.Title>Highlights View</Card.Title>
                <Card.Text>
                    Risky terms are highlighted in red; user rights are highlighted in
                    green.
                </Card.Text>
                <div
                    className="highlighted-text"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </Card.Body>
        </Card>
    );
}