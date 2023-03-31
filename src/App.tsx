import { useState } from 'react';
import { ConfigProvider } from 'antd';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Chat from './pages/chat';
import Pay from './pages/pay';

const defaultTheme = {
  autoInsertSpaceInButton: false
}

function App() {

  const [data, setData] = useState(defaultTheme);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Chat />,
    },
    {
      path: "/pay",
      element: <Pay />,
    },
  ]);

  return (
    <div className="App">
      <ConfigProvider autoInsertSpaceInButton={false}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </div >
  )
}

export default App
