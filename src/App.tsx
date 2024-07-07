import { Layout } from "./components/Layout"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { Model } from "../public/model/CocaCola/Test"

function App() {

  return (
    <Layout>
      {/* <div className="w-screen h-screen bg-white">
        <p className="font-bold text-5xl text-white">
        </p>
      </div> */}
      <div className="h-screen bg-red-500 -400 mt-32">
        <Canvas className="mt-32">
          <ambientLight/>
          <OrbitControls/>
          <Suspense fallback={null}>
            <Model/>
          </Suspense>
          <Environment preset="sunset"/>
        </Canvas>
      </div>
    </Layout>
  )
}

export default App
