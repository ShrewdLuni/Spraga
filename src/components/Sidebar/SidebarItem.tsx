interface SidebarItemProps {
  label : string
  href : string
}

export const SidebarItem = ({label,href} : SidebarItemProps) => {
  return (
    <a href={"/dashboard/" + href}>
      <p className="text-2xl font-semibold bg-purple-700 rounded-xl px-4 py-2 text-white">{label}</p>
    </a>
  )
}