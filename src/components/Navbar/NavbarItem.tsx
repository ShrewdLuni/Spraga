interface NavbarItemProp {
  label : string
  href: string
}

export const NavbarItem = ({label, href} : NavbarItemProp) => {
  return (
    <a href={href} className="group before:scale-0">
      <p className="font-semibold text-2xl">{label}</p>
      <div className="rounded-full bg-black text-transparent w-full h-1 hidden group-hover:block "></div>
    </a>
  )
}