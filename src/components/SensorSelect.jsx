"use client";
import React, { useState } from "react";

const SensorSelect = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleSensorChange = (e) => {
    setSelectedSensor(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
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
  );
};

export default SensorSelect;
