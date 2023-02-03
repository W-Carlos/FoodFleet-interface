import React from 'react'
import Login from './containers/Login'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
      <Login />
  </React.StrictMode>
)
