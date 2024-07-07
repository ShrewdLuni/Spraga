import { Layout } from "../../../components/Layout" 
import { InformationlSection } from "./components/InformationSection"

export const PaymentAndDelivery = () => {
  const information  = [
    {label:"Payment Information", informationList:[
      {name:"Payment Methods:",info:"VISA and MasterCard."},
      {name:"Security:",info:"Payments are secure and handled through VISA International and MasterCard systems."},
      {name:"Confidentiality:",info:"Personal information (name, phone, email, payment details) is confidential and encrypted; card data is not stored on our website."},
      {name:"Confirmation:",info:"A success notification will appear on the screen after payment."}]},
    {label:"Delivery Information", informationList:[
      {name:"Availability:",info:"Only to open branches in cities without active hostilities or occupation."},
      {name:"Shipping:",info:"Monday to Friday (orders placed before 2:00 p.m. are shipped the same day; after 2:00 p.m., the next day)."},
      {name:"Location:",info:"Kyiv, Akademika Glushkova Avenue, 12A"},
      {name:"Hours:",info:"Mon-Fri 10:00-18:00 (Sat-Sun closed)."},
      {name:"Re-shipping Fees:",info:"Paid by recipient if returned due to storage expiration."}]},
    {label:"Order Issues and Support", informationList:[
      {name:"Inspection:",info:"Products will be checked for damage or packaging integrity."},
      {name:"Reporting Problems:",info:"Notify the Nova Poshta insurance agent to file an insurance claim if issues are found."},
      {name:"Extra Food Requests:",info:"Contact us at spraga@eateasy.ua."}]}
  ]

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row justify-center gap-x-8 gap-y-8 w-screen h-auto mt-32 px-2 py-[60px] lg:py-[100px]">
        {information.map(item => (<InformationlSection label={item.label} informationList={item.informationList}/>))}
      </div>
    </Layout>
  )
}