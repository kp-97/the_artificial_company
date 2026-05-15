import React from 'react';
import type { Section } from '../data/dashboardData';

export interface SidebarProps {
  selected: Section;
  onSelect: (section: Section) => void;
}

const items: Section[] = ['chat', 'tasks', 'calendar', 'app'];
const labels: Record<Section, string> = {
  chat: 'Chat',
  tasks: 'Tasks',
  calendar: 'Calendar',
  app: 'App',
};

export const Sidebar: React.FC<SidebarProps> = ({ selected, onSelect }) => (
  <nav className="sidebar">
    <h2>Dashboard</h2>
    <ul>
      {items.map((section) => (
        <li
          key={section}
          data-section={section}
          className={section === selected ? 'active' : ''}
          onClick={() => onSelect(section)}
        >
          {labels[section]}
        </li>
      ))}
    </ul>
  </nav>
);

