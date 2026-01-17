import React from 'react';
import { FileText, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

const LandingPage = ({ onStart }) => {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section style={{ padding: '5rem 0 4rem', textAlign: 'center' }}>
                <div className="container">
                    <div style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
                        <span style={{
                            background: 'var(--color-primary-bg)',
                            color: 'var(--color-primary)',
                            padding: '0.375rem 0.75rem',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.875rem',
                            fontWeight: '600'
                        }}>
                            AI-Powered Education
                        </span>
                    </div>
                    <h1 style={{ marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
                        Understand Your Blood Reports — Clearly and Simply
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--color-text-muted)',
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem'
                    }}>
                        An education-focused system that turns complex lab values into clear, human-readable insights. No confusion, just clarity.
                    </p>

                    <button className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }} onClick={onStart}>
                        Upload Blood Report <ArrowRight size={20} />
                    </button>
                </div>
            </section>

            {/* Features Grid */}
            <section style={{ padding: '4rem 0', background: 'white' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        <FeatureCard
                            icon={<FileText size={32} color="var(--color-primary)" />}
                            title="Simple Explanations"
                            desc="We translate medical jargon into plain English so you know exactly what each value means."
                        />
                        <FeatureCard
                            icon={<ShieldCheck size={32} color="var(--color-success)" />}
                            title="Safety First"
                            desc="Our system is designed for education, avoiding alarmist language and medical diagnoses."
                        />
                        <FeatureCard
                            icon={<Zap size={32} color="var(--color-warning)" />}
                            title="Instant Clarity"
                            desc="Get immediate educational context for your results, helping you have better conversations with your doctor."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const FeatureCard = ({ icon, title, desc }) => (
    <div className="card" style={{ textAlign: 'left' }}>
        <div style={{ marginBottom: '1rem' }}>{icon}</div>
        <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>{title}</h3>
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>{desc}</p>
    </div>
);

export default LandingPage;
