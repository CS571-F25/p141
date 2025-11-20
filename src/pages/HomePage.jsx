import React from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PolicyInput from "../components/PolicyInput.jsx";

export default function HomePage({
    policyText,
    onPolicyTextChange,
    onAnalyze
}) {
    const navigate = useNavigate();

    const handleAnalyze = (text) => {
        onAnalyze(text);
        navigate("/dashboard");
    };

    return (
        <section className="clearterms-hero">
            <Row className="mb-4">
                <Col md={7}>
                    <h1>ClearTerms</h1>
                    <p className="lead">
                        A friendly way to skim long privacy policies. Paste text, and we’ll
                        surface key risks and user rights using simple visual cues.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <PolicyInput
                        policyText={policyText}
                        onPolicyTextChange={onPolicyTextChange}
                        onAnalyze={handleAnalyze}
                    />
                </Col>
            </Row>
        </section>
    );
}