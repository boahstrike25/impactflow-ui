import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Goals from './src/components/Goals.jsx';
import MicroCRM from './src/components/MicroCRM.jsx';
import CampaignBuilder from './src/components/CampaignBuilder.jsx';
import TaskManager from './src/components/TaskManager.jsx';
import ImpactLog from './src/components/ImpactLog.jsx';

const modules = {
  Goals,
  MicroCRM,
  CampaignBuilder,
  TaskManager,
  ImpactLog
};

function App() {
  const [activeModule, setActiveModule] = useState('Goals');
  const ActiveComponent = modules[activeModule];

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-100 p-4">
        <h1 className="text-2xl font-bold mb-6">ImpactFlow</h1>
        <nav className="flex flex-col gap-2">
          {Object.keys(modules).map((key) => (
            <button
              key={key}
              onClick={() => setActiveModule(key)}
              className={
                "text-left px-3 py-2 rounded " +
                (activeModule === key
                  ? "bg-blue-200 font-semibold"
                  : "hover:bg-blue-100")
              }
            >
              {key}
            </button>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <ActiveComponent />
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
