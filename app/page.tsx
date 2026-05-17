"use client";
import React, { useState } from "react";
import { supabase } from "@/lib/supabase";

const concerns = [
  "新規のお客様がなかなか増えない",
  "Googleマップで上位表示されない",
  "SNSを更新する時間がない",
  "ホームページへの問い合わせがゼロ",
  "チラシを配っても反応が薄い",
  "競合他店に差をつけられない",
];

const features = [
  {
    num: "01",
    icon: "🤖",
    title: "AIが丸ごと自動化",
    desc: "MEO対策・SNS投稿・ブログ更新をAIが代行。オーナー様の集客業務を月2時間以内に圧縮します。",
  },
  {
    num: "02",
    icon: "📍",
    title: "地方特化の戦略",
    desc: "大都市向けの汎用策ではなく、地域特性・競合環境を分析した地方専用の集客戦略を設計します。",
  },
  {
    num: "03",
    icon: "💴",
    title: "成果重視の定額制",
    desc: "初期費用0円。月額定額で全施策をパッケージ。解約も1ヶ月前通知のみで、リスクなくスタートできます。",
  },
];

const services = [
  { name: "MEO対策（Googleマップ最適化）", desc: "Googleビジネスプロフィールの最適化・口コミ管理・投稿自動化" },
  { name: "SNS運用代行", desc: "Instagram・LINE公式・Googleビジネスの投稿をAIが自動生成・代行投稿" },
  { name: "AIチャットボット設置", desc: "24時間対応のAIチャットで問い合わせを自動化。機会損失をゼロに" },
  { name: "Webサイト改善提案", desc: "既存サイトのSEO・UI改善提案。集客につながるコンテンツ設計" },
  { name: "月次集客レポート", desc: "数字で確認できる集客レポート。施策の効果を毎月可視化" },
];

const steps = [
  { num: "1", title: "無料ヒアリング", desc: "現在の集客課題・目標をオンラインでヒアリング（30分程度）" },
  { num: "2", title: "プラン提案", desc: "課題に合わせたカスタムプランをご提案。料金も明確にご案内" },
  { num: "3", title: "導入・設定", desc: "MEO・SNS・チャットボットの設定をすべてお任せください" },
  { num: "4", title: "運用スタート", desc: "毎月のレポートで効果確認。随時改善を繰り返しながら成長" },
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

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        backdropFilter: "blur(14px)",
        backgroundColor: "rgba(10,10,10,0.88)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <span style={{ fontFamily: "'Outfit', sans-serif", color: GL, fontWeight: 700, fontSize: "0.68rem", letterSpacing: "0.18em", display: "block", lineHeight: 1 }}>AI × 地域集客</span>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "1.05rem", lineHeight: 1.1 }}>まちかど集客Lab</span>
          </div>
          <a href="#contact" style={{ background: G, color: "#fff", fontWeight: 700, fontSize: "0.82rem", padding: "0.55rem 1.4rem", borderRadius: "100px", textDecoration: "none", letterSpacing: "0.02em" }}>
            無料相談 →
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ background: "#0a0a0a", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "64px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-15%", right: "-8%", width: "700px", height: "700px", background: "radial-gradient(circle, rgba(34,197,94,0.11) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "0", left: "-5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(34,197,94,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 1.5rem 6rem", width: "100%" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.35)", borderRadius: "100px", padding: "0.35rem 1rem", marginBottom: "2.5rem" }}>
            <span style={{ width: "6px", height: "6px", background: GL, borderRadius: "50%", display: "inline-block" }} />
            <span style={{ color: GL, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em" }}>地方の中小店舗・介護施設専門</span>
          </div>

          <h1 style={{ color: "#fff", fontWeight: 900, lineHeight: 1.12, marginBottom: "1.75rem", letterSpacing: "-0.02em" }}>
            <span style={{ display: "block", fontSize: "clamp(2.8rem, 7.5vw, 6rem)" }}>AIで、集客を</span>
            <span style={{ display: "block", fontSize: "clamp(2.8rem, 7.5vw, 6rem)", color: GL }}>自動化する。</span>
          </h1>

          <p style={{ color: "#9ca3af", fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)", lineHeight: 1.9, maxWidth: "540px", marginBottom: "3rem" }}>
            MEO対策・SNS運用・AIチャットボットを月額定f!�mで仠きとクープ。
             <br />
            地方の店舗・施設が、都市部と同じ集客力を手に入れる。
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "5rem" }}>
            <a href="#contact" style={{ background: G, color: "#fff", fontWeight: 700, fontSize: "1rem", padding: "0.9rem 2.4rem", borderRadius: "100px", textDecoration: "none" }}>
              無料ヒアリングを申し込む →
            </a>
            <a href="#services" style={{ background: "transparent", color: "#d1d5db", fontWeight: 600, fontSize: "1rem", padding: "0.9rem 2rem", borderRadius: "100px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.18)" }}>
              サービスを見る
            </a>
          </div>

          <div style={{ display: "flex", gap: "3.5rem", flexWrap: "wrap", paddingTop: "2.5rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {[{ num: "0円", label: "初期費用" }, { num: "月2h", label: "オーナーの作業時間" }, { num: "100%", label: "AI自動化対応" }].map((s) => (
              <div key={s.label}>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2.4rem", fontWeight: 800, color: GL, lineHeight: 1 }}>{s.num}</p>
                <p style={{ color: "#6b7280", fontSize: "0.82rem", marginTop: "0.35rem" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEMS ── */}
      <section style={{ background: "#f7f6f2", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <p style={{ color: G, fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>PROBLEM</p>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.9rem, 4vw, 2.8rem)", color: "#0a0a0a", marginBottom: "2.5rem", lineHeight: 1.25, letterSpacing: "-0.01em" }}>
            こんなお悩み、<br />ありませんか？
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: "0.875rem" }}>
            {concerns.map((c, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #e9e9e4", borderRadius: "12px", padding: "1.1rem 1.4rem", display: "flex", alignItems: "center", gap: "0.875rem" }}>
                <span style={{ color: "#ef4444", fontSize: "1rem", flexShrink: 0, fontWeight: 700 }}>✗</span>
                <p style={{ color: "#374151", fontSize: "0.92rem", fontWeight: 500, lineHeight: 1.5 }}>{c}</p>
              </div>
            ))}
          </div>
          <div style={{ background: "#0a0a0a", borderRadius: "14px", padding: "2.25rem 2.5rem", marginTop: "2.5rem", display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "1.75rem" }}>💡</span>
            <div>
              <p style={{ color: "#fff", fontWeight: 800, fontSize: "1.1rem", marginBottom: "0.2rem" }}>それ、まちかど集客Labが解決します</p>
              <p style={{ color: "#6b7280", fontSize: "0.88rem" }}>AIと地域密着の専門知識で、集客の悩みをまるごとお任せください。</p>
            </div>
            <a href="#contact" style={{ marginLeft: "auto", background: G, color: "#fff", fontWeight: 700, fontSize: "0.85rem", padding: "0.65rem 1.5rem", borderRadius: "100px", textDecoration: "none", whiteSpace: "nowrap" }}>
              相談する →
            </a>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ background: "#0a0a0a", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <p style={{ color: G, fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>FEATURE</p>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.9rem, 4vw, 2.8rem)", color: "#fff", marginBottom: "3.5rem", lineHeight: 1.25, letterSpacing: "-0.01em" }}>
            選ばれる3つの理由
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
            {features.map((f) => (
              <div key={f.num} style={{ border: "1px solid rgba(255,255,255,0.09)", borderRadius: "16px", padding: "2rem", position: "relative", overflow: "hidden", background: "rgba(255,255,255,0.025)" }}>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "5rem", fontWeight: 900, color: "rgba(34,197,94,0.1)", position: "absolute", top: "-1rem", right: "1rem", lineHeight: 1, userSelect: "none" }}>{f.num}</span>
                <p style={{ fontSize: "2rem", marginBottom: "1.25rem" }}>{f.icon}</p>
                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.75rem" }}>{f.title}</h3>
                <p style={{ color: "#9ca3af", fontSize: "0.88rem", lineHeight: 1.85 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ background: "#fff", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <p style={{ color: G, fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>SERVICE</p>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.9rem, 4vw, 2.8rem)", color: "#0a0a0a", marginBottom: "3rem", lineHeight: 1.25, letterSpacing: "-0.01em" }}>
            サービス内容
          </h2>
          <div>
            {services.map((s, i) => (
              <div key={s.name} style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem", padding: "1.5rem 0", borderBottom: i < services.length - 1 ? "1px solid #f0efe9" : "none" }}>
                <div style={{ width: "34px", height: "34px", minWidth: "34px", background: "#f0fdf4", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px" }}>
                  <span style={{ color: G, fontWeight: 800, fontSize: "0.9rem" }}>✓</span>
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

      {/* ── HOW IT WORKS ── */}
      <section style={{ background: "#f7f6f2", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <p style={{ color: G, fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>FLOW</p>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.9rem, 4vw, 2.8rem)", color: "#0a0a0a", marginBottom: "3.5rem", lineHeight: 1.25, letterSpacing: "-0.01em" }}>
            導入の流れ
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: "1.25rem" }}>
            {steps.map((s) => (
              <div key={s.num} style={{ background: "#fff", borderRadius: "16px", padding: "2rem", border: "1px solid #e9e9e4" }}>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "2.8rem", fontWeight: 900, color: G, lineHeight: 1, marginBottom: "1.25rem" }}>{s.num}.</p>
                <h3 style={{ fontWeight: 700, color: "#0a0a0a", fontSize: "1rem", marginBottom: "0.5rem" }}>{s.title}</h3>
                <p style={{ color: "#6b7280", fontSize: "0.85rem", lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ background: "#0a0a0a", padding: "6rem 0" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 1.5rem" }}>
          <p style={{ color: G, fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.2em", marginBottom: "0.75rem", textAlign: "center" }}>CONTACT</p>
          <h2 style={{ fontWeight: 900, fontSize: "clamp(1.9rem, 4vw, 2.5rem)", color: "#fff", marginBottom: "0.75rem", textAlign: "center", lineHeight: 1.25, letterSpacing: "-0.01em" }}>
            無料ヒアリングを申し込む
          </h2>
          <p style={{ color: "#6b7280", textAlign: "center", marginBottom: "3rem", fontSize: "0.875rem", lineHeight: 1.8 }}>
            通常2営業日以内にご連絡します。<br />まずはお気軽にご相談ください。
          </p>

          {status === "success" ? (
            <div style={{ background: "rgba(34,197,94,0.09)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: "16px", padding: "3.5rem", textAlign: "center" }}>
              <p style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</p>
              <h3 style={{ color: GL, fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.5rem" }}>お申し込みありがとうございます！</h3>
              <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>2営業日以内にご連絡いたします。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: "18px", padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={labelStyle}>店舗・施設名 <span style={{ color: "#f87171" }}>*</span></label>
                  <input required value={form.storeName} onChange={e => setForm(p => ({...p, storeName: e.target.value}))} style={inputStyle} placeholder="例：さくら整骨院" />
                </div>
                <div>
                  <label style={labelStyle}>ご担当者名 <span style={{ color: "#f87171" }}>*</span></label>
                  <input required value={form.contactName} onChange={e => setForm(p => ({...p, contactName: e.target.value}))} style={inputStyle} placeholder="例：山田 太郎" />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={labelStyle}>電話番号 <span style={{ color: "#f87171" }}>*</span></label>
                  <input required type="tel" value={form.phone} onChange={e => setForm(p => ({...p, phone: e.target.value}))} style={inputStyle} placeholder="例：090-1234-5678" />
                </div>
                <div>
                  <label style={labelStyle}>メールアドレス</label>
                  <input type="email" value={form.email} onChange={e => setForm(p => ({...p, email: e.target.value}))} style={inputStyle} placeholder="例：info@example.com" />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label style={labelStyle}>都道府県 <span style={{ color: "#f87171" }}>*</span></label>
                  <input required value={form.prefecture} onChange={e => setForm(p => ({...p, prefecture: e.target.value}))} style={inputStyle} placeholder="例：茨城県" />
                </div>
                <div>
                  <label style={labelStyle}>業種</label>
                  <select value={form.businessType} onChange={e => setForm(p => ({...p, businessType: e.target.value}))} style={{ ...inputStyle, background: "#111" }}>
                    <option value="">選択してください</option>
                    <option>接骨院・整骨院</option>
                    <option>整体院</option>
                    <option>美容院・美容室</option>
                    <option>ネイルサロン</option>
                    <option>介護・デイサービス</option>
                    <option>飲食店</option>
                    <option>その他</option>
                  </select>
                </div>
              </div>
              <div>
                <label style={labelStyle}>集客のお悩み</label>
                <select value={form.concern} onChange={e => setForm(p => ({...p, concern: e.target.value}))} style={{ ...inputStyle, background: "#111" }}>
                  <option value="">選択してください</option>
                  <option>新規顧客が増えない</option>
                  <option>Googleマップに表示されない</option>
                  <option>SNSを更新する時間がない</option>
                  <option>ホームページからの問い合わせがない</option>
                  <option>リピーターが少ない</option>
                  <option>その他</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>その他ご要望・ご質問</label>
                <textarea value={form.message} onChange={e => setForm(p => ({...p, message: e.target.value}))} rows={4} style={{ ...inputStyle, resize: "vertical" as const }} placeholder="現在の集客状況・ご要望などをご自由にお書きください" />
              </div>
              {status === "error" && (
                <p style={{ color: "#f87171", fontSize: "0.875rem" }}>送信に失敗しました。時間をおあて再度お試しください。</p>
              )}
              <button type="submit" disabled={status === "loading"} style={{ background: status === "loading" ? "#15803d" : G, color: "#fff", fontWeight: 700, fontSize: "1rem", padding: "1rem", borderRadius: "10px", border: "none", cursor: status === "loading" ? "not-allowed" : "pointer", width: "100%", letterSpacing: "0.02em" }}>
                {status === "loading" ? "送信中..." : "無料ヒアリングを申し込む →"}
              </button>
              <p style={{ color: "#4b5563", fontSize: "0.75rem", textAlign: "center" }}>個人情報は適切に管理し、サービス提供目的以外には使用しません。</p>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#050505", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "2.75rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <span style={{ fontFamily: "'Outfit', sans-serif", color: GL, fontWeight: 700, fontSize: "0.68rem", letterSpacing: "0.18em", display: "block" }}>AI × 地域集客</span>
            <p style={{ color: "#fff", fontWeight: 800, fontSize: "1rem" }}>まちかど集客Lab</p>
            <p style={{ color: "#374151", fontSize: "0.78rem", marginTop: "0.2rem" }}>合同会社結縁地 | yuenchi1991@gmail.com</p>
          </div>
          <p style={{ color: "#374151", fontSize: "0.78rem" }}>© 2026 Yuenchi LLC. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}
