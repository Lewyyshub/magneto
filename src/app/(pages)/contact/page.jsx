"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      setStatus("შეტყობინება წარმატებით გაიგზავნა");
    } else {
      setStatus("შეტყობინება ვერ გაიგზავნა" + data.error);
    }
  };
  return (
    <div
      className="flex items-center justify-center h-screen flex-col gap-5"
      //   style={{
      //     backgroundImage: "url('/logo.jpg')",
      //   }}
    >
      <h2 className="text-2xl font-semibold text-gray-800 ლ">მოგვწერე</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto w-full space-y-4 bg-white p-6 rounded-2xl shadow-lg gap-5 flex flex-col"
      >
        <div className="flex-col flex gap-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            თქვენი იმეილი
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="magneto@gmail.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div className="flex-col flex gap-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            შეტყობინება
          </label>
          <textarea
            id="message"
            required
            rows="5"
            placeholder="მოგვწერე..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition duration-200"
        >
          გაგზავნა
        </button>

        {status && (
          <p className="text-sm text-center text-gray-600 mt-2">{status}</p>
        )}
      </form>
    </div>
  );
}
