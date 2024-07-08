import { Layout } from "../../../components/Layout"
import { ShopItem } from "./components/ShopItem"

export const Shop = () => {
  let list = [
    {label:"Pomegranate",price:"20$"},
    {label:"Rasberry",price:"20$"},
    {label:"Apple",price:"20$"},
    {label:"Classic",price:"20$"}
  ]

  return (
    <Layout>
      <div className="w-screen h-full flex flex-col gap-y-12 mt-32 p-10">
        <p className="text-center text-8xl font-bold">Our Drinks</p>
        <div className="grid grid-cols-3 gap-8 text-center">
          {list.map(item => <ShopItem label={item.label} price={item.price}/>)}
        </div>
      </div>
    </Layout>
  )
}