// src/components/Card.tsx
import React from 'react';

export interface CardProps {
  title: string;
  value: string | number;
}

export const Card: React.FC<CardProps> = ({ title, value }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{value}</p>
  </div>
);
