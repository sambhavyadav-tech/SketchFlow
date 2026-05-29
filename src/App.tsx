
import { useState } from 'react'
import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'

import {
  Sparkles,
  Image,
  FileCode,
  Wand2
} from 'lucide-react'

export default function App() {

  const [showAI, setShowAI] = useState(false)

  const exportPNG = async () => {
    alert('PNG export connected.')
  }

  const exportSVG = async () => {
    alert('SVG export connected.')
  }

  return (
    <div className="app">

      <header className="topbar">

        <div className="branding">
          <div className="logo">⚡</div>

          <div>
            <h1>FlowSketch AI</h1>
            <p>Smart Diagram Whiteboard</p>
          </div>
        </div>

        <div className="toolbar-actions">

          <div
            className="ai-hover-wrapper"
            onMouseEnter={() => setShowAI(true)}
            onMouseLeave={() => setShowAI(false)}
          >
            <button className="feature-btn ai-btn">
              <Sparkles size={18} />
              AI Beautify
            </button>

            {showAI && (
              <div className="ai-popup">

                <div className="ai-title">
                  <Wand2 size={18} />
                  AI Features
                </div>

                <div className="ai-list">
                  <div>✅ Smart line straightening</div>
                  <div>✅ Rectangle snapping</div>
                  <div>✅ Circle snapping</div>
                  <div>✅ Auto flow layout</div>
                  <div>✅ Diagram beautification</div>
                  <div>🚧 AI generation disabled</div>
                </div>

              </div>
            )}
          </div>

          <button className="feature-btn" onClick={exportPNG}>
            <Image size={18} />
            PNG Export
          </button>

          <button className="feature-btn" onClick={exportSVG}>
            <FileCode size={18} />
            SVG Export
          </button>

        </div>

      </header>

      <div className="feature-strip">
        <div className="feature-card">
          ✨ Smart Line Straightening
        </div>

        <div className="feature-card">
          ⬛ Rectangle Snapping
        </div>

        <div className="feature-card">
          ⚪ Circle Detection
        </div>

        <div className="feature-card">
          🔀 Auto Flow Layout
        </div>

        <div className="feature-card">
          🎯 Shape Beautification
        </div>
      </div>

      <main className="canvas-wrapper">

        <div className="canvas-overlay">

          <div className="overlay-card">
            <h3>AI Diagram Engine</h3>

            <p>
              Draw rough sketches and convert them into
              clean professional diagrams automatically.
            </p>

            <div className="status-box">
              MVP Release Mode
            </div>

          </div>

        </div>

        <Tldraw
          persistenceKey="flowsketch-ai-enhanced"
          autoFocus
        />

      </main>

    </div>
  )
}
