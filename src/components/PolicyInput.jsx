import React from "react";
import { Card, Form, Button } from "react-bootstrap";

export default function PolicyInput({
    policyText,
    onPolicyTextChange,
    onAnalyze
}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onAnalyze(policyText);
    };

    return (
        <Card className="shadow-sm">
            <Card.Body>
                <Card.Title>Paste a privacy policy</Card.Title>
                <Card.Text>
                    Paste or type a privacy policy below. ClearTerms will scan it and show
                    a simplified overview of risks and user rights.
                </Card.Text>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="policyText">
                        <Form.Label>Policy text</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={8}
                            value={policyText}
                            onChange={(e) => onPolicyTextChange(e.target.value)}
                            placeholder="Paste the privacy policy here..."
                            required
                        />
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button variant="primary" type="submit">
                            Analyze Policy
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
}