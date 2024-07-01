import { SectionItem } from "./SectionItem"

interface InformationlSectionProps {
  label: string
  informationList: {name: string,info: string}[]
}

export const InformationlSection = ({label,informationList} : InformationlSectionProps ) => {
  return (
    <div className="flex flex-col gap-y-4  lg:gap-y-12 text-center lg:text-left rounded-xl px-2 lg:px-20 lg:py-10 lg:w-[30%]">
      <p className="text-3xl lg:text-5xl font-bold text-center">{label}</p>
      <ul className="flex flex-col list-disc gap-y-2">
        {informationList.map(item => (<SectionItem name={item.name} info={item.info}/>))}
      </ul>
    </div>
  )
}