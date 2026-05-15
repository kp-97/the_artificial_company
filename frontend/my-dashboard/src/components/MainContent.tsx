// src/components/MainContent.tsx
import React from 'react';
import { Card } from './Card';
import { Header } from './Header';
import {type Section, type CardInfo, dashboardData } from '../data/dashboardData';

export interface MainContentProps {
  section: Section;
}

export const MainContent: React.FC<MainContentProps> = ({ section }) => {
  const cards = dashboardData[section];

  return (
    <div className="main">
      <Header title={section.charAt(0).toUpperCase() + section.slice(1)} />
      <div className="cards">
        {cards.map((c: CardInfo, idx) => (
          <Card key={idx} title={c.title} value={c.value} />
        ))}
      </div>
    </div>
  );
};
