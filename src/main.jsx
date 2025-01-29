import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// css
import './index.css'

import AppRouter from './router/AppRouter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
