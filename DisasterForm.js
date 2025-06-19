import React, { useState } from 'react';
import axios from 'axios';

export default function DisasterForm() {
  const [form, setForm] = useState({ title: '', location_name: '', description: '', tags: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    const response = await axios.post('http://localhost:5000/disasters', {
      ...form,
      tags: form.tags.split(','),
      owner_id: 'netrunnerX'
    });
    alert('Disaster added: ' + response.data.title);
  };

  return (
    <div>
      <h3>Create Disaster</h3>
      <input name="title" placeholder="Title" onChange={handleChange} />
      <input name="location_name" placeholder="Location Name" onChange={handleChange} />
      <input name="description" placeholder="Description" onChange={handleChange} />
      <input name="tags" placeholder="Tags (comma-separated)" onChange={handleChange} />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
