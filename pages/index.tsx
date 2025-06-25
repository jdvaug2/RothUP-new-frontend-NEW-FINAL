import TaxSimulationForm from "../components/TaxSimulationForm";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Roth Conversion Simulator</h1>
      <TaxSimulationForm />
    </div>
  );
}
