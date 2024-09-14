import { useState, useEffect, FormEvent } from "react";

interface FormData {
  _id: string;
  name: string;
  hobby: string;
  submittedAt: string;
}

export default function FormData() {
  const [formData, setFormData] = useState({ name: "", hobby: "" });
  const [submittedData, setSubmittedData] = useState<FormData[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("/api/submit");
    const data: FormData[] = await res.json();
    setSubmittedData(data);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setFormData({ name: "", hobby: "" });
      fetchData();
    }
  };

  return (
    <div className="text-white">
      <form onSubmit={handleSubmit} className="text-black">
        <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
        <input type="text" placeholder="Hobby" value={formData.hobby} onChange={(e) => setFormData({ ...formData, hobby: e.target.value })} required />
        <button className="text-white" type="submit">
          Submit
        </button>
      </form>

      <h2>Submitted Data</h2>
      <ul>
        {submittedData.map((data) => (
          <li key={data._id}>
            {data.name} - {data.hobby} (Submitted at: {new Date(data.submittedAt).toLocaleString()})
          </li>
        ))}
      </ul>
    </div>
  );
}
