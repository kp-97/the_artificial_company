// src/components/Header.tsx
import React from 'react';

export interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => (
  <div className="header">
    <h1>{title}</h1>
  </div>
);
