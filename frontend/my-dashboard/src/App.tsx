import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import type { Section } from './data/dashboardData';
import './index.css';

export const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<Section>('chat');

  return (
    <div className="app-container">
      <Sidebar selected={currentSection} onSelect={setCurrentSection} />
      <MainContent section={currentSection} />
    </div>
  );
};
