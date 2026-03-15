"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

export default function LeadFormModal({ isOpen, onClose, gender }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const lead = {
      ...formData,
      gender
    };

    console.log("Lead Data:", lead);

    // later API call here

    onClose();
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-slate-700"
        >
          <Icon icon="solar:close-circle-linear" width="24" />
        </button>

        <h2 className="text-2xl font-semibold text-slate-900 mb-2">
          Start Your Assessment
        </h2>

        <p className="text-sm text-slate-500 mb-6">
          Selected Program:
          <span className="text-[#4B1F4E] font-medium ml-1 capitalize">
            {gender}
          </span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full border border-slate-200 rounded-xl px-4 py-3"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full border border-slate-200 rounded-xl px-4 py-3"
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full border border-slate-200 rounded-xl px-4 py-3"
          />

          <input
            name="age"
            type="number"
            placeholder="Age"
            onChange={handleChange}
            required
            className="w-full border border-slate-200 rounded-xl px-4 py-3"
          />

          <button
            type="submit"
            className="w-full bg-[#4B1F4E] text-white py-3 rounded-xl hover:bg-[#4B1F4E]/90"
          >
            Continue
          </button>

        </form>

      </div>
    </div>
  );
}