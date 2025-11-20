import React from "react";
import { Card, ListGroup, Badge } from "react-bootstrap";

export default function HistoryList({ history, onSelect }) {
    return (
        <Card className="shadow-sm">
            <Card.Body>
                <Card.Title>Analysis History</Card.Title>
                <Card.Text>
                    Click a previous analysis to reload its text and summary.
                </Card.Text>
                {history.length === 0 ? (
                    <Card.Text className="text-muted mb-0">
                        No analyses saved yet. Run your first analysis on the Home page!
                    </Card.Text>
                ) : (
                    <ListGroup variant="flush">
                        {history.map((entry) => (
                            <ListGroup.Item
                                key={entry.id}
                                action
                                onClick={() => onSelect(entry)}
                            >
                                <div className="d-flex justify-content-between align-items-start">
                                    <div>
                                        <div className="fw-semibold">
                                            {new Date(entry.createdAt).toLocaleString()}
                                        </div>
                                        <div className="text-muted small">{entry.snippet}</div>
                                    </div>
                                    <Badge bg="secondary">
                                        Risk {entry.analysis.riskScore}
                                    </Badge>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Card.Body>
        </Card>
    );
}