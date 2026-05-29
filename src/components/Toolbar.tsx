
import {
  PenTool,
  Shapes,
  MousePointer2,
  Download,
  Undo2,
  Redo2,
  Moon,
  Sparkles
} from 'lucide-react'

interface Props {
  toggleTheme: () => void
  exportBoard: () => void
}

export default function Toolbar({ toggleTheme, exportBoard }: Props) {
  return (
    <header className="topbar">
      <div className="branding">
        <div className="logo">⚡</div>

        <div>
          <h1>FlowSketch Ultimate</h1>
          <p>Smart Diagram Whiteboard</p>
        </div>
      </div>

      <div className="toolbar-center">
        <div className="tool-pill"><MousePointer2 size={18}/> Select</div>
        <div className="tool-pill"><PenTool size={18}/> Draw</div>
        <div className="tool-pill"><Shapes size={18}/> Shapes</div>
        <div className="tool-pill"><Undo2 size={18}/> Undo</div>
        <div className="tool-pill"><Redo2 size={18}/> Redo</div>
      </div>

      <div className="toolbar-actions">
        <button className="feature-btn disabled">
          <Sparkles size={18} />
          AI Beautify
        </button>

        <button className="feature-btn" onClick={exportBoard}>
          <Download size={18} />
          Export
        </button>

        <button className="feature-btn secondary" onClick={toggleTheme}>
          <Moon size={18} />
        </button>
      </div>
    </header>
  )
}
