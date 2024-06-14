import { FooterItem } from "./FooterItem";

export const FooterInfo = () => {
  return (
    <div className="flex flex-col w-full lg:w-auto justify-center lg:justify-start items-baseline gap-y-4 lg:gap-y-8">
      <a href="/">
        <p className="font-bold text-center w-full lg:w-auto text-4xl md:text-5xl xl:text-7xl lg:text-9xl transition-all duration-300">Spraga</p>
      </a>
      <div className="flex flex-col w-full text-center lg:flex-row lg:justify-center gap-x-8">
        <FooterItem href="/about" label="About"/>
        <FooterItem href="/shop" label="Shop"/>
        <FooterItem href="/partners" label="Partners"/>
        <FooterItem href="/aboutDelivery" label="Payment and Delivery"/>
      </div>
    </div>
  )
}