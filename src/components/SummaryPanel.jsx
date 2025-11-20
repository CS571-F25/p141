import React from "react";
import { Card, ListGroup, Badge } from "react-bootstrap";

export default function SummaryPanel({ analysis }) {
    const { categories, riskScore, positiveScore } = analysis;

    return (
        <Card className="mb-3 shadow-sm">
            <Card.Body>
                <Card.Title>Quick Summary</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    Keyword-based overview (not legal advice!)
                </Card.Subtitle>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        Data collection{" "}
                        <Badge bg="secondary">{categories.dataCollection}</Badge>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Third-party sharing{" "}
                        <Badge bg="secondary">{categories.thirdPartySharing}</Badge>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Data retention{" "}
                        <Badge bg="secondary">{categories.dataRetention}</Badge>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        User rights mentioned{" "}
                        <Badge bg="success">{categories.userRights}</Badge>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Total risk signals{" "}
                        <Badge bg="danger">{riskScore}</Badge>{" "}
                        · Positive protections{" "}
                        <Badge bg="success">{positiveScore}</Badge>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}