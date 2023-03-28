import { useState } from 'react';
import { ConfigProvider } from 'antd';
import Chat from './pages/chat';

const defaultTheme = {
  autoInsertSpaceInButton: false
}

function App() {

  const [data, setData] = useState(defaultTheme);

  return (
    <div className="App">
      <ConfigProvider autoInsertSpaceInButton={false}>
        <Chat />
      </ConfigProvider>
    </div >
  )
}

export default App
