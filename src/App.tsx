import { useState } from "react"
import viteLogo from './vite.svg'
import typescriptLogo from './typescript.svg'
import { Link, Card, Docs } from "./components"
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Link href="https://vitejs.dev">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </Link>
      <Link href="https://www.typescriptlang.org/">
        <img src={typescriptLogo} className="logo vanilla" alt="TypeScript logo" />
      </Link>
      <h1>Vite + TypeScript</h1>
      <Card>
        <button id="counter" type="button" onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </Card>
      <Docs>
        Click on the Vite and TypeScript logos to learn more
      </Docs>
  </div>
  )
}