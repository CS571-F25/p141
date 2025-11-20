import React from "react";
import { Card, ProgressBar } from "react-bootstrap";

export default function TrustMeter({ trustScore }) {
    let label = "Moderate";
    if (trustScore >= 80) label = "High";
    else if (trustScore <= 40) label = "Low";

    return (
        <Card className="mb-3 shadow-sm">
            <Card.Body>
                <Card.Title>Trust Meter</Card.Title>
                <Card.Text className="mb-1">
                    Overall privacy-friendliness score based on detected keywords.
                </Card.Text>
                <ProgressBar now={trustScore} label={`${trustScore}%`} />
                <Card.Text className="mt-2 mb-0">
                    Interpreted as: <strong>{label} trust</strong>. Use this as a
                    starting point, not a final verdict.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}