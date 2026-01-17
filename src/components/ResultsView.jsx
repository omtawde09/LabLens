import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Info, AlertCircle, CheckCircle } from 'lucide-react';

const ResultsView = ({ reportData, onReset }) => {
    return (
        <div className="container animate-fade-in" style={{ padding: '3rem 1rem' }}>
            <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h2 style={{ marginBottom: '0.5rem' }}>Report Interpretation</h2>
                    <p>Educational insights based on your values.</p>
                </div>
                <button className="btn btn-secondary" onClick={onReset}>
                    Upload Another
                </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {reportData.biomarkers.map((item, index) => (
                    <BiomarkerCard key={index} data={item} />
                ))}
            </div>

            <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--color-bg)', borderRadius: 'var(--radius-lg)' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <Info size={20} color="var(--color-primary)" /> Note
                </h4>
                <p style={{ fontSize: '0.9rem' }}>
                    Reference ranges can vary between laboratories. The interpretations above are based on standard medical guidelines but may not align perfectly with your specific lab's ranges. Always defer to the reference range provided on your hard copy report.
                </p>
            </div>
        </div>
    );
};

const BiomarkerCard = ({ data }) => {
    const [expanded, setExpanded] = useState(false);

    // Status Logic
    const getStatusColor = (status) => {
        switch (status) {
            case 'normal': return 'var(--color-success)';
            case 'borderline': return 'var(--color-warning)';
            case 'out_of_range': return 'var(--color-danger-soft)';
            default: return 'var(--color-text-muted)';
        }
    };

    const getStatusBg = (status) => {
        switch (status) {
            case 'normal': return 'var(--color-success-bg)';
            case 'borderline': return 'var(--color-warning-bg)';
            case 'out_of_range': return 'var(--color-danger-bg)';
            default: return '#f1f5f9';
        }
    };

    const getIcon = (status) => {
        switch (status) {
            case 'normal': return <CheckCircle size={20} color={getStatusColor(status)} />;
            case 'borderline': return <AlertCircle size={20} color={getStatusColor(status)} />;
            case 'out_of_range': return <AlertCircle size={20} color={getStatusColor(status)} />;
            default: return <Info size={20} />;
        }
    };

    return (
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            {/* Header / Summary Row */}
            <div
                onClick={() => setExpanded(!expanded)}
                style={{
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    background: expanded ? '#f8fafc' : 'white',
                    transition: 'background 0.2s'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: getStatusBg(data.status),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {getIcon(data.status)}
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{data.name}</h3>
                        <div style={{ display: 'flex', gap: '1rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                            <span>Value: <strong>{data.value} {data.unit}</strong></span>
                            <span>Ref: {data.range}</span>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        background: getStatusBg(data.status),
                        color: getStatusColor(data.status)
                    }}>
                        {data.statusLabel}
                    </span>
                    {expanded ? <ChevronUp size={20} color="#94a3b8" /> : <ChevronDown size={20} color="#94a3b8" />}
                </div>
            </div>

            {/* Expanded Content */}
            {expanded && (
                <div style={{ padding: '1.5rem', borderTop: '1px solid var(--color-border)', animation: 'fadeIn 0.3s' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        <div>
                            <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>What is it?</h4>
                            <p style={{ marginBottom: '1.5rem' }}>{data.explanation}</p>

                            <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Why it matters</h4>
                            <p>{data.relevance}</p>
                        </div>
                        <div>
                            <h4 style={{ color: 'var(--color-text-main)', marginBottom: '0.5rem' }}>Your Value Explained</h4>
                            <p style={{ marginBottom: '1.5rem' }}>{data.context}</p>

                            <div style={{ padding: '1rem', background: 'var(--color-bg)', borderRadius: 'var(--radius-md)' }}>
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>General Lifestyle Awareness</h4>
                                <p style={{ fontSize: '0.9rem' }}>{data.lifestyle}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResultsView;
