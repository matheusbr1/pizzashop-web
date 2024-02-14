/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import ReactDOM from 'react-dom/client'

import { enableMSW } from './api/mocks/index.ts'
import { App } from './app.tsx'


enableMSW().then(() => {
  return ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
