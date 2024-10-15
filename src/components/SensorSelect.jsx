"use client";
import React, { useState } from "react";

const SensorSelect = () => {
  const [selectedSensor, setSelectedSensor] = useState("humedad-aire");
  const [selectedDate, setSelectedDate] = useState("");

  const handleSensorChange = (e) => {
    setSelectedSensor(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="grid bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto mt-10 ">
      {/* Selector de sensores */}
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          sensor
        </label>
        <div className="relative">
          <select
            id="sensor"
            value={selectedSensor}
            onChange={handleSensorChange}
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="humedad-aire">Humedad del aire</option>
            <option value="humedad-tierra">Humedad de la tierra</option>
            <option value="temperatura">Temperatura</option>
            <option value="co2">Concentración de CO2</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="fill-current h-4 w-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Selector de fecha */}
      <div className="mb-4">
        <label
          htmlFor="date"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          fecha:
        </label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="block w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
    </div>
  );
};

export default SensorSelect;
