import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@pages/home/home.tsx'
import React from 'react'
import { Header } from '@components/header'
const Detail = React.lazy(async () => await import('./pages/detail/detail.tsx'))

function App () {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/detail/:id' element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Detail/>
            </React.Suspense>
          }/>
          <Route path='*' element={<div>404</div>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
