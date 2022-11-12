import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './view/pages/Main';
import Foundation from './view/pages/Foundation';
import Components from './view/pages/Components';

export default function AppRouter() {
  return (
      <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Foundation" element={<Foundation />}></Route>
          <Route path="/Components" element={<Components />}></Route>
    </Routes>
  )
}
