import { Button } from "../../../components/ui/button"

interface ShopItemProps {
  label : string
  price : string
}

export const ShopItem = ({label,price} : ShopItemProps) => {
  return (
    <div className="flex flex-col bg-green-100 rounded-xl px-8 pt-4 pb-2">
      <div className="">IMAGE</div>
      <div className="flex flex-col">
        <p className="text-left">{label}</p>
        <div className="flex flex-row justify-between items-baseline">
          <p>{price}</p>
          <Button>Add</Button>
        </div>
      </div>
    </div>
  )
}