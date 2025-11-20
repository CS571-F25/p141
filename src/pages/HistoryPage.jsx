import React from "react";
import { Row, Col } from "react-bootstrap";
import HistoryList from "../components/HistoryList.jsx";

export default function HistoryPage({ history, onSelectHistory }) {
    return (
        <section className="mt-4">
            <Row>
                <Col md={12}>
                    <HistoryList history={history} onSelect={onSelectHistory} />
                </Col>
            </Row>
        </section>
    );
}