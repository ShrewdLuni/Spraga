interface NavbarItemProp {
  label : string
  href: string
}

export const NavbarItem = ({label, href} : NavbarItemProp) => {
  return (
    <a href={href}>
      <p className="font-semibold text-2xl">{label}</p>
      <div className="rounded-full bg-black text-transparent w-full h-1"></div>
    </a>
  )
}