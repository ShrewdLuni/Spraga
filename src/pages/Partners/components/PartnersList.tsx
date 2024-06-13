import { Scroller } from "./Scroller"

interface PartnersListProps {
  partners : {category : string, list : {src : string, alt?: string}[]}[]
}

export const PartnersList = ({partners} : PartnersListProps) => {
  return (
    <div className="w-screen h-screen mt-32 bg-rose-700">
      <p className="text-center text-5xl font-semibold text-white">Partners</p>
      <div className="flex flex-col text-center gap-y-4 w-full items-center justify-center px-20">
        {partners.map(item => <Scroller category={item.category} scrollerItems={item.list}/>)}
      </div>
    </div>
  )
}