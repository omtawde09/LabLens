import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '3rem 0',
            marginTop: 'auto',
            borderTop: '1px solid var(--color-border)',
            backgroundColor: 'white'
        }}>
            <div className="container text-center">
                <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-muted)',
                    marginBottom: '1rem',
                    maxWidth: '600px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    <strong>Disclaimer:</strong> This system provides educational information only.
                    It does not provide medical diagnoses, treatment advice, or predictive health analysis.
                    Always consult a qualified healthcare professional for medical concerns.
                </p>
                <p style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                    &copy; {new Date().getFullYear()} LabLens. Built for demo purposes.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
