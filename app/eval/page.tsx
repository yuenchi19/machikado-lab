"use client";
import React, { useState } from "react";

const G = "#22c55e";
const GL = "#4ade80";
const BG = "#0a0a0a";

type Option = { label: string; score: number };
type Question = {
  id: number;
  category: "MEO" | "Instagram";
  question: string;
  tip: string;
  options: Option[];
};

const questions: Question[] = [
  {
    id: 1, category: "MEO",
    question: "Googleãã¸ãã¹ãã­ãã£ã¼ã«ãç»é²ã»ãªã¼ãã¼ç¢ºèªãã¦ãã¾ããï¼",
    tip: "Googleãããã«æ½è¨­æå ±ãè¡¨ç¤ºããããã®å¿é ã¹ãããã§ãã",
    options: [
      { label: "ã¯ããç¢ºèªæ¸ã¿ã§ã", score: 2 },
      { label: "ç»é²ã¯ãããç¢ºèªãã¦ããªã", score: 1 },
      { label: "ãã¦ããªãã»ããããªã", score: 0 },
    ],
  },
  {
    id: 2, category: "MEO",
    question: "æ½è¨­ã®åçï¼å¤è¦³ã»åè¦³ã»ã¹ã¿ããç­ï¼ãå®æçã«è¿½å ãã¦ãã¾ããï¼",
    tip: "åçãå¤ãæ½è¨­ã¯é²è¦§æ°ãæå¤§3åã«ãªãã¨ãè¨ããã¦ãã¾ãã",
    options: [
      { label: "æ2åä»¥ä¸è¿½å ãã¦ãã", score: 2 },
      { label: "æ1åç¨åº¦è¿½å ãã¦ãã", score: 1 },
      { label: "ã»ã¨ãã©è¿½å ãã¦ããªã", score: 0 },
    ],
  },
  {
    id: 3, category: "MEO",
    question: "Googleã¯ãã³ãã¸ã®è¿ä¿¡ãè¡ã£ã¦ãã¾ããï¼",
    tip: "è¿ä¿¡ãããã¨ã§èª å®ãªæ½è¨­ã¨ãã¦è©ä¾¡ãããæ¤ç´¢é ä½ã«ãå½±é¿ãã¾ãã",
    options: [
      { label: "æ¯åè¿ä¿¡ãã¦ãã", score: 2 },
      { label: "ãã¾ã«è¿ä¿¡ãã¦ãã", score: 1 },
      { label: "è¿ä¿¡ãã¦ããªã", score: 0 },
    ],
  },
  {
    id: 4, category: "MEO",
    question: "ææ°æå ±ï¼æç¨¿æ©è½ï¼ãä½¿ã£ã¦ãç¥ãããçºä¿¡ãã¦ãã¾ããï¼",
    tip: "æç¨¿æ©è½ãæ´»ç¨ããã¨æ¤ç´¢çµæã§ã®è¡¨ç¤ºãåªéããããããªãã¾ãã",
    options: [
      { label: "æ2åä»¥ä¸æç¨¿ãã¦ãã", score: 2 },
      { label: "æ1åç¨åº¦æç¨¿ãã¦ãã", score: 1 },
      { label: "ã»ã¨ãã©æç¨¿ãã¦ããªã", score: 0 },
    ],
  },
  {
    id: 5, category: "MEO",
    question: "å¶æ¥­æéã»ãµã¼ãã¹åå®¹ã»æå¨å°æå ±ãææ°ã«ä¿ã£ã¦ãã¾ããï¼",
    tip: "å¤ãæå ±ãè¡¨ç¤ºãããã¨æ¥è¨ªæ©ä¼ãéãã¾ããå®æçãªç¢ºèªãéè¦ã§ãã",
    options: [
      { label: "å¸¸ã«ææ°ã®ç¶æã«ãã¦ãã", score: 2 },
      { label: "ä¸é¨å¤ãå¯è½æ§ããã", score: 1 },
      { label: "ã»ã¨ãã©ç¢ºèªã»æ´æ°ãã¦ããªã", score: 0 },
    ],
  },
  {
    id: 6, category: "Instagram",
    question: "æ½è¨­ã®Instagramã¢ã«ã¦ã³ããéè¨­ã»éç¨ãã¦ãã¾ããï¼",
    tip: "Instagramã¯å®¶æä¸ä»£ï¼40ã60ä»£ï¼ã¸ã®ãªã¼ãã«éå¸¸ã«å¹æçã§ãã",
    options: [
      { label: "ã¯ããå®æçã«éç¨ä¸­", score: 2 },
      { label: "ã¢ã«ã¦ã³ãã¯ãããæ¾ç½®æ°å³", score: 1 },
      { label: "éè¨­ãã¦ããªã", score: 0 },
    ],
  },
  {
    id: 7, category: "Instagram",
    question: "Instagramã¸ã®æç¨¿é »åº¦ã¯ã©ã¯ãããã§ããï¼",
    tip: "é±1ã2åã®ç¶ç¶æç¨¿ããã©ã­ã¯ã¼ç²å¾ã¨ä¿¡é ¼æ§ç¯ã®åºæ¬ã§ãã",
    options: [
      { label: "é±2åä»¥ä¸æç¨¿ãã¦ãã", score: 2 },
      { label: "é±1åç¨åº¦æç¨¿ãã¦ãã", score: 1 },
      { label: "ææ°åä»¥ä¸ã»ã»ã¼æç¨¿ãªã", score: 0 },
    ],
  },
  {
    id: 8, category: "Instagram",
    question: "æç¨¿ã«ããã·ã¥ã¿ã°ã10åä»¥ä¸è¨­å®ãã¦ãã¾ããï¼",
    tip: "é©åãªããã·ã¥ã¿ã°ã§å°åã®æ¤ç´¢ã«å¼ã£ãããããããªãã¾ãã",
    options: [
      { label: "ã¯ããæ¯å10åä»¥ä¸è¨­å®", score: 2 },
      { label: "æ°åã ãè¨­å®ãã¦ãã", score: 1 },
      { label: "ã»ã¨ãã©è¨­å®ãã¦ããªã", score: 0 },
    ],
  },
  {
    id: 9, category: "Instagram",
    question: "ãªã¼ã«ãã¹ãã¼ãªã¼ãºãç©æ¥µçã«æ´»ç¨ãã¦ãã¾ããï¼",
    tip: "ãªã¼ã«ã¯éå¸¸æç¨¾1ã10åã®ãªã¼ããæå¾ã§ããæ°è¦ç²å¾ã«å¹æçã§ãã",
    options: [
      { label: "å®æçã«æ´»ç¨ãã¦ãã", score: 2 },
      { label: "ãã¾ã«æ´»ç¨ãã¦ãã", score: 1 },
      { label: "ã»ã¨ãã©æ´»ç¨ãã¦ããªã", score: 0 },
    ],
  },
  {
    id: 10, category: "Instagram",
    question: "ãã©ã­ã¯ã¼ããã¯ã³ã¡ã³ããè³ªåã«è¿ä¿¡ãã¦ãã¾ããï¼",
    tip: "ã³ã¡ã³ãè¿ä¿¡ã¯ã¨ã³ã²ã¼ã¸ã¡ã³ãçãé«ããã¢ã«ã´ãªãºã ã«å¥½ã¾ãã¾ãã",
    options: [
      { label: "æ¯åè¿ä¿¡ãã¦ãã", score: 2 },
      { label: "ãã¾ã«è¿ä¿¡ãã¦ãã", score: 1 },
      { label: "ã»ã¨ãã©è¿ä¿¡ãã¦ããªã", score: 0 },
    ],
  },
];

type GradeKey = "S" | "A" | "B" | "C";
type GradeInfo = { grade: GradeKey; emoji: string; title: string; color: string; advice: string };

function getGrade(score: number): GradeInfo {
  if (score >= 17) return {
    grade: "S", emoji: "ð", color: "#f59e0b",
    title: "åªç§ï¼ãã¸ã¿ã«éå®¢ã®åé²æ½è¨­",
    advice: "ãã§ã«é«ãæ°´æºã§åãçµãã§ãã¾ãï¼ãããªãå·®å¥åã¨ãã¦ãåç»ã³ã³ãã³ãã®å¼·åã»Googleãã¸ãã¹ã®ã¯ãã³ãæ°å¢å ã»Instagramã¨LINEå¬å¼ã®é£æºå¼·åããæ¤è¨ãã ãããã¾ã¡ãã©éå®¢Labã§ã¯ç¾ç¶ã®æ½ç­ãAIã§ããã«æé©åãããã©ã³ããç¨æãã¦ãã¾ãã",
  };
  if (score >= 13) return {
    grade: "A", emoji: "ð", color: GL,
    title: "åãçµã¿ä¸­ï¼ãã¨ä¸æ­©ã§å¤§ããå¤ãã",
    advice: "åºæ¬çãªåãçµã¿ã¯ã§ãã¦ãã¾ããç¹ã«ãæç¨¿ã®ç¶ç¶æ§ãã¨ãã¯ãã³ãã¸ã®è¿ä¿¡ç¿æ£ããå¼·åãããã¨ã§ãæ¤ç´¢é ä½ã¨ä¿¡é ¼åº¦ãå¤§ããåä¸ãã¾ããã¾ã¡ãã©éå®¢Labã®AIèªååã§ãé±åä½ã®æç¨¿ã»è¿ä¿¡ãææ¾ãã¦ã¿ã¾ãããï¼",
  };
  if (score >= 7) return {
    grade: "B", emoji: "ð§", color: "#60a5fa",
    title: "ã¾ã ã¾ã ä¼¸ã³ããããï¼ä»ãå§ãæ",
    advice: "åºç¤ã¯æ´ãã¤ã¦ããã¾ãããç¶ç¶ã§ãã¦ããªãæ½ç­ãå¤ãç¶æã§ããã¾ãGoogleãã¸ãã¹ãã­ãã£ã¼ã«ã®åçã¨æç¨¿ãæ2åä»¥ä¸è¡ãã ãã§ãGoogleãããã®è¡¨ç¤ºåæ°ãå¢å ãã¾ããã¾ã¡ãã©éå®¢Labãå¨ã¦ã®ãã¸ã¿ã«æ½ç­ãä»£è¡ããææãåºãã¾ãã",
  };
  return {
    grade: "C", emoji: "ð", color: "#f87171",
    title: "ä»ããå§ããã°ç«¶åã«å¤§å·®ãã¤ããããï¼",
    advice: "ãã¸ã¿ã«éå®¢ã®åãçµã¿ãã¾ã å°ãªãç¶æã§ããããã¯éã«è¨ãã°ãä»å§ãããã¨ã§ç«¶åã«å¤§ããªå·®ãã¤ãããããã£ã³ã¹ã§ããã¾ã¡ãã©éå®¢Labã§ã¯åæè²»ç¨0åã»æé¡å®é¡ã§ãGoogleãã¸ãã¹ãã­ãã£ã¼ã«ã®æé©åããInstagraméç¨ã¾ã§å¨ã¦ãä»»ãããã ãã¾ãã",
  };
}

// answers stores the actual score (-1 = unanswered)
// selectedIdx stores the option index (0/1/2, or -1 = nothing selected)
export default function EvalPage() {
  const [step, setStep] = useState<"intro" | number | "result">("intro");
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [selectedIdx, setSelectedIdx] = useState<number>(-1);

  const qIndex = typeof step === "number" ? step : -1;
  const currentQ = qIndex >= 0 ? questions[qIndex] : null;
  const totalScore = answers.reduce((sum, a) => sum + (a >= 0 ? a : 0), 0);
  const result = getGrade(totalScore);
  const meoScore = answers.slice(0, 5).reduce((s, a) => s + (a >= 0 ? a : 0), 0);
  const igScore = answers.slice(5, 10).reduce((s, a) => s + (a >= 0 ? a : 0), 0);
  const progress = qIndex >= 0 ? ((qIndex + 1) / questions.length) * 100 : step === "result" ? 100 : 0;

  const goNext = () => {
    if (!currentQ || selectedIdx < 0) return;
    const score = currentQ.options[selectedIdx].score;
    const newAnswers = [...answers];
    newAnswers[qIndex] = score;
    setAnswers(newAnswers);
    setSelectedIdx(-1);
    if (qIndex + 1 >= questions.length) {
      setStep("result");
    } else {
      setStep(qIndex + 1);
    }
  };

  const goBack = () => {
    if (qIndex > 0) {
      const prevScore = answers[qIndex - 1];
      const prevIdx = prevScore >= 0 ? questions[qIndex - 1].options.findIndex(o => o.score === prevScore) : -1;
      setSelectedIdx(prevIdx);
      setStep(qIndex - 1);
    } else if (step === "result") {
      const lastScore = answers[questions.length - 1];
      const lastIdx = lastScore >= 0 ? questions[questions.length - 1].options.findIndex(o => o.score === lastScore) : -1;
      setSelectedIdx(lastIdx);
      setStep(questions.length - 1);
    }
  };

  const handleStart = () => { setStep(0); setSelectedIdx(-1); };

  const handleRetry = () => {
    setAnswers(Array(questions.length).fill(-1));
    setSelectedIdx(-1);
    setStep("intro");
  };

  const lineShareText = `ãMEOã»Instagraméå®¢ èªå·±è¨ºæ­ã\n\nè¨ºæ­çµæï¼${totalScore}/20ç¹ï¼${result.grade}ã©ã³ã¯ï¼\n${result.title}\n\nä»è­·æ½è¨­ã»å°æ¹åºèåãç¡æè¨ºæ­ð\nhttps://machikado.yuen-chi.com/eval`;
  const lineShareUrl = `https://line.me/R/msg/text/?${encodeURIComponent(lineShareText)}`;

  const navStyle: React.CSSProperties = {
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
    backdropFilter: "blur(14px)",
    backgroundColor: "rgba(10,10,10,0.92)",
    borderBottom: "1px solid rgba(255,255,255,0.07)",
    height: "56px",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "0 1.25rem",
  };

  const pageWrap: React.CSSProperties = {
    minHeight: "100vh",
    background: BG,
    paddingTop: "56px",
    fontFamily: "'Noto Sans JP', sans-serif",
  };

  const innerCard: React.CSSProperties = {
    maxWidth: "540px",
    margin: "0 auto",
    padding: "2rem 1.25rem 4rem",
  };

  const NavBar = ({ right }: { right?: React.ReactNode }) => (
    <nav style={navStyle}>
      <a href="/" style={{ textDecoration: "none" }}>
        <span style={{ fontFamily: "'Outfit', sans-serif", color: GL, fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.15em", display: "block", lineHeight: 1 }}>AI Ã å°åéå®¢</span>
        <span style={{ color: "#fff", fontWeight: 800, fontSize: "0.95rem" }}>ã¾ã¡ãã©éå®¢Lab</span>
      </a>
      {right}
    </nav>
  );

  // ââ INTRO ââ
  if (step === "intro") {
    return (
      <div style={pageWrap}>
        <NavBar />
        <div style={innerCard}>
          <div style={{ textAlign: "center", paddingTop: "2rem" }}>
            <div style={{ width: "72px", height: "72px", background: "rgba(34,197,94,0.12)", border: "2px solid rgba(34,197,94,0.35)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", fontSize: "2rem" }}>ð</div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: "100px", padding: "0.3rem 0.85rem", marginBottom: "1.25rem" }}>
              <span style={{ width: "5px", height: "5px", background: GL, borderRadius: "50%", display: "inline-block" }} />
              <span style={{ color: GL, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em" }}>ä»è­·æ½è¨­ã»å°æ¹åºèåã ç¡æè¨ºæ­</span>
            </div>
            <h1 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(1.6rem, 6vw, 2.2rem)", lineHeight: 1.25, marginBottom: "1rem", letterSpacing: "-0.02em" }}>
              MEOã»Instagram<br /><span style={{ color: GL }}>éå®¢åè¨ºæ­</span>
            </h1>
            <p style={{ color: "#9ca3af", fontSize: "0.9rem", lineHeight: 1.85, marginBottom: "2.5rem" }}>
              10åã®ç°¡åãªè³ªåã«ç­ããã ãã§ã<br />ããªãã®æ½è¨­ã®éå®¢æ½ç­ã®ç¾ç¶ã¨<br />æ¹åãã¤ã³ããåããã¾ãã
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.75rem", marginBottom: "2.5rem" }}>
              {[{ icon: "â±", label: "æè¦æé", val: "ç´1å" }, { icon: "ð±", label: "å¯¾è±¡", val: "ä»è­·æ½è¨­ã»åºè" }, { icon: "ð´", label: "è²»ç¨", val: "å®å¨ç¡æ" }].map(item => (
                <div key={item.label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "1rem 0.5rem", textAlign: "center" }}>
                  <p style={{ fontSize: "1.4rem", marginBottom: "0.35rem" }}>{item.icon}</p>
                  <p style={{ color: "#6b7280", fontSize: "0.65rem", marginBottom: "0.2rem" }}>{item.label}</p>
                  <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.82rem" }}>{item.val}</p>
                </div>
              ))}
            </div>
            <button onClick={handleStart} style={{ background: G, color: "#fff", fontWeight: 700, fontSize: "1.05rem", padding: "1rem 2.5rem", borderRadius: "100px", border: "none", cursor: "pointer", width: "100%", letterSpacing: "0.02em" }}>
              è¨ºæ­ãã¯ããã â
            </button>
            <p style={{ color: "#4b5563", fontSize: "0.75rem", marginTop: "1rem" }}>åç­ã¯ä¿å­ã»éä¿¡ããã¾ãã</p>
          </div>
        </div>
      </div>
    );
  }

  // ââ RESULT ââ
  if (step === "result") {
    return (
      <div style={pageWrap}>
        <NavBar />
        <div style={innerCard}>
          <div style={{ paddingTop: "1rem" }}>
            <div style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${result.color}40`, borderRadius: "20px", padding: "2.25rem", textAlign: "center", marginBottom: "1.5rem" }}>
              <p style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>{result.emoji}</p>
              <div style={{ display: "inline-flex", alignItems: "baseline", gap: "0.35rem", marginBottom: "0.75rem" }}>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "4rem", fontWeight: 900, color: result.color, lineHeight: 1 }}>{totalScore}</span>
                <span style={{ color: "#6b7280", fontSize: "1.1rem", fontWeight: 600 }}>/20ç¹</span>
              </div>
              <p style={{ color: result.color, fontWeight: 800, fontSize: "1rem", marginBottom: "0.3rem" }}>ã©ã³ã¯ {result.grade}</p>
              <p style={{ color: "#d1d5db", fontWeight: 700, fontSize: "0.95rem" }}>{result.title}</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1.5rem" }}>
              {[{ label: "ð MEO", score: meoScore }, { label: "ð¸ Instagram", score: igScore }].map(item => (
                <div key={item.label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: "14px", padding: "1.25rem" }}>
                  <p style={{ color: "#9ca3af", fontSize: "0.78rem", marginBottom: "0.5rem" }}>{item.label}</p>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2rem", fontWeight: 900, color: "#fff", lineHeight: 1 }}>{item.score}<span style={{ fontSize: "0.9rem", color: "#6b7280", fontWeight: 500 }}>/10</span></p>
                  <div style={{ height: "4px", background: "rgba(255,255,255,0.08)", borderRadius: "99px", marginTop: "0.75rem", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${item.score * 10}%`, background: G, borderRadius: "99px" }} />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "16px", padding: "1.5rem", marginBottom: "1.5rem" }}>
              <p style={{ color: GL, fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>ð ã¢ããã¤ã¹</p>
              <p style={{ color: "#d1d5db", fontSize: "0.88rem", lineHeight: 1.85 }}>{result.advice}</p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <p style={{ color: "#6b7280", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", marginBottom: "0.75rem" }}>åç­ã®æ¯ãè¿ã</p>
              {questions.map((q, i) => {
                const s = answers[i];
                const optLabel = s >= 0 ? q.options.find(o => o.score === s)?.label : "-";
                const dotColor = s === 2 ? GL : s === 1 ? "#fbbf24" : "#f87171";
                const dotBg = s === 2 ? "rgba(34,197,94,0.15)" : s === 1 ? "rgba(251,191,36,0.15)" : "rgba(248,113,113,0.15)";
                const mark = s === 2 ? "â" : s === 1 ? "â³" : "â";
                return (
                  <div key={q.id} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "0.7rem 0", borderBottom: i < questions.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "22px", height: "22px", minWidth: "22px", borderRadius: "50%", background: dotBg, fontSize: "0.65rem", fontWeight: 700, color: dotColor }}>{mark}</span>
                    <div>
                      <p style={{ color: "#6b7280", fontSize: "0.7rem" }}>{q.category} Q{i + 1}</p>
                      <p style={{ color: "#d1d5db", fontSize: "0.82rem", lineHeight: 1.5 }}>{q.question}</p>
                      {s < 2 && <p style={{ color: "#6b7280", fontSize: "0.75rem", marginTop: "0.2rem" }}>ð¡ {q.tip}</p>}
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: "16px", padding: "1.75rem", marginBottom: "1rem", textAlign: "center" }}>
              <p style={{ color: "#fff", fontWeight: 800, fontSize: "1rem", marginBottom: "0.5rem" }}>ã¾ã¡ãã©éå®¢Labã«ç¸è«ãã¦ã¿ã¾ãããï¼</p>
              <p style={{ color: "#6b7280", fontSize: "0.82rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>åæè²»ç¨0åã»æé¡å®é¡ã§<br />MEOã»SNSã»AIèªååãä¸¸ãã¨ãµãã¼ããã¾ã</p>
              <a href="/#contact" style={{ display: "block", background: G, color: "#fff", fontWeight: 700, fontSize: "0.95rem", padding: "0.9rem", borderRadius: "10px", textDecoration: "none", marginBottom: "0.75rem" }}>
                ç¡æãã¢ãªã³ã°ãç³ãè¾¼ã â
              </a>
              <a href={lineShareUrl} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", background: "#06C755", color: "#fff", fontWeight: 700, fontSize: "0.9rem", padding: "0.85rem", borderRadius: "10px", textDecoration: "none" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 5.92 2 10.74c0 2.89 1.54 5.47 3.93 7.17L5 22l4.26-2.2c.88.24 1.81.37 2.74.37 5.52 0 10-3.92 10-8.74S17.52 2 12 2z"/></svg>
                LINEã§ã·ã§ã¢ãã
              </a>
            </div>

            <button onClick={handleRetry} style={{ background: "transparent", color: "#6b7280", fontSize: "0.82rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "0.75rem", width: "100%", cursor: "pointer" }}>
              ããä¸åº¦è¨ºæ­ãã
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ââ QUESTION ââ
  if (!currentQ) return null;
  const isMEO = currentQ.category === "MEO";

  return (
    <div style={pageWrap}>
      <NavBar right={<span style={{ color: "#6b7280", fontSize: "0.78rem" }}>{qIndex + 1} / {questions.length}</span>} />
      <div style={innerCard}>
        <div style={{ height: "3px", background: "rgba(255,255,255,0.07)", borderRadius: "99px", marginBottom: "2rem", overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${progress}%`, background: G, borderRadius: "99px", transition: "width 0.35s ease" }} />
        </div>

        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: isMEO ? "rgba(34,197,94,0.1)" : "rgba(139,92,246,0.1)", border: `1px solid ${isMEO ? "rgba(34,197,94,0.3)" : "rgba(139,92,246,0.3)"}`, borderRadius: "100px", padding: "0.25rem 0.8rem", marginBottom: "1.5rem" }}>
          <span style={{ fontSize: "0.85rem" }}>{isMEO ? "ð" : "ð¸"}</span>
          <span style={{ color: isMEO ? GL : "#a78bfa", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em" }}>
            {isMEO ? "MEO / Googleãã¸ãã¹ãã­ãã£ã¼ã«" : "Instagram"}
          </span>
        </div>

        <h2 style={{ color: "#fff", fontWeight: 800, fontSize: "clamp(1.1rem, 4vw, 1.4rem)", lineHeight: 1.4, marginBottom: "2rem", letterSpacing: "-0.01em" }}>
          {currentQ.question}
        </h2>

        <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.75rem", marginBottom: "2rem" }}>
          {currentQ.options.map((opt, i) => {
            const isSel = selectedIdx === i;
            return (
              <button
                key={i}
                onClick={() => setSelectedIdx(i)}
                style={{
                  background: isSel ? "rgba(34,197,94,0.12)" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${isSel ? "rgba(34,197,94,0.5)" : "rgba(255,255,255,0.1)"}`,
                  borderRadius: "14px",
                  padding: "1.1rem 1.25rem",
                  cursor: "pointer",
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  transition: "all 0.15s ease",
                  width: "100%",
                }}
              >
                <span style={{ width: "22px", height: "22px", minWidth: "22px", borderRadius: "50%", border: `2px solid ${isSel ? G : "rgba(255,255,255,0.2)"}`, display: "flex", alignItems: "center", justifyContent: "center", background: isSel ? G : "transparent", flexShrink: 0 }}>
                  {isSel && <span style={{ width: "8px", height: "8px", background: "#fff", borderRadius: "50%", display: "block" }} />}
                </span>
                <span style={{ color: isSel ? "#fff" : "#d1d5db", fontWeight: isSel ? 700 : 400, fontSize: "0.92rem", lineHeight: 1.4 }}>
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>

        {selectedIdx >= 0 && (
          <div style={{ background: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.15)", borderRadius: "12px", padding: "1rem 1.25rem", marginBottom: "1.5rem" }}>
            <p style={{ color: "#9ca3af", fontSize: "0.8rem", lineHeight: 1.7 }}>
              <span style={{ color: GL, fontWeight: 700 }}>ð¡ </span>{currentQ.tip}
            </p>
          </div>
        )}

        <div style={{ display: "flex", gap: "0.75rem" }}>
          {qIndex > 0 && (
            <button onClick={goBack} style={{ flex: "0 0 auto", background: "transparent", color: "#6b7280", fontSize: "0.9rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "0.9rem 1.25rem", cursor: "pointer" }}>
              â æ»ã
            </button>
          )}
          <button
            onClick={goNext}
            disabled={selectedIdx < 0}
            style={{
              flex: 1,
              background: selectedIdx >= 0 ? G : "rgba(255,255,255,0.05)",
              color: selectedIdx >= 0 ? "#fff" : "#4b5563",
              fontWeight: 700, fontSize: "1rem",
              padding: "0.95rem", borderRadius: "10px",
              border: "none",
              cursor: selectedIdx >= 0 ? "pointer" : "not-allowed",
              transition: "all 0.15s ease",
            }}
          >
            {qIndex + 1 >= questions.length ? "çµæãè¦ã â" : "æ¬¡ã¸ â"}
          </button>
        </div>
      </div>
    </div>
  );
}
