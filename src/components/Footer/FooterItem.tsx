interface FooterItemProps {
  label: string,
  href : string,
}

export const FooterItem = ({label, href} : FooterItemProps) => {
  return (
    <a href={href} className="w-full lg:w-auto font-semibold text-xl lg:text-2xl text-black hover:text-rose-600 transition-all duration-300">{label}</a>
  )
}