import { useState } from "react";

const CommentForms = () => {
  const [form, setForm] = useState({ name: "", comment: "", attendance: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          attendance: form.attendance === "true",
        }),
      });
      if (res.ok) {
        console.log("Comment submitted");
        setForm({ name: "", comment: "", attendance: "" });
      }
    } catch (error) {
      console.error("Failed to submit comment", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nama" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      <textarea placeholder="Komentar" value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })} required />
      <select value={form.attendance} onChange={(e) => setForm({ ...form, attendance: e.target.value })} required>
        <option value="" disabled>
          Pilih Kehadiran
        </option>
        <option value="true">Hadir</option>
        <option value="false">Tidak Hadir</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForms;
