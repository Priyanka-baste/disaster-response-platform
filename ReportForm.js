import React, { useState } from 'react';
import axios from 'axios';

export default function ReportForm() {
  const [form, setForm] = useState({ disaster_id: '', content: '', image_url: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    const response = await axios.post('http://localhost:5000/reports', {
      ...form,
      user_id: 'citizen1'
    });
    alert('Report submitted.');
  };

  return (
    <div>
      <h3>Submit Report</h3>
      <input name="disaster_id" placeholder="Disaster ID" onChange={handleChange} />
      <input name="content" placeholder="Content" onChange={handleChange} />
      <input name="image_url" placeholder="Image URL" onChange={handleChange} />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
