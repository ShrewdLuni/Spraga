import { SectionItem } from "./SectionItem"

interface InformationlSectionProps {
  label: string
  informationList: {name: string,info: string}[]
}

export const InformationlSection = ({label,informationList} : InformationlSectionProps ) => {
  return (
    <div className="flex flex-col gap-y-4 lg:gap-y-12 text-center lg:text-left rounded-xl px-6 lg:px-12 lg:py-10 lg:w-[25%] lg:max-w-[400px] lg:h-[700px] bg-green-50 border-solid border-black border-[4px] lg:hover:scale-110 transition-all duration-300">
      <p className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center hover:scale-110 transition-all duration-500">{label}</p>
      <ul className="flex flex-col list-disc gap-y-2">
        {informationList.map(item => (<SectionItem name={item.name} info={item.info}/>))}
      </ul>
    </div>
  )
}