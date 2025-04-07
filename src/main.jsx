import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import './theme.css'
import TranslationChatbot from './components/TranslationChatbot'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <TranslationChatbot />
  </React.StrictMode>
)
