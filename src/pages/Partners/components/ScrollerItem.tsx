interface ScrollerItemProps {
  src : string
  alt? : string
}

export const ScrollerItem = ({src,alt} : ScrollerItemProps) => {
  return (
    <div className="flex w-[320px] h-[160px] justify-center items-center px-[20px] py-[10px] border-rose-100 border-solid border-[4px] shadow-md rounded-xl mx-2">
      <img src={src} alt={alt ? alt : ""} />
    </div>
  )
}