interface SectionItemProps {
 name: string
 info: string
}

export const SectionItem = ({name,info} : SectionItemProps) => {
  return (
    <li><p className="text-2xl font-semibold">{name}</p><p>{info}</p></li>
  )
}