import { ScrollerItem } from "./ScrollerItem"

interface ScrollerProps {
  ScrollerItems : {src : string, alt?: string}[]
}

export const Scroller = ({ScrollerItems} : ScrollerProps ) => {
  return (
    <div className="flex flex-row">
      {ScrollerItems.map(item => <ScrollerItem src={item.src} alt={item.alt}/>)}
    </div>
  )
}