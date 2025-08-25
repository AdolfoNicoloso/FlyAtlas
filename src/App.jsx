import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import HomePage from './pages/HomePage.jsx'
import StudyPage from './pages/StudyPage.jsx'
import TestPage from './pages/TestPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/study" element={<StudyPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          {/* Optionally a catch-all: */}
          {/* <Route path="*" element={<HomePage />} /> */}
        </Routes>
      </main>
      <footer className="py-6 text-center text-xs text-fly-muted">
        Built with ❤️ for FlyApp
      </footer>
    </div>
  )
}
