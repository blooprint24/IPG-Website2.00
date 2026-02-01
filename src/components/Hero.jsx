import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = 'Jot something down or hit / for lazy commands...';

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background elements */}
            <div className="spotlight-container">
                <div className="spotlight-circle"></div>
            </div>

            {/* The Flare */}
            <div className="flare-line"></div>

            {/* Main Content */}
            <div className="z-10 flex flex-col items-center px-6 w-full max-w-4xl pt-40 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex items-center gap-3 mb-8"
                >
                    <div style={{ height: '1px', width: '40px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
                    <span className="text-dim uppercase tracking-[0.2em] font-sans" style={{ fontSize: '10px', fontWeight: 'bold' }}>
                        Performance Data System (PDS)
                    </span>
                    <div style={{ height: '1px', width: '40px', backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="font-serif text-6xl text-center mb-8 tracking-tight text-white italic"
                    style={{ fontWeight: '400' }}
                >
                    Capture <span style={{ fontFamily: 'var(--font-sans)', fontWeight: '300', fontStyle: 'normal', color: 'rgba(255,255,255,0.7)' }}>at the speed of thought</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="text-dim text-center mb-16 font-sans"
                    style={{ fontSize: '14px', letterSpacing: '0.02em' }}
                >
                    One keyboard shortcut to take notes & save information.
                </motion.p>

                {/* The Central Terminal */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="terminal-frame flex flex-col justify-between relative"
                    style={{ minHeight: '180px', padding: '1.5rem 2rem' }}
                >
                    <div className="flex items-start justify-between w-full">
                        <div className="flex items-center gap-3 w-full pr-20">
                            <span className="text-dim font-sans" style={{ fontSize: '15px', lineHeight: '1.5' }}>
                                {text}
                                <span className="animate-pulse">|</span>
                            </span>
                        </div>
                        <div className="absolute top-6 right-6 flex gap-3">
                            <a href="https://links.idealperformancegroup.com/widget/form/CWVJ2uJG6d1ZurQjpIE8" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '11px', padding: '0.4rem 1rem', textDecoration: 'none' }}>Friction Audit</a>
                            <button className="btn-glass" style={{ fontSize: '11px', padding: '0.4rem 1rem' }}>Capture</button>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                            <div style={{ width: '18px', height: '18px', borderRadius: '4px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontSize: '9px', opacity: 0.5 }}>⌘</span>
                            </div>
                            <span className="text-dim" style={{ fontSize: '11px', fontWeight: '500' }}>PDS · Performance Data System</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-dim" style={{ fontSize: '11px', opacity: 0.4 }}>Inbox</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="mt-20 text-center"
                >
                    <p className="text-dim uppercase tracking-widest" style={{ fontSize: '10px', fontWeight: 'bold' }}>
                        Try the demo <span style={{ fontWeight: 'normal', textTransform: 'none', color: 'rgba(255,255,255,0.4)', marginLeft: '1rem' }}>— Get a feel for how the PDS works to jot down something.</span>
                    </p>
                </motion.div>
            </div>

            <style jsx>{`
        .animate-pulse {
          animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
