import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CommandLauncher from './components/CommandLauncher'
import './App.css'

function App() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <CommandLauncher />

      {/* Footer - Minimalist placeholder to match the vibe */}
      <footer className="relative z-10 py-10 px-6 text-center bg-black" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'var(--bg-black)' }}>
        <p className="text-dim font-sans" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          ©IPG Performance Data System 2026. All rights reserved. · Privacy · Terms
        </p>
      </footer>
    </main>
  )
}

export default App
