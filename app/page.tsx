"use client";
import React, { useState } from "react";
import { supabase } from "@/lib/supabase";

const concerns = [
  "æ°è¦ã®ãå®¢æ§ããªããªãå¢ããªã",
  "Googleãããã§ä¸ä½è¡¨ç¤ºãããªã",
  "SNSãæ´æ°ããæéããªã",
  "ãã¼ã ãã¼ã¸ã¸ã®åãåãããã¼ã­",
  "ãã©ã·ãéã£ã¦ãåå¿ãèã",
  "ç«¶åä»åºã«å·®ãã¤ããããªã",
];

const features = [
  {
    num: "01",
    icon: "ð¤",
    title: "AIãä¸¸ãã¨èªåå",
    desc: "MEOå¯¾ç­ã»SNSæç¨¿ã»ãã­ã°æ´æ°ãAIãä»£è¡ããªã¼ãã¼æ§ã®éå®¢æ¥­åãæ2æéä»¥åã«å§ç¸®ãã¾ãã",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=80",
  },
  {
    num: "02",
    icon: "ð",
    title: "å°æ¹ç¹åã®æ¦ç¥",
    desc: "å¤§é½å¸åãã®æ±ç¨ç­ã§ã¯ãªããå°åç¹æ§ã»ç«¶åç°å¢ãåæããå°æ¹å°ç¨ã®éå®¢æ¦ç¥ãè¨­è¨ãã¾ãã",
    img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80",
  },
  {
    num: "03",
    icon: "ð´",
    title: "ææéè¦ã®å®é¡å¶",
    desc: "åæè²»ç¨0åãæé¡å®é¡ã§å¨æ½ç­ãããã±ã¼ã¸ãè§£ç´ã1ã¶æåéç¥ã®ã¿ã§ããªã¹ã¯ãªãã¹ã¿ã¼ãã§ãã¾ãã",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  },
];

const services = [
  { name: "MEOå¯¾ç­ï¼Googleãããæé©åï¼", desc: "Googleãã¸ãã¹ãã­ãã£ã¼ã«ã®æé©åã»å£ã³ãç®¡çã»æç¨¿èªåå", icon: "ð" },
  { name: "SNSéç¨ä»£è¡", desc: "Instagramã»LINEå¬å¼ã»Googleãã¸ãã¹ã®æç¨¿ãAIãèªåçæã»ä»£è¡æç¨¿", icon: "ð±" },
  { name: "AIãã£ãããããè¨­ç½®", desc: "24æéå¯¾å¿ã®AIãã£ããã§åãåãããèªååãæ©ä¼æå¤±ãã¼ã­ã«", icon: "ð¤" },
  { name: "Webãµã¤ãæ¹åææ¡", desc: "æ¢å­ãµã¤ãã®SEOã»UIæ¹åææ¡ãéå®¢ã«ã¤ãªããã³ã³ãã³ãè¨­è¨", icon: "ð" },
  { name: "ææ¬¡éå®¢ã¬ãã¼ã", desc: "æ°å­ã§ç¢ºèªã§ããéå®¢ã¬ãã¼ããæ½ç­ã®å¹æãæ¯æå¯è¦å", icon: "ð" },
];

const steps = [
  { num: "1", title: "ç¡æãã¢ãªã³ã°", desc: "ç¾å¨ã®éå®¢èª²é¡ã»ç®æ¨ããªã³ã©ã¤ã³ã§ãã¢ãªã³ã°ï¼30åç¨åº¦ï¼" },
  { num: "2", title: "ãã©ã³ææ¡", desc: "èª²é¡ã«åãããã«ã¹ã¿ã ãã©ã³ããææ¡ãæéãæç¢ºã«ãæ¡å" },
  { num: "3", title: "å°å¥ã»è¨­å®", desc: "MEOã»SNSã»ãã£ãããããã®è¨­å®ããã¹ã¦ãä»»ããã ãã" },
  { num: "4", title: "éç¨ã¹ã¿ã¼ã", desc: "æ¯æã®ã¬ãã¼ãã§å¹æç¢ºèªãéææ¹åãç¹°ãè¿ããªããæé·" },
];

const G = "#22c55e";
const GL = "#4ade80";

export default function Home() {
  const [form, setForm] = useState({
    storeName: "",
    contactName: "",
    phone: "",
    email: "",
    prefecture: "",
    businessType: "",
    concern: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const { error } = await supabase.from("inquiries").insert([{
      store_name: form.storeName,
      contact_name: form.contactName,
      phone: form.phone,
      email: form.email,
      prefecture: form.prefecture,
      business_type: form.businessType,
      concern: form.concern,
      message: form.message,
      created_at: new Date().toISOString(),
    }]);
    if (error) {
      setStatus("error");
    } else {
      setStatus("success");
      setForm({ storeName: "", contactName: "", phone: "", email: "", prefecture: "", businessType: "", concern: "", message: "" });
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: "8px",
    padding: "0.75rem 1rem",
    color: "#fff",
    fontSize: "0.95rem",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: "#9ca3af",
    fontSize: "0.78rem",
    marginBottom: "0.4rem",
    fontWeight: 500,
    letterSpacing: "0.02em",
  };

  return (
    <main>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        backdropFilter: "blur(14px)",
        backgroundColor: "rgba(10,10,10,0.88)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <span style={{ fontFamily: "'Outfit', sans-serif", color: GL, fontWeight: 700, fontSize: "0.68rem", letterSpacing: "0.18em", display: "block", lineHeight: 1 }}>AI Ã å°åéå®¢</span>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.05rem", lineHeight: 1.1 }}>ã¾ã¡ãã©éå®¢Lab</span>
          </div>
          <a href="#contact" style={{ background: G, color: "#fff", fontWeight: 700, fontSize: "0.82rem", padding: "0.55rem 1.4rem", borderRadius: "100px", textDecoration: "none", letterSpacing: "0.02em" }}>
            ç¡æç¸è« â
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: "#0a0a0a", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "64px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-15%", right: "-8%", width: "700px", height: "700px", background: "radial-gradient(circle, rgba(34,197,94,0.11) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "0", left: "-5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(34,197,94,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 1.5rem 6rem", width: "100%" }}>
          <div style={{ display: "flex", gap: "3.5rem", alignItems: "center", flexWrap: "wrap" }}>

            {/* LEFT */}
            <div style={{ flex: "1 1 460px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.35)", borderRadius: "100px", padding: "0.35rem 1rem", marginBottom: "2.5rem" }}>
                <span style={{ width: "6px", height: "6px", background: GL, borderRadius: "50%", display: "inline-block" }} />
                <span style={{ color: GL, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em" }}>å°æ¹ã®ä¸­å°åºèã»ä»è­·æ½è¨­å°é</span>
              </div>

              <h1 style={{ color: "#fff", fontWeight: 900, lineHeight: 1.12, marginBottom: "1.75rem", letterSpacing: "-0.02em" }}>
                <span style={{ display: "block", fontSize: "clamp(2.8rem, 7.5vw, 5.5rem)" }}>AIã§ãéå®¢ã</span>
                <span style={{ display: "block", fontSize: "clamp(2.8rem, 7.5vw, 5.5rem)", color: GL }}>èªååããã</span>
              </h1>

              <p style={{ color: "#9ca3af", fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", lineHeight: 1.9, maxWidth: "520px", marginBottom: "3rem" }}>
                MEOå¯¾ç­ã»SNSéç¨ã»AIãã£ããããããæé¡å®é¡ã§ä¸¸ãã¨ãµãã¼ãã<br />
                å°æ¹ã®åºèã»æ½è¨­ããé½å¸é¨ã¨åãéå®¢åãæã«å¥ããã
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
                <a href="#contact" style={{ background: G, color: "#fff", fontWeight: 700, fontSize: "1rem", padding: "0.9rem 2.4rem", borderRadius: "100px", textDecoration: "none" }}>
                  ç¡æãã¢ãªã³ã°ãç³ãè¾¼ã â
                </a>
                <a href="#services" style={{ background: "transparent", color: "#d1d5db", fontWeight: 600, fontSize: "1rem", padding: "0.9rem 2rem", borderRadius: "100px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.18)" }}>
                  ãµã¼ãã¹ãè¦ã
                </a>
              </div>

              <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap", paddingTop: "2.5rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                {[{ num: "0å", label: "åæè²»ç¨" }, { num: "æ2h", label: "ãªã¼ãã¼ã®ä½æ¥­æé" }, { num: "100%", label: "AIèªååå¯¾å¿" }].map((s) => (
                  <div key={s.label}>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2.2rem", fontWeight: 800, color: GL, lineHeight: 1 }}>{s.num}</p>
                    <p style={{ color: "#6b7280", fontSize: "0.82rem", marginTop: "0.35rem" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: hero image */}
            <div style={{ flex: "1 1 340px", minWidth: "280px" }}>
              <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", aspectRatio: "4/3" }}>
                <img
                  src="https://images.unsplash.com/photo-1556742400-b5b7a60b3fb5?auto=format&fit=crop&w=800&q=80"
                  alt="AIéå®¢æ¯æ´"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,10,10,0.4) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: "1.25rem", left: "1.25rem", right: "1.25rem", background: "rgba(10,10,10,0.82)", borderRadius: "12px", padding: "1rem 1.25rem", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.09)" }}>
                  <p style={{ color: GL, fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.12em", marginBottom: "0.65rem" }}>RESULTS â å°å¥å¾ã®å¤å</p>
                  <div style={{ display: "flex", gap: "1.5rem" }}>
                    {[{ n: "3.2Ã", l: "åãåããå¢å " }, { n: "47+", l: "å°å¥æ½è¨­æ°" }, { n: "98%", l: "ç¶ç¶ç" }].map(s => (
                      <div key={s.l}>
                        <p style={{ fontFamily: "'Outfit', sans-serif", color: "#fff", fontWeight: 900, fontSize: "1.25rem", lineHeight: 1 }}>{s.n}</p>
                        <p style={{ color: "#6b7280", fontSize: "0.65rem", marginTop: "0.2rem" }}>{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "1rem", background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)", borderRadius: "14px", padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: "0.9rem" }}>
                <span style={{ fontSize: "1.4rem" }}>ð</span>
                <div style={{ flex: 1 }}>
                  <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.82rem", marginBottom: "0.1rem" }}>MEOã»SNS ç¡æèªå·±è¨ºæ­</p>
                  <p style={{ color: "#6b7280", fontSize: "0.72rem" }}>ç¾ç¶ã®éå®¢æ½ç­ã1åã§ãã§ãã¯</p>
                </div>
                <a href="/eval" style={{ background: G, color: "#fff", fontWeight: 700, fontSize: "0.75rem", padding: "0.45rem 1rem", borderRadius: "100px", textDecoration: "none", whiteSpace: "nowrap" }}>
                  è¨ºæ­ãã â
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section style={{ background: "#f7f6f2", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <p style={{ color: G, fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>PROBLEM</p>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.9rem, 4vw, 2.8rem)", color: "#0a0a0a", marginBottom: "2.5rem", lineHeight: 1.25, letterSpacing: "-0.01em" }}>
            ãããªãæ©ã¿ã<br />ããã¾ãããï¼
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: "0.875rem" }}>
            {concerns.map((c, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #e9e9e4", borderRadius: "12px", padding: "1.1rem 1.4rem", display: "flex", alignItems: "center", gap: "0.875rem" }}>
                <span style={{ color: "#ef4444", fontSize: "1rem", flexShrink: 0, fontWeight: 700 }}>â</span>
                <p style={{ color: "#374151", fontSize: "0.92rem", fontWeight: 500, lineHeight: 1.5 }}>{c}</p>
              </div>
            ))}
          </div>
          <div style={{ background: "#0a0a0a", borderRadius: "14px", padding: "2.25rem 2.5rem", marginTop: "2.5rem", display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "1.75rem" }}>ð¡</span>
            <div>
              <p style={{ color: "#fff", fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.2rem" }}>ãããã¾ã¡ãã©éå®¢Labãè§£æ±ºãã¾ã</p>
              <p style={{ color: "#6b7280", fontSize: "0.88rem" }}>AIã¨å°åå¯çã®å°éç¥è­ã§ãéå®¢ã®æ©ã¿ãã¾ããã¨ãä»»ããã ããã</p>
            </div>
            <a href="#contact" style={{ marginLeft: "auto", background: G, color: "#fff", fontWeight: 700, fontSize: "0.85rem", padding: "0.65rem 1.5rem", borderRadius: "100px", textDecoration: "none", whiteSpace: "nowrap" }}>
              ç¸è«ãã â
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ background: "#0a0a0a", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <p style={{ color: G, fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>FEATURE</p>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.9rem, 4vw, 2.8rem)", color: "#fff", marginBottom: "3.5rem", lineHeight: 1.25, letterSpacing: "-0.01em" }}>
            é¸ã°ãã3ã¤ã®çç±
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
            {features.map((f) => (
              <div key={f.num} style={{ border: "1px solid rgba(255,255,255,0.09)", borderRadius: "16px", overflow: "hidden", background: "rgba(255,255,255,0.025)" }}>
                <div style={{ height: "180px", overflow: "hidden", position: "relative" }}>
                  <img src={f.img} alt={f.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.65) 100%)" }} />
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "4rem", fontWeight: 900, color: "rgba(255,255,255,0.15)", position: "absolute", top: "-0.5rem", right: "1rem", lineHeight: 1 }}>{f.num}</span>
                </div>
                <div style={{ padding: "1.75rem" }}>
                  <p style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>{f.icon}</p>
                  <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.75rem" }}>{f.title}</h3>
                  <p style={{ color: "#9ca3af", fontSize: "0.88rem", lineHeight: 1.85 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION BANNER */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "320px", display: "flex", alignItems: "center" }}>
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
          alt="ãã¼ã ã¯ã¼ã¯"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,10,0.78)" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "4rem 1.5rem", width: "100%", textAlign: "center" }}>
          <p style={{ color: GL, fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.2em", marginBottom: "1rem" }}>MISSION</p>
          <h2 style={{ color: "#fff", fontWeight: 900, fontSize: "clamp(1.6rem, 4vw, 2.8rem)", lineHeight: 1.3, marginBottom: "1.5rem", letterSpacing: "-0.01em" }}>
            å°æ¹ã®ãåºãã<span style={{ color: GL }}>åãããªã</span>æä»£ã¸ã
          </h2>
          <p style={{ color: "#9ca3af", fontSize: "clamp(0.88rem, 1.5vw, 1rem)", maxWidth: "560px", margin: "0 auto 2.5rem", lineHeight: 1.85 }}>
            AIã¨å°åå¯çã®æ¦ç¥ã§ãã©ããªå°æ¹ã®åºèã»æ½è¨­ã§ã<br />ãã¸ã¿ã«éå®¢ãæ­¦å¨ã«ã§ããä¸çãç¹°æãã¦ãã¾ãã
          </p>
          <a href="#contact" style={{ background: G, color: "#fff", fontWeight: 700, fontSize: "0.95rem", padding: "0.85rem 2.2rem", borderRadius: "100px", textDecoration: "none", display: "inline-block" }}>
            ã¾ãã¯ç¡æç¸è«ãã â
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ background: "#fff", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <p style={{ color: G, fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>SERVICE</p>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.9rem, 4vw, 2.8rem)", color: "#0a0a0a", marginBottom: "3rem", lineHeight: 1.25, letterSpacing: "-0.01em" }}>
            ãµã¼ãã¹åå®¹
          </h2>
          <div>
            {services.map((s, i) => (
              <div key={s.name} style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem", padding: "1.5rem 0", borderBottom: i < services.length - 1 ? "1px solid #f0efe9" : "none" }}>
                <div style={{ width: "42px", height: "42px", minWidth: "42px", background: "#f0fdf4", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }}>
                  {s.icon}
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: "#0a0a0a", fontSize: "1rem", marginBottom: "0.2rem" }}>{s.name}</p>
                  <p style={{ color: "#6b7280", fontSize: "0.875rem", lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARE FACILITY SECTION */}
      <section style={{ background: "#f7f6f2", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "flex", gap: "3.5rem", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 400px" }}>
              <div style={{ borderRadius: "18px", overflow: "hidden", aspectRatio: "4/3" }}>
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                  alt="ä»è­·æ½è¨­"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>
            <div style={{ flex: "1 1 380px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: "100px", padding: "0.3rem 0.9rem", marginBottom: "1.5rem" }}>
                <span style={{ color: G, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em" }}>ä»è­·æ½è¨­åãç¹åãã©ã³</span>
              </div>
              <h2 style={{ fontWeight: 900, fontSize: "clamp(1.6rem, 3.5vw, 2.3rem)", color: "#0a0a0a", lineHeight: 1.3, marginBottom: "1.25rem", letterSpacing: "-0.01em" }}>
                ãå¥å±Ú¨ãéã¾ããªãã<br />ããAIã§å¤ããã
              </h2>
              <p style={{ color: "#4b5563", fontSize: "0.92rem", lineHeight: 1.9, marginBottom: "2rem" }}>
                ãã¤ãµã¼ãã¹ã»èäººãã¼ã ã»ã°ã«ã¼ããã¼ã ãªã©ä»è­·æ½è¨­ã®éå®¢ã«ç¹åãGoogleãããã§ã®ä¸ä½è¡¨ç¤ºã»å®¶æããã®åãåããå¢å ãå®ç¾ãã¾ãã
              </p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.75rem", marginBottom: "2rem" }}>
                {["Googleãããã§ãè¿ãã®ä»è­·æ½è¨­ãä¸ä½è¡¨ç¤º", "å®¶æä¸ä»£ã¸ãªã¼ãããSNSæç¨¿ãèªåå", "ç©ºå®¤æå ±ã»è¡äºåçã®å®æçºä¿¡ã§ä¿¡é ¼UP"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ color: G, fontWeight: 800 }}>â</span>
                    <p style={{ color: "#374151", fontSize: "0.88rem", fontWeight: 500 }}>{item}</p>
                  </div>
                ))}
              </div>
              <a href="/eval" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#0a0a0a", color: "#fff", fontWeight: 700, fontSize: "0.88rem", padding: "0.8rem 1.75rem", borderRadius: "100px", textDecoration: "none" }}>
                ð æ½è¨­ã®éå®¢ãç¡æè¨ºæ­ãã â
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section style={{ background: "#0a0a0a", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <p style={{ color: G, fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>FLOW</p>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.9rem, 4vw, 2.8rem)", color: "#fff", marginBottom: "3.5rem", lineHeight: 1.25, letterSpacing: "-0.01em" }}>
            å°å¥ã®æµã
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: "1.25rem" }}>
            {steps.map((s) => (
              <div key={s.num} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: "16px", padding: "2rem" }}>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2.8rem", fontWeight: 900, color: G, lineHeight: 1, marginBottom: "1.25rem" }}>{s.num}.</p>
                <h3 style={{ fontWeight: 700, color: "#fff", fontSize: "1rem", marginBottom: "0.5rem" }}>{s.title}</h3>
                <p style={{ color: "#6b7280", fontSize: "0.85rem", lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: "#f7f6f2", padding: "6rem 0" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 1.5rem" }}>
          <p style={{ color: G, fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.2em", marginBottom: "0.75rem", textAlign: "center" }}>CONTACT</p>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.9rem, 4vw, 2.5rem)", color: "#0a0a0a", marginBottom: "0.75rem", textAlign: "center", lineHeight: 1.25, letterSpacing: "-0.01em" }}>
            ç¡æãã¢ãªã³ã°ãç³ãè¾¼ã
          </h2>
          <p style={{ color: "#6b7280", textAlign: "center", marginBottom: "3rem", fontSize: "0.875rem", lineHeight: 1.8 }}>
            éå¸¸2å¶æ¥­æ¥ä»¥åã«ãé£çµ¡ãã¾ãã<br />ã¾ãã¯ãæ°è»½ã«ãç¸è«ãã ããã
          </p>

          {status === "success" ? (
            <div style={{ background: "#fff", border: "1px solid #d1fae5", borderRadius: "16px", padding: "3.5rem", textAlign: "center" }}>
              <p style={{ fontSize: "3rem", marginBottom: "1rem" }}>â</p>
              <h3 style={{ color: "#059669", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.5rem" }}>ãç³ãè¾¼ã¿ãããã¨ããããã¾ãï¼</h3>
              <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>2å¶æ¥­æ¥ä»¥åã«ãé£çµ¡ãããã¾ãã</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: "#fff", border: "1px solid #e9e9e4", borderRadius: "18px", padding: "2.5rem", display: "flex", flexDirection: "column" as const, gap: "1.25rem", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={{ ...labelStyle, color: "#374151" }}>åºèã»æ½è¨­å <span style={{ color: "#ef4444" }}>*</span></label>
                  <input required value={form.storeName} onChange={e => setForm(p => ({...p, storeName: e.target.value}))} style={{ ...inputStyle, background: "#f9fafb", border: "1px solid #e5e7eb", color: "#0a0a0a" }} placeholder="ä¾ï¼ãããæ´éª¨é¢" />
                </div>
                <div>
                  <label style={{ ...labelStyle, color: "#374151" }}>ãæå½èå <span style={{ color: "#ef4444" }}>*</span></label>
                  <input required value={form.contactName} onChange={e => setForm(p => ({...p, contactName: e.target.value}))} style={{ ...inputStyle, background: "#f9fafb", border: "1px solid #e5e7eb", color: "#0a0a0a" }} placeholder="ä¾ï¼å±±ç° å¤ªé" />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={{ ...labelStyle, color: "#374151" }}>é»è©±çªå· <span style={{ color: "#ef4444" }}>*</span></label>
                  <input required type="tel" value={form.phone} onChange={e => setForm(p => ({...p, phone: e.target.value}))} style={{ ...inputStyle, background: "#f9fafb", border: "1px solid #e5e7eb", color: "#0a0a0a" }} placeholder="ä¾ï¼090-1234-5678" />
                </div>
                <div>
                  <label style={{ ...labelStyle, color: "#374151" }}>ã¡ã¼ã«ã¢ãã¬ã¹</label>
                  <input type="email" value={form.email} onChange={e => setForm(p => ({...p, email: e.target.value}))} style={{ ...inputStyle, background: "#f9fafb", border: "1px solid #e5e7eb", color: "#0a0a0a" }} placeholder="ä¾ï¼info@example.com" />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={{ ...labelStyle, color: "#374151" }}>é½éåºç <span style={{ color: "#ef4444" }}>*</span></label>
                  <input required value={form.prefecture} onChange={e => setForm(p => ({...p, prefecture: e.target.value}))} style={{ ...inputStyle, background: "#f9fafb", border: "1px solid #e5e7eb", color: "#0a0a0a" }} placeholder="ä¾ï¼è¨åç" />
                </div>
                <div>
                  <label style={{ ...labelStyle, color: "#374151" }}>æ¥­ç¨®</label>
                  <select value={form.businessType} onChange={e => setForm(p => ({...p, businessType: e.target.value}))} style={{ ...inputStyle, background: "#f9fafb", border: "1px solid #e5e7eb", color: "#0a0a0a" }}>
                    <option value="">é¸æãã¦ãã ãã</option>
                    <option>æ¥éª¨é¢ã»æ´éª¨é¢</option>
                    <option>æ´ä½é¢</option>
                    <option>ç¾å®¹é¢ã»ç¾å®¹å®¤</option>
                    <option>ãã¤ã«ãµã­ã³</option>
                    <option>ä»è­·ã»ãã¤ãµã¼ãã¹</option>
                    <option>é£²é£åº</option>
                    <option>ãã®ä»</option>
                  </select>
                </div>
              </div>
              <div>
                <label style={{ ...labelStyle, color: "#374151" }}>éå®¢ã®ãæ©ã¿</label>
                <select value={form.concern} onChange={e => setForm(p => ({...p, concern: e.target.value}))} style={{ ...inputStyle, background: "#f9fafb", border: "1px solid #e5e7eb", color: "#0a0a0a" }}>
                  <option value="">é¸æãã¦ãã ãã</option>
                  <option>æ°è¦é¡§å®¢ãã¢ããªã</option>
                  <option>Googleãããã«è¡¨ç¤ºãããªã</option>
                  <option>SNSãæ´æ°ããæéããªã</option>
                  <option>ãã¼ã ãã¼ã¸ããã¯åãåããããªã</option>
                  <option>ãªãã¼ã¿ã¼ãå°ãªã</option>
                  <option>ãã®ä»</option>
                </select>
              </div>
              <div>
                <label style={{ ...labelStyle, color: "#374151" }}>ãã®ä»ãè¦æã»ãè³ªå</label>
                <textarea value={form.message} onChange={e => setForm(p => ({...p, message: e.target.value}))} rows={4} style={{ ...inputStyle, background: "#f9fafb", border: "1px solid #e5e7eb", color: "#0a0a0a", resize: "vertical" as const }} placeholder="ç¾å¨ã®éå®¢ç¶æ³ã»ãè¦æãªã©ããèªç±ã«ãæ¸ããã ãã" />
              </div>
              {status === "error" && (
                <p style={{ color: "#ef4444", fontSize: "0.875rem" }}>éä¿¡ã«å¤±æãã¾ãããæéãããã¦ååº¦ãè©¦ããã ããã</p>
              )}
              <button type="submit" disabled={status === "loading"} style={{ background: status === "loading" ? "#15803d" : G, color: "#fff", fontWeight: 700, fontSize: "1rem", padding: "1rem", borderRadius: "10px", border: "none", cursor: status === "loading" ? "not-allowed" : "pointer", width: "100%", letterSpacing: "0.02em" }}>
                {status === "loading" ? "éä¿¡ä¸­..." : "ç¡æãã¢ãªã³ã°ãç³ãè¾¼ã â"}
              </button>
              <p style={{ color: "#9ca3af", fontSize: "0.75rem", textAlign: "center" }}>åäººæå ±ã¯é©åã«ç®¡çãããµã¼ãã¹æä¾ç®çä»¥å¤ã«ã¯ä½¿ç¨ãã¾ããã</p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "2.75rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <span style={{ fontFamily: "'Outfit', sans-serif", color: GL, fontWeight: 700, fontSize: "0.68rem", letterSpacing: "0.18em", display: "block" }}>AI Ã å°åéå®¢</span>
            <p style={{ color: "#fff", fontWeight: 800, fontSize: "1rem" }}>ã¾ã¡ãã©éå®¢Lab</p>
            <p style={{ color: "#374151", fontSize: "0.78rem", marginTop: "0.2rem" }}>ååä¼ç¤¾çµç¸å° | yuenchi1991@gmail.com</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "flex-end", gap: "0.5rem" }}>
            <a href="/eval" style={{ color: GL, fontSize: "0.8rem", textDecoration: "none", fontWeight: 600 }}>ð MEOã»SNS ç¡æè¨ºæ­</a>
            <p style={{ color: "#374151", fontSize: "0.78rem" }}>Â© 2026 Yuenchi LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </main>
  );
}
