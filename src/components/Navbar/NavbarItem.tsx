interface NavbarItemProp {
  label : string
}

export const NavbarItem = ({label} : NavbarItemProp) => {
  return (
    <a href="">
      <p className="font-semibold text-2xl">{label}</p>
      <div className="rounded-full bg-black text-transparent w-full h-1"></div>
    </a>
  )
}