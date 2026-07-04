import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth'
import { ProtectedRoute } from './components/ProtectedRoute'
import Splash from './pages/Splash'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ChatHome from './pages/ChatHome'
import ChatConversation from './pages/ChatConversation'
import Bible from './pages/Bible'
import Prayer from './pages/Prayer'
import Profile from './pages/Profile'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app-shell">
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Signup />} />
            <Route
              path="/chat"
              element={
                <ProtectedRoute>
                  <ChatHome />
                </ProtectedRoute>
              }
            />
            <Route
              path="/chat/conversa"
              element={
                <ProtectedRoute>
                  <ChatConversation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/biblia"
              element={
                <ProtectedRoute>
                  <Bible />
                </ProtectedRoute>
              }
            />
            <Route
              path="/oracao"
              element={
                <ProtectedRoute>
                  <Prayer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/perfil"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}
