import { Layout } from "../../../components/Layout"
import { ShopItem } from "./components/ShopItem"

export const Shop = () => {
  let list = [
    {label:"Strawberry",price:"20$"},
    {label:"Cola",price:"20$"},
    {label:"Classic",price:"20$"},
    {label:"4",price:"20$"}
  ]

  return (
    <Layout>
      <div className="w-screen h-screen mt-32 p-10">
        <div className="grid grid-cols-3 gap-12 text-center">
          {list.map(item => <ShopItem label={item.label} price={item.price}/>)}
        </div>
      </div>
    </Layout>
  )
}