
// App.tsx: Main application component
// Handles navigation, state, and rendering of different views
import React, { useState } from 'react';
import { Navigation } from './components/Navigation'; // Top navigation bar
import { Scanner } from './components/Scanner'; // Scanner view
import { ScanResult } from './components/ScanResult'; // Scan result view
import { ArtifactDetail } from './components/ArtifactDetail'; // Artifact detail view
import { BrowseArtifacts } from './components/BrowseArtifacts'; // Browse artifacts view
import { About } from './components/About'; // About page
import { getArtifactById } from './data/artifacts'; // Helper to get artifact data
import { ScanResult as ScanResultType } from './types/artifact'; // Type for scan result
import { Toaster } from './components/ui/sonner'; // Toast notifications

type NavigationTab = 'scanner' | 'browse' | 'about';
type ViewState = 'main' | 'scan-result' | 'artifact-detail';

export default function App() {
  // State for current tab (scanner, browse, about)
  const [activeTab, setActiveTab] = useState<NavigationTab>('scanner');
  // State for current view (main, scan result, artifact detail)
  const [viewState, setViewState] = useState<ViewState>('main');
  // State for scan result data
  const [scanResult, setScanResult] = useState<ScanResultType | null>(null);
  // State for selected artifact ID
  const [selectedArtifactId, setSelectedArtifactId] = useState<string | null>(null);

  // Called when a scan is completed
  const handleScanComplete = (result: ScanResultType) => {
    setScanResult(result);
    setViewState('scan-result');
  };

  // Called when an artifact is selected
  const handleArtifactSelect = (artifactId: string) => {
    setSelectedArtifactId(artifactId);
    setViewState('artifact-detail');
  };

  // Go back to the main view
  const handleBackToMain = () => {
    setViewState('main');
    setScanResult(null);
    setSelectedArtifactId(null);
  };

  // Change the active tab and reset view
  const handleTabChange = (tab: NavigationTab) => {
    setActiveTab(tab);
    handleBackToMain();
  };

  // Render the main content based on current state
  const renderMainContent = () => {
    // Show scan result view
    if (viewState === 'scan-result' && scanResult) {
      return (
        <ScanResult
          result={scanResult}
          onBack={handleBackToMain}
          onArtifactSelect={handleArtifactSelect}
        />
      );
    }

    // Show artifact detail view
    if (viewState === 'artifact-detail' && selectedArtifactId) {
      const artifact = getArtifactById(selectedArtifactId);
      if (!artifact) {
        handleBackToMain();
        return null;
      }
      return (
        <ArtifactDetail
          artifact={artifact}
          onBack={handleBackToMain}
          onArtifactSelect={handleArtifactSelect}
        />
      );
    }

    // Main tab content
    switch (activeTab) {
      case 'scanner':
        // Show scanner view
        return <Scanner onScanComplete={handleScanComplete} />;
      case 'browse':
        // Show browse artifacts view
        return <BrowseArtifacts onArtifactSelect={handleArtifactSelect} />;
      case 'about':
        // Show about page
        return <About />;
      default:
        return <Scanner onScanComplete={handleScanComplete} />;
    }
  };

  // Main app layout
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation bar at the top */}
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
      {/* Main content area */}
      <main className="container mx-auto px-4 py-8">
        {renderMainContent()}
      </main>
      {/* Toast notifications */}
      <Toaster />
    </div>
  );
}