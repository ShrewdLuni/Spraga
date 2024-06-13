import { ScrollerItem } from "./ScrollerItem"

interface ScrollerProps {
  category : string
  scrollerItems : {src : string, alt?: string}[]
}

export const Scroller = ({category,scrollerItems} : ScrollerProps ) => {
  return (
    <div className="w-full bg-green-500">
      <p>{category}</p>
      <div className="flex flex-row">
        {scrollerItems.map(item => <ScrollerItem src={item.src} alt={item.alt}/>)}
      </div>
    </div>
  )
}