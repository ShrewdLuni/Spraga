import { Button } from "../ui/button"
import { NavbarItem } from "./NavbarItem"

export const Navbar = () => {
  return (
    <div className="fixed flex flex-row flex-shrink items-baseline justify-between bg-transparent top-0 left-0 w-full h-16 px-2 py-6 lg:px-20">
      <div className="flex-shrink-0">
        <p className="font-semibold text-2xl sm:text-4xl lg:text-6xl">Spraga</p>
      </div>
      <div className="flex flex-row gap-x-8 w-0 md:w-auto flex-shrink lg:w-auto overflow-hidden transition-all duration-300">
        <NavbarItem label="Home"/>
        <NavbarItem label="Shop"/>
        <NavbarItem label="About"/>
        <NavbarItem label="Partners"/>
      </div>
      <div className="flex-shrink-0">
        <Button className="bg-black rounded-full px-8" variant="default">CART</Button>
      </div>
    </div>
  )
}