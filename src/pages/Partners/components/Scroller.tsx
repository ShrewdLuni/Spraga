import { cn } from "../../../lib/utils"
import { ScrollerItem } from "./ScrollerItem"

interface ScrollerProps {
  category : string
  isLeftDiraction: boolean
  scrollerItems : {src : string, alt?: string}[]
}

export const Scroller = ({category, isLeftDiraction, scrollerItems} : ScrollerProps ) => {
  let items = scrollerItems.map(item => <ScrollerItem src={item.src} alt={item.alt} />)

  return (
    <div className="w-screen">
      <div className="flex flex-col justify-center overflow-hidden">
        <div className="w-full mx-auto px-4 md:px-6 py-[4px] lg:py-[8px] group">
          <div className="text-center">
            <div className="w-screen inline-flex flex-nowrap overflow-hidden">
              <div className={cn("flex items-center justify-center md:justify-start group-hover:paused", isLeftDiraction ? "animate-loop-scroll-left" : "animate-loop-scroll-right")}>
                {items}
                {items}
              </div>
              <div className={cn("flex items-center justify-center md:justify-start group-hover:paused", isLeftDiraction ? "animate-loop-scroll-left" : "animate-loop-scroll-right")} aria-hidden="true">
                {items}
                {items}
              </div>   
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}