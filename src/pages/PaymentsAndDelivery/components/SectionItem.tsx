interface SectionItemProps {
 name: string
 info: string
}

export const SectionItem = ({name,info} : SectionItemProps) => {
  return (
    <li className="group"><p className="text-2xl font-semibold group-hover:font-bold group-hover:text-3xl transition-all duration-75">{name}</p><p className="group-hover:font-semibold group-hover:text-lg transition-all duration-75">{info}</p></li>
  )
}