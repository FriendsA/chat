import { useState } from 'react'
import { Button } from 'antd';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button type="primary" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </div>
  )
}

export default App
