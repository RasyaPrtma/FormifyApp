import React from 'react'
import ReactDOM from 'react-dom/client'
import './Style/index.css'
import AppRoutes from './Routes/AppRoutes'
import { AuthProvider } from './Modules/Context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRoutes/>
    </AuthProvider>
  </React.StrictMode>,
)
