import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@pages/home/home.tsx'
import React from 'react'
import { Header } from '@components/header'
import { NotFoundCardStyled } from '@pages/detail/detail.styled.tsx'
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
          <Route path='*' element={
            <NotFoundCardStyled>
            <img src='/assets/images/not-found.png' alt='not found job'/>
            <p>Whoops this page doest exist</p>
          </NotFoundCardStyled>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
