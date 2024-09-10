"use client"; 

import { useState } from 'react';

const Formulary = ({ formData, onSubmit }) => {
  const [formValues, setFormValues] = useState(
    formData.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {formData.map((field) => (
        <div key={field.name} className="flex flex-col">
          <label htmlFor={field.name} className="text-lg font-semibold">{field.label}</label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              value={formValues[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              rows={field.rows || 4}
              className="border p-2 mt-1 rounded"
            />
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formValues[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={field.required}
              className="border p-2 mt-1 rounded"
            />
          )}
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Enviar
      </button>
    </form>
  );
};

export default Formulary;
