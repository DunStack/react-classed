import { useState } from "react"
import viteLogo from './vite.svg'
import typescriptLogo from './typescript.svg'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src={typescriptLogo} className="logo vanilla" alt="TypeScript logo" />
      </a>
      <h1>Vite + TypeScript</h1>
      <div className="card">
        <button id="counter" type="button" onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and TypeScript logos to learn more
      </p>
  </div>
  )
}