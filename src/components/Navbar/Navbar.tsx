import { Equal, ShoppingBag } from "lucide-react"
import { Button } from "../ui/button"
import { NavbarItem } from "./NavbarItem"

export const Navbar = () => {
  return (
    <div className="fixed flex flex-row flex-shrink items-baseline justify-between bg-transparent top-0 left-0 w-full h-32 px-2 py-6 lg:px-20 z-50">
      <div className="flex-shrink-0">
        <a href="/">
          <p className="font-semibold text-2xl sm:text-4xl lg:text-6xl">Spraga</p>
        </a>
      </div>
      <div className="flex flex-row gap-x-8 w-0 md:w-auto flex-shrink lg:w-auto overflow-hidden transition-all duration-300">
        <NavbarItem href="/" label="Home"/>
        <NavbarItem href="/shop" label="Shop"/>
        <NavbarItem href="/about" label="About"/>
        <NavbarItem href="/partners" label="Partners"/>
      </div>
      <div className="flex flex-row gap-x-2 flex-shrink-0">
        <Button className="bg-black rounded-full px-8 h-10" variant="default">CART<ShoppingBag /></Button>
        <Button className="bg-black rounded-full px-8 overflow-hidden" variant="default">Menu<Equal/></Button>
      </div>
    </div>
  )
}