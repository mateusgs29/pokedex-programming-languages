import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LanguagesList from './pages/LanguagesList'
import LanguagePage from './pages/LanguagePage'

const RoutesLanguage = () => {
  return (
      <Routes>
        <Route path="/" element={<LanguagesList />} />
        <Route path=":id" element={< LanguagePage />} />
      </Routes>
  )
}

export default RoutesLanguage