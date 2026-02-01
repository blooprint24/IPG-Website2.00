import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CommandLauncher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const actions = [
        { label: 'Capture Thought', desc: 'Save current context' },
        { label: 'Search Archives', desc: 'Institutional memory' },
        { label: 'Optimize System', desc: 'Precision analytics' },
        { label: 'Settings', desc: 'Environment config' },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-[100]"
                        style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: -10 }}
                        className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl z-[101] px-6"
                    >
                        <div className="terminal-frame overflow-hidden" style={{ padding: 0 }}>
                            <div className="flex items-center px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Type a command..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="bg-transparent border-none outline-none w-full text-white font-sans"
                                    style={{ fontSize: '15px' }}
                                />
                            </div>

                            <div className="p-2">
                                {actions.map((action, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-white/5 cursor-pointer transition-all group"
                                    >
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                                                {action.label}
                                            </span>
                                            <span className="text-[10px] text-dim">{action.desc}</span>
                                        </div>
                                        <span className="text-[10px] text-dim opacity-0 group-hover:opacity-100 transition-opacity">Enter ↵</span>
                                    </div>
                                ))}
                            </div>

                            <div className="px-6 py-3 bg-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-dim font-bold uppercase tracking-widest">PDS Command</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <kbd className="btn-glass" style={{ fontSize: '8px', padding: '2px 6px' }}>↑↓</kbd>
                                    <kbd className="btn-glass" style={{ fontSize: '8px', padding: '2px 6px' }}>Esc</kbd>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CommandLauncher;
