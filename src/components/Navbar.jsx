import React from 'react';
import { Activity } from 'lucide-react';

const Navbar = ({ onNavigate }) => {
  return (
    <nav style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container flex-center" style={{ justifyContent: 'space-between' }}>
        <div 
          className="flex-center" 
          style={{ gap: '0.75rem', cursor: 'pointer' }}
          onClick={() => onNavigate('landing')}
        >
          <div style={{ 
            background: 'var(--color-primary-bg)', 
            padding: '0.5rem', 
            borderRadius: 'var(--radius-md)', 
            color: 'var(--color-primary)' 
          }}>
            <Activity size={24} />
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: '700', letterSpacing: '-0.025em' }}>
            LabLens
          </span>
        </div>
        
        <div>
          {/* Placeholder for future links or actions */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
