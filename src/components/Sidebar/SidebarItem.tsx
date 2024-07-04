import { cn } from "@/lib/utils"
import { Button } from "../ui/button"

interface SidebarItemProps {
  label : string
  href : string
  isActive : boolean
  setActive : any
}

export const SidebarItem = ({label,href,isActive,setActive} : SidebarItemProps) => {
  return (
    <a href={href}>
      <Button className={cn("text-2xl font-semibold rounded-xl px-4 py-2 text-white",isActive ? "bg-blue-700" : "bg-red-600")} onClick={setActive}>
        {label}
      </Button>
    </a>
  )
}