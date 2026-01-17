import React, { useState } from 'react';
import { UploadCloud, File, X } from 'lucide-react';

const FileUploader = ({ onFileSelect, onDemoSelect }) => {
    const [dragActive, setDragActive] = useState(false);
    const [file, setFile] = useState(null);

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const handleFile = (uploadedFile) => {
        // Validate type (basic)
        if (uploadedFile.type.includes('image') || uploadedFile.type.includes('pdf')) {
            setFile(uploadedFile);
            // Wait a bit to show UI state then trigger parent
            // setTimeout(() => onFileSelect(uploadedFile), 500);
        } else {
            alert("Please upload an image or PDF file.");
        }
    };

    const removeFile = () => {
        setFile(null);
    }

    return (
        <div className="container animate-fade-in" style={{ maxWidth: '800px', padding: '4rem 1rem' }}>
            <div className="text-center" style={{ marginBottom: '2rem' }}>
                <h2 style={{ marginBottom: '1rem' }}>Upload Your Report</h2>
                <p>We support images (JPG, PNG) and PDF files.</p>
            </div>

            <div
                className={`card flex-center ${dragActive ? 'drag-active' : ''}`}
                style={{
                    height: '400px',
                    border: '2px dashed var(--color-border)',
                    flexDirection: 'column',
                    backgroundColor: dragActive ? 'var(--color-primary-bg)' : 'var(--color-surface)',
                    borderColor: dragActive ? 'var(--color-primary)' : 'var(--color-border)',
                    transition: 'all var(--transition-normal)',
                    position: 'relative'
                }}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
            >
                {!file ? (
                    <>
                        <UploadCloud size={64} color="var(--color-primary)" style={{ marginBottom: '1.5rem', opacity: 0.8 }} />
                        <h3 style={{ marginBottom: '0.5rem' }}>Drag & Drop your file here</h3>
                        <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>OR</p>

                        <input
                            type="file"
                            id="file-upload"
                            style={{ display: 'none' }}
                            accept="image/*,.pdf"
                            onChange={handleChange}
                        />
                        <label htmlFor="file-upload" className="btn btn-primary">
                            Browse Files
                        </label>

                        <div style={{ marginTop: '3rem', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem', width: '80%' }}>
                            <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>Don't have a report handy?</p>
                            <button className="btn btn-secondary" onClick={onDemoSelect}>
                                Try with Demo Report
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="flex-center" style={{ flexDirection: 'column' }}>
                        <File size={48} color="var(--color-primary)" style={{ marginBottom: '1rem' }} />
                        <p style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '1.5rem' }}>{file.name}</p>
                        <div className="flex-center" style={{ gap: '1rem' }}>
                            <button className="btn btn-secondary" onClick={removeFile} style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                                Cancel
                            </button>
                            <button className="btn btn-primary" onClick={() => onFileSelect(file)}>
                                Analyze Report
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FileUploader;
