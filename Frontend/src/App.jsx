import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CreatePage from '../Components/CreatePage';
import { Route,Routes } from 'react-router-dom';
import HomePage from '../Components/HomePage';
const App = () => {
  return (
    <div className='h-screen w-full flex justify-center bg-gray-600'>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/create' element={<CreatePage/>}/>
      </Routes> 
    </div>
  )
}

export default App