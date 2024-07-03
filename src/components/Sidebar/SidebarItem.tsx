import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { Navigate, useNavigate } from "react-router-dom"

interface SidebarItemProps {
  label : string
  href : string
  isActive : boolean
  setActive : any
}

export const SidebarItem = ({label,href,isActive,setActive} : SidebarItemProps) => {
  let navigate = useNavigate()
  return (
    <Button className={cn("text-2xl font-semibold rounded-xl px-4 py-2 text-white",isActive ? "bg-blue-700" : "bg-red-600")} onClick={() => {setActive(label);console.log(label);navigate("/dashboard/" + href)}}>
      {label}
    </Button>
  )
}