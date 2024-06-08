import { FooterContacts } from "./Contacts"
import { FooterInfo } from "./Info"

export const Footer = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-y-8 items-baseline lg:flex-row lg:justify-between lg:px-20 pt-4">
        <FooterInfo/>
        <FooterContacts/>
      </div>
      <p className="font-semibold text-xl px-20 my-2 lg:my-4 text-center lg:text-left">Developed by <b>@Shrewd</b></p>
    </div>
  )
}