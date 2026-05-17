"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [form, setForm] = useState({
    storeName: "", contactName: "", phone: "", email: "",
    prefecture: "", businessType: "", concern: "", message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    const { error } = await supabase.from("inquiries").insert([{
      store_name: form.storeName, contact_name: form.contactName,
      phone: form.phone, email: form.email, prefecture: form.prefecture,
      business_type: form.businessType, concern: form.concern,
      message: form.message, created_at: new Date().toISOString(),
    }]);
    if (error) { setStatus("error"); }
    else { setStatus("success"); setForm({ storeName: "", contactName: "", phone: "", email: "", prefecture: "", businessType: "", concern: "", message: "" }); }
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-200 text-sm font-medium mb-3 tracking-widest">AI × 地域集客</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">まちかど集客Lab</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4">地方の店舗・施設にAI集客の力を</p>
          <p className="text-blue-200 max-w-2xl mx-auto">MEO対策・SNS運用・Web集客をAIで自動化。月額定額で集客の悩みをまるごと解決します。</p>
          <a href="#contact" className="mt-8 inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition">無料ヒアリングを申し込む →</a>
        </div>
      </section>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">選ばれる3つの理由</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[{icon:"🤖",title:"AIが自動化",desc:"MEO・SNS・ブログをAIが代わりに更新。オーナーの作業は月2時間以内。"},{icon:"📍",title:"地域密着",desc:"地方の中小店舗・介護施設に特化。地域特性を理解した集客戦略を提供。"},{icon:"💴",title:"月額定額制",desc:"初期費用0円。成果に応じた透明な料金体系。解約はいつでも可能。"}].map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-16 px-4 bg-blue-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">無料ヒアリングを申し込む</h2>
          <p className="text-center text-gray-600 mb-8">お気軽にご相談ください。通常2営業日以内にご連絡します。</p>
          {status === "success" ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">お申し込みありがとうございます！</h3>
              <p className="text-green-700">2営業日以内にご連絡いたします。</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div><label className="block text-sm font-medium text-gray-700 mb-1">店舗・施設名 <span className="text-red-500">*</span></label><input required value={form.storeName} onChange={e => setForm(p => ({...p, storeName: e.target.value}))} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 outline-none" placeholder="例：さくら整骨院" /></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1">ご担当者名 <span className="text-red-500">*</span></label><input required value={form.contactName} onChange={e => setForm(p => ({...p, contactName: e.target.value}))} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 outline-none" placeholder="例：山田 太郎" /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div><label className="block text-sm font-medium text-gray-700 mb-1">電話番号 <span className="text-red-500">*</span></label><input required type="tel" value={form.phone} onChange={e => setForm(p => ({...p, phone: e.target.value}))} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 outline-none" placeholder="例：090-1234-5678" /></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label><input type="email" value={form.email} onChange={e => setForm(p => ({...p, email: e.target.value}))} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 outline-none" placeholder="例：info@example.com" /></div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div><label className="block text-sm font-medium text-gray-700 mb-1">都道府県 <span className="text-red-500">*</span></label><input required value={form.prefecture} onChange={e => setForm(p => ({...p, prefecture: e.target.value}))} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 outline-none" placeholder="例：茨城県" /></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1">業種</label><select value={form.businessType} onChange={e => setForm(p => ({...p, businessType: e.target.value}))} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 outline-none bg-white"><option value="">選択してください</option><option>接骨院・整骨院</option><option>整体院</option><option>美容院・美容室</option><option>ネイルサロン</option><option>介護・デイサービス</option><option>飲食店</option><option>その他</option></select></div>
              </div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">集客のお悩み</label><select value={form.concern} onChange={e => setForm(p => ({...p, concern: e.target.value}))} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 outline-none bg-white"><option value="">選択してください</option><option>新規顧客が増えない</option><option>Googleマップに表示されない</option><option>SNSを更新する時間がない</option><option>ホームページからの問い合わせがない</option><option>リピーターが少ない</option><option>その他</option></select></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">その他ご要望・ご質問</label><textarea value={form.message} onChange={e => setForm(p => ({...p, message: e.target.value}))} rows={4} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 outline-none" placeholder="現在の集客状況・ご要望などをご自由にお書きください" /></div>
              {status === "error" && <p className="text-red-600 text-sm">送信に失敗しました。時間をおいて再度お試しください。</p>}
              <button type="submit" disabled={status === "loading"} className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold py-4 rounded-xl text-lg transition">{status === "loading" ? "送信中..." : "無料ヒアリングを申し込む"}</button>
              <p className="text-xs text-gray-500 text-center">個人情報は適切に管理し、サービス提供目的以外には使用しません。</p>
            </form>
          )}
        </div>
      </section>
      <footer className="bg-gray-800 text-gray-400 py-8 px-4 text-center text-sm">
        <p className="font-medium text-white mb-1">まちかど集客Lab</p>
        <p>合同会社結縁地 | yuenchi1991@gmail.com</p>
        <p className="mt-2">© 2026 Yuenchi LLC. All rights reserved.</p>
      </footer>
    </main>
  );
}