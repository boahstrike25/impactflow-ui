import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to ImpactFlow</h1>
      <p className="text-lg">
        This is your modular, lightweight workspace for tracking goals, managing contacts,
        launching campaigns, and showcasing impact.
      </p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
