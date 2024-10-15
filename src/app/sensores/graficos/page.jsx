import LineChart from "@/components/GraficoLineas";
import SensorSelect from "@/components/SensorSelect";

const GraficosPage = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto mt-10">
      <SensorSelect />
      <LineChart />
    </div>
  );
};

export default GraficosPage;
