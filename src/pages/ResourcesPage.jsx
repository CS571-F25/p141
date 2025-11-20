import React from "react";
import { Row, Col, Card } from "react-bootstrap";

export default function ResourcesPage() {
    return (
        <section className="mt-4">
            <Row className="mb-3">
                <Col>
                    <h2>Privacy Resources</h2>
                    <p className="text-muted">
                        Learn more about your data rights and how privacy regulations work
                        in practice.
                    </p>
                </Col>
            </Row>
            <Row xs={1} md={2} className="g-3">
                <Col>
                    <Card className="shadow-sm h-100">
                        <Card.Body>
                            <Card.Title>General Data Protection Regulation (GDPR)</Card.Title>
                            <Card.Text>
                                Overview of privacy rights for people in the EU, including
                                access, deletion, and data portability rights.
                            </Card.Text>
                            <Card.Link
                                href="https://gdpr.eu/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Visit gdpr.eu
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="shadow-sm h-100">
                        <Card.Body>
                            <Card.Title>US Federal Trade Commission (FTC)</Card.Title>
                            <Card.Text>
                                Guides and articles about consumer privacy, data security, and
                                choosing safer services.
                            </Card.Text>
                            <Card.Link
                                href="https://www.ftc.gov/business-guidance/privacy-security"
                                target="_blank"
                                rel="noreferrer"
                            >
                                FTC privacy &amp; security
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="shadow-sm h-100">
                        <Card.Body>
                            <Card.Title>Electronic Frontier Foundation (EFF)</Card.Title>
                            <Card.Text>
                                Advocacy, explainers, and toolkits about digital rights and
                                online tracking.
                            </Card.Text>
                            <Card.Link
                                href="https://www.eff.org/issues/privacy"
                                target="_blank"
                                rel="noreferrer"
                            >
                                EFF privacy page
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="shadow-sm h-100">
                        <Card.Body>
                            <Card.Title>Better Privacy Habits</Card.Title>
                            <Card.Text>
                                Use ClearTerms as a starting point, then compare multiple
                                services and adjust your settings where possible.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </section>
    );
}