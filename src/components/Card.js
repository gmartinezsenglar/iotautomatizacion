import React from "react";
import Link from "next/link";

export default function Card({ title, image, href }) {
  const content = (
    <div className="card bg-gray-900 border-2 border-blue-400 rounded-lg p-6 flex flex-col items-center hover:bg-blue-800 hover:border-blue-700 transition duration-300 ease-in-out">
      <img className="h-32 mb-4" src={image} alt={title} />
      <h2 className="text-xl font-bold text-blue-400">{title}</h2>
    </div>
  );

  return href ? (
    <Link href={href}>{content}</Link>
  ) : (
    content
  );
}
