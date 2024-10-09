export default function Card({ title, image }) {
  return (
    <div className="card bg-gray-900 border-2 border-blue-400 rounded-lg p-6 flex flex-col items-center">
      <img className="h-32 mb-4" src={image} alt={title} />
      <h2 className="text-xl font-bold text-blue-400">{title}</h2>
    </div>
  );
}
