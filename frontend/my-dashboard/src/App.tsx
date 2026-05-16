import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import type { Section } from './data/dashboardData';
import { Header } from './components/Header';
import { ChatBox } from './components/ChatBox';
import './index.css';

export const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<Section>('chat');

  return (
    <div className="app-container">
      <Header title={''} />
      <Sidebar selected={currentSection} onSelect={setCurrentSection} />
      <MainContent section={currentSection} />
      <ChatBox />
    </div>
  );
};

