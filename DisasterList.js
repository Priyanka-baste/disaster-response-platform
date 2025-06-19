import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function DisasterList() {
  const [disasters, setDisasters] = useState([]);

  const loadDisasters = async () => {
    const res = await axios.get('http://localhost:5000/disasters');
    setDisasters(res.data);
  };

  useEffect(() => {
    loadDisasters();
  }, []);

  return (
    <div>
      <h3>All Disasters</h3>
      <ul>
        {disasters.map(d => (
          <li key={d.id}>
            <strong>{d.title}</strong> - {d.description} ({d.tags?.join(', ')})
          </li>
        ))}
      </ul>
    </div>
  );
}
