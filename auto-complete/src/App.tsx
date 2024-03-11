import './App.css'

import React from 'react'

import File from './File'
// import FormulaInput from './FormulaInput'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App" data-testid="app-page">
      <header className="App-header">
        <div className="body">
          {/* <FormulaInput /> */}
          <File onSearch={undefined} />
        </div>
      </header>
    </div>
  )
}

export default App
