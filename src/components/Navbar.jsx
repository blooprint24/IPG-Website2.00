import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full flex justify-center z-50 pt-4">
      <div className="flex items-center justify-between w-full max-w-7xl px-8 py-2 rounded-full" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
        <div className="flex items-center gap-4">
          {/* Minimal IPG Logo */}
          <div style={{
            width: '24px',
            height: '24px',
            borderRadius: '4px',
            backgroundColor: 'var(--ipg-blue)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 10px var(--ipg-blue-glow)'
          }}>
            <span style={{ fontSize: '10px', fontWeight: 'bold', color: 'white' }}>PDS</span>
          </div>
          <span className="font-sans font-bold tracking-tight text-white uppercase italic" style={{ fontSize: '14px', letterSpacing: '0.1em' }}>
            PDS
          </span>
        </div>

        <div className="md-flex items-center gap-12 hidden text-dim" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          <a href="#systems" style={{ color: 'inherit', textDecoration: 'none' }} className="hover-white transition-colors">Captures</a>
          <a href="#performance" style={{ color: 'inherit', textDecoration: 'none' }} className="hover-white transition-colors">Systems</a>
          <a href="#about" style={{ color: 'inherit', textDecoration: 'none' }} className="hover-white transition-colors">About</a>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-dim hover-white transition-colors" style={{ fontSize: '12px', fontWeight: '500', background: 'none', border: 'none', cursor: 'pointer' }}>Log in</button>
          <a href="https://links.idealperformancegroup.com/widget/form/CWVJ2uJG6d1ZurQjpIE8" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '11px', padding: '0.5rem 1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', textDecoration: 'none' }}>Friction Audit</a>
        </div>
      </div>

      <style jsx>{`
        .hover-white:hover { color: white; transition: color 0.2s; }
      `}</style>
    </nav>
  );
};

export default Navbar;
