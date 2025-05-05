import React from 'react';
import { ThemeProvider } from './app/constants/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      {/* Existing app entry */}
      <ExpoRouterEntry />
    </ThemeProvider>
  );
}

// Ensure ExpoRouterEntry is correctly imported
import ExpoRouterEntry from 'expo-router/entry';
