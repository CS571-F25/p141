import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import ClearTermsNavbar from "./components/ClearTermsNavbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import HistoryPage from "./pages/HistoryPage.jsx";
import ResourcesPage from "./pages/ResourcesPage.jsx";

const KEYWORD_SETS = {
  dataCollection: ["collect", "cookies", "usage data", "log data", "analytics"],
  thirdPartySharing: ["third party", "share", "sell", "partners", "advertising"],
  dataRetention: ["retain", "store", "preserve", "keep", "retention"],
  userRights: [
    "access",
    "delete",
    "opt out",
    "object",
    "correct",
    "update",
    "withdraw consent",
    "right to"
  ]
};

function analyzePolicy(text) {
  const lower = text.toLowerCase();
  const categories = {
    dataCollection: 0,
    thirdPartySharing: 0,
    dataRetention: 0,
    userRights: 0
  };

  Object.entries(KEYWORD_SETS).forEach(([category, keywords]) => {
    keywords.forEach((kw) => {
      if (lower.includes(kw.toLowerCase())) {
        categories[category] += 1;
      }
    });
  });

  const riskScore =
    categories.dataCollection +
    categories.thirdPartySharing +
    categories.dataRetention;
  const positiveScore = categories.userRights;

  // Simple trust heuristic: start at 70, subtract 8 per risk, add 4 per positive
  let trustScore = 70 - riskScore * 8 + positiveScore * 4;
  trustScore = Math.max(0, Math.min(100, trustScore));

  return {
    categories,
    riskScore,
    positiveScore,
    trustScore
  };
}

export default function App() {
  const [policyText, setPolicyText] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [history, setHistory] = useState(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = window.localStorage.getItem("clearterms-history");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem("clearterms-history", JSON.stringify(history));
    } catch {
      // ignore
    }
  }, [history]);

  const handleAnalyze = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const result = analyzePolicy(trimmed);
    setPolicyText(trimmed);
    setAnalysis(result);

    const entry = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      text: trimmed,
      snippet: trimmed.slice(0, 160) + (trimmed.length > 160 ? "..." : ""),
      analysis: result
    };

    setHistory((prev) => [entry, ...prev].slice(0, 20));
  };

  const handleSelectHistory = (entry) => {
    setPolicyText(entry.text);
    setAnalysis(entry.analysis);
  };

  return (
    <>
      <ClearTermsNavbar />
      <main>
        <Container>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  policyText={policyText}
                  onPolicyTextChange={setPolicyText}
                  onAnalyze={handleAnalyze}
                />
              }
            />
            <Route
              path="/dashboard"
              element={
                <DashboardPage
                  analysis={analysis}
                  policyText={policyText}
                  keywordSets={KEYWORD_SETS}
                />
              }
            />
            <Route
              path="/history"
              element={
                <HistoryPage
                  history={history}
                  onSelectHistory={handleSelectHistory}
                />
              }
            />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
        </Container>
      </main>
    </>
  );
}