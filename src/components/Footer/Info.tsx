import { FooterItem } from "./FooterItem";

export const FooterInfo = () => {
  return (
    <div className="flex flex-col lg:justify-start items-baseline gap-y-4 lg:gap-y-8">
      <p className=" font-bold text-center w-full lg:w-auto text-4xl md:text-5xl xl:text-7xl lg:text-9xl transition-all duration-300">Spraga</p>
      <div className="flex flex-col w-full text-center lg:flex-row lg:justify-center gap-x-8">
        <FooterItem href="" label="About"/>
        <FooterItem href="" label="Shop"/>
        <FooterItem href="" label="Partners"/>
        <FooterItem href="" label="Payment and Delivery"/>
      </div>
    </div>
  )
}