import React from 'react'
import ReactDOM from 'react-dom/client'
import PlayVideo from './PlayVideo'
import GlobalStyles from './globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PlayVideo/>
    <GlobalStyles/>
  </React.StrictMode>,
)
