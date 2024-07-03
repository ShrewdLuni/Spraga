import { FaInstagram, FaSquareFacebook } from "react-icons/fa6";

export const FooterContacts = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="text-xl lg:text-2xl font-semibold text-center lg:text-left transition-all duration-700">Contacts</p>
      <p className="text-lg lg:text-xl whitespace-pre text-wrap text-center lg:text-left">Адреса виробника ТОВ «Іт Ізі»<br></br>Академіка Глушкова, 12A,<br></br>Київ, 03187 Україна
      </p>
      <p className="text-lg lg:text-xl text-center lg:text-left">spraga@eateasy.ua</p>
      <div className="flex flex-row gap-x-2 mt-4 justify-center lg:justify-start">
        <a href="" className="">
          <FaInstagram className="h-8 w-8 hover:text-[#C13584] hover:scale-105 transition-all duration-300 "/>
        </a>
        <a href="">
          <FaSquareFacebook className="h-8 w-8 hover:text-[#2f55a4] hover:scale-105 transition-all duration-300"/>
        </a>
      </div>
    </div>
  )
}