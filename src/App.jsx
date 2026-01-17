import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import FileUploader from './components/FileUploader';
import ResultsView from './components/ResultsView';
import { DEMO_REPORT } from './lib/demoData';
import { Loader2 } from 'lucide-react';

function App() {
  const [view, setView] = useState('landing'); // landing, upload, processing, results
  const [reportData, setReportData] = useState(null);

  const handleStart = () => setView('upload');

  const handleFileSelect = (file) => {
    // In a real app, we would send 'file' to OCR service here.
    // For this demo, we simulate processing then show Demo Data or tailored data.
    setView('processing');
    simulateProcessing();
  };

  const handleDemoSelect = () => {
    setView('processing');
    simulateProcessing();
  };

  const simulateProcessing = () => {
    // Artificial delay to mimic AI analysis
    setTimeout(() => {
      setReportData(DEMO_REPORT);
      setView('results');
    }, 2500);
  };

  const handleReset = () => {
    setReportData(null);
    setView('upload');
  };

  const handleNavigate = (page) => {
    if (page === 'landing') setView('landing');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar onNavigate={handleNavigate} />

      <main style={{ flex: 1 }}>
        {view === 'landing' && (
          <LandingPage onStart={handleStart} />
        )}

        {view === 'upload' && (
          <FileUploader
            onFileSelect={handleFileSelect}
            onDemoSelect={handleDemoSelect}
          />
        )}

        {view === 'processing' && (
          <div className="container flex-center h-screen" style={{ flexDirection: 'column', height: '60vh' }}>
            <div className="animate-spin" style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
              <Loader2 size={48} />
            </div>
            <h2 style={{ marginBottom: '0.5rem' }}>Analyzing Report...</h2>
            <p style={{ color: 'var(--color-text-muted)' }}>Extracting biomarkers and comparing with reference ranges.</p>
          </div>
        )}

        {view === 'results' && reportData && (
          <ResultsView
            reportData={reportData}
            onReset={handleReset}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

// Add spin animation
const style = document.createElement('style');
style.textContent = `
  @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
  .animate-spin { animation: spin 1s linear infinite; }
`;
document.head.appendChild(style);

export default App;
