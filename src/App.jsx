import './App.css'
import Header from './component/Header'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <div className='w-screen h-auto flex flex-auto flex-col'>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
