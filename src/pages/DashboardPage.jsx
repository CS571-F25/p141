import React from "react";
import { Row, Col, Alert } from "react-bootstrap";
import SummaryPanel from "../components/SummaryPanel.jsx";
import TrustMeter from "../components/TrustMeter.jsx";
import HighlightsView from "../components/HighlightsView.jsx";

export default function DashboardPage({ analysis, policyText, keywordSets }) {
    if (!analysis || !policyText.trim()) {
        return (
            <Alert variant="info" className="mt-4">
                No analysis to display yet. Paste a policy on the{" "}
                <strong>Home</strong> page and click <strong>Analyze Policy</strong>.
            </Alert>
        );
    }

    return (
        <section className="mt-4">
            <Row className="mb-3">
                <Col md={6}>
                    <SummaryPanel analysis={analysis} />
                </Col>
                <Col md={6}>
                    <TrustMeter trustScore={analysis.trustScore} />
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <HighlightsView text={policyText} keywordSets={keywordSets} />
                </Col>
            </Row>
        </section>
    );
}