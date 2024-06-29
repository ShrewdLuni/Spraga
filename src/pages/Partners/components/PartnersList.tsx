import { Scroller } from "./Scroller"

interface PartnersListProps {
  partners : {category : string,isLeftDiraction: boolean ,list : {src : string, alt?: string}[]}[]
}

export const PartnersList = ({partners} : PartnersListProps) => {
  return (
    <div className="w-screen h-auto mt-32">
      <p className="text-center text-5xl font-semibold text-white">Partners</p>
      <div className="flex flex-col text-center gap-y-4 w-full items-center justify-center px-20">
        {partners.map(item => <Scroller category={item.category} isLeftDiraction={item.isLeftDiraction} scrollerItems={item.list}/>)}
      </div>
    </div>
  )
}