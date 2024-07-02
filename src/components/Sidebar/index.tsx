import { SidebarItem } from "./SidebarItem"

export const Sidebar = () => {
  let list : { label: string; href: string;}[] = [
    {label: "Statistics",href:"stats"},
    {label: "Products",href:"products"}
  ]

  return (
    <div className="flex flex-col gap-y-8 h-screen px-10 py-4 text-left border-r-2 border-black border-solid">
      <div className="text-6xl font-bold">
        Spraga
      </div>
      <div className="flex flex-col gap-y-4">
        {list.map(item => <SidebarItem label={item.label} href={item.href}/>)}
      </div>
    </div>
  )
}