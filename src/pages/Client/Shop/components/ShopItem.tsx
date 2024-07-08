import { Button } from "../../../../components/ui/button"

import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { Suspense } from "react"
import { Model } from "../../../../../public/model/AppleCan/Spraga"

interface ShopItemProps {
  label : string
  price : string
}

export const ShopItem = ({label,price} : ShopItemProps) => {
  return (
    <div className="flex flex-col rounded-xl">
      <div className="bg-purple-600 h-[40vh] w-full aspect-square text-center rounded-t-2xl px-4 py-4">
        <Canvas>
          <ambientLight/>
          <OrbitControls/>
          <Suspense fallback={null}>
            <Model/>
          </Suspense>
          <Environment preset="sunset"/>
        </Canvas>
      </div>
      <div className="flex flex-col bg-rose-600 text-white rounded-b-xl px-4 py-2">
        <p className="text-left font-semibold text-2xl">{label}</p>
        <div className="flex flex-row justify-between items-baseline">
          <p>{price}</p>
          <Button>Add</Button>
        </div>
      </div>
    </div>
  )
}