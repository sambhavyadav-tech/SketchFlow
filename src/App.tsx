
import { useState } from 'react'
import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'
import Toolbar from './components/Toolbar'
import AIPanel from './components/AIPanel'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle('light')
  }

  const exportBoard = async () => {
    alert('PNG/SVG export integration coming next update')
  }

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Toolbar
        toggleTheme={toggleTheme}
        exportBoard={exportBoard}
      />

      <main className="canvas-wrapper">
        <div className="canvas-overlay">
          <AIPanel />
        </div>

        <Tldraw persistenceKey="flowsketch-ultimate-board" />
      </main>
    </div>
  )
}
