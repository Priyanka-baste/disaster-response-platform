import React from 'react';
import DisasterForm from './components/DisasterForm';
import ReportForm from './components/ReportForm';
import DisasterList from './components/DisasterList';
import WebSocketListener from './components/WebSocketListener';

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>🛠️ Disaster Response Coordination</h1>
      <WebSocketListener />
      <div style={{ marginBottom: "20px" }}>
        <DisasterForm />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <ReportForm />
      </div>
      <DisasterList />
    </div>
  );
}

export default App;
