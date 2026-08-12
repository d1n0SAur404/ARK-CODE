import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import GamePage from '@/pages/GamePage'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import ProfilePage from '@/pages/ProfilePage'
import OperatorQueryPage from '@/pages/OperatorQueryPage'
import ForumPage from '@/pages/ForumPage'
import ShopPage from '@/pages/ShopPage'
import LeaderboardPage from '@/pages/LeaderboardPage'
import MultiplayerRoomPage from '@/pages/MultiplayerRoomPage'
import { Header } from '@components/Header'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-ark-bg text-ark-text transition-colors duration-300">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/operators" element={<OperatorQueryPage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/multiplayer" element={<MultiplayerRoomPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
