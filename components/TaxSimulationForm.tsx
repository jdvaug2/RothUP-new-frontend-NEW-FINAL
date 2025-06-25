import { useState } from "react";

export default function TaxSimulationForm() {
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      filing_status: "married",
      current_year: 2025,
      bracket_inflation_pct: 0.02,
      bracket_rate_shift_pct: 0.05,
      custom_future_brackets: [],
      retirement_income_future: 40000,
      conversion: 30000,
      rmd: 0
    };

    const res = await fetch("https://roth-up-backend-github-ready.onrender.com/api/project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const json = await res.json();
    setResponse(json);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: 500 }}>
      <label>Current Income Spouse 1</label>
      <input type="number" />

      <label>Current Income Spouse 2</label>
      <input type="number" />

      <label>Bracket Inflation (%)</label>
      <input type="number" />

      <label>Bracket Rate Increase (%)</label>
      <input type="number" />

      <label>Custom Future Brackets (JSON override)</label>
      <textarea />

      <button type="submit">Simulate</button>

      {response && (
        <pre>{JSON.stringify(response, null, 2)}</pre>
      )}
    </form>
  );
}
