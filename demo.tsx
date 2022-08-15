import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { MetamaskBoxAnimation } from './src/MetamaskBoxAnimation'

const container = document.getElementById('react-container')
if (container) {
  const root = ReactDOM.createRoot(container)
  root.render(
    <MetamaskBoxAnimation
      phi={0}
      theta={Math.PI / 2}
      distance={800}
      hemisphereAxis={[0.1, 1, 0.2]}
      hemisphereColor1={[1, 1, 1]}
      hemisphereColor0={[0.5, 0.5, 0.5]}
      fogColor={[1, 1, 1]}
      interiorColor0={[0.1, 0.1, 0.1]}
      interiorColor1={[0.3, 0.3, 0.3]}
      noGLFallback={<div>WebGL not supported :(</div>}
      enableZoom={false}
      followMouse={false}
    />
  )
}
