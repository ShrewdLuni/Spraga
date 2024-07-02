import { FooterItem } from "./FooterItem";

export const FooterInfo = () => {
  const infoItems = [
    {label:"About",href:"/about"},
    {label:"Shop",href:"/shop"},
    {label:"Partners",href:"/partners"},
    {label:"Payment and Delivery",href:"/aboutDelivery"},
  ]

  return (
    <div className="flex flex-col w-full lg:w-auto justify-center lg:justify-start items-baseline gap-y-4 lg:gap-y-8">
      <a href="/" className="text-center w-full lg:w-auto">
        <p className="font-bold lg:w-auto text-4xl md:text-5xl xl:text-7xl lg:text-9xl transition-all duration-300">Spraga</p>
      </a>
      <div className="flex flex-col w-full text-center lg:flex-row lg:justify-center gap-x-8">
        {infoItems.map(item => <FooterItem href={item.href} label={item.label}/>)}
      </div>
    </div>
  )
}