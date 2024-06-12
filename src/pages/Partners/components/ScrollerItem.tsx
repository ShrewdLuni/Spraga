interface ScrollerItemProps {
  src : string
  alt? : string
}

export const ScrollerItem = ({src,alt} : ScrollerItemProps) => {
  return (
    <div className="flex justify-center items-center px-[20px] py-[10px] rounded-sm bg-white">
      <img src={src} alt={alt ? alt : ""} />
    </div>
  )
}