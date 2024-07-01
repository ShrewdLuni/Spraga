import { Layout } from "../../components/Layout" 

export const PaymentAndDelivery = () => {
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row justify-center gap-20 items-center w-screen h-auto mt-32 py-[60px] lg:py-[140px]">
        <div className="flex flex-col gap-y-4  lg:gap-y-12 text-center lg:text-left rounded-xl px-2 lg:px-20 lg:py-10 lg:w-[30%]">
          <p className="text-3xl lg:text-5xl font-bold text-center">Payment Information</p>
          <ul className="flex flex-col list-disc gap-y-2">
            <li><p className="text-2xl font-semibold">Availability:</p> <p>VISA and MasterCard.</p></li>
            <li><p className="text-2xl font-semibold">Security:</p><p>Payments are secure and handled through VISA International and MasterCard systems.</p></li>
            <li><p className="text-2xl font-semibold">Confidentiality:</p><p> Personal information (name, phone, email, payment details) is confidential and encrypted; card data is not stored on our website.</p></li>
            <li><p className="text-2xl font-semibold">Confirmation:</p><p> A success notification will appear on the screen after payment.</p></li>
          </ul>
        </div>
        
        <div className="flex flex-col gap-y-4 lg:gap-y-12 text-center lg:text-left rounded-xl px-2 lg:px-20 lg:py-10 lg:w-[30%]">
          <p className="text-3xl lg:text-5xl font-bold text-center">Delivery Information</p>
          <ul className="flex flex-col list-disc gap-y-2">
            <li><p className="text-2xl font-semibold">Availability: </p> <p>Only to open branches in cities without active hostilities or occupation.</p></li>
            <li><p className="text-2xl font-semibold">Shipping:</p><p>Monday to Friday (orders placed before 2:00 p.m. are shipped the same day; after 2:00 p.m., the next day).</p></li>
            <li><p className="text-2xl font-semibold">Location:</p> <p>Kyiv, Akademika Glushkova Avenue, 12A</p></li>
            <li><p className="text-2xl font-semibold">Hours:</p><p>Mon-Fri 10:00-18:00 (Sat-Sun closed).</p></li>
            <li><p className="text-2xl font-semibold">Re-shipping Fees:</p><p>Paid by recipient if returned due to storage expiration.</p></li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-4 lg:gap-y-12 text-center lg:text-left rounded-xl px-2 lg:px-20 lg:py-10 lg:w-[30%]">
          <p className="text-3xl lg:text-5xl font-bold text-center">Order Issues and Support</p>
          <ul className="flex flex-col list-disc gap-y-2">
            <li><p className="text-2xl font-semibold">Inspection:</p> <p>Products will be checked for damage or packaging integrity.</p></li>
            <li><p className="text-2xl font-semibold">Reporting Problems: </p><p>Notify the Nova Poshta insurance agent to file an insurance claim if issues are found.</p></li>
            <li><p className="text-2xl font-semibold">Extra Food Requests:</p> <p>Contact us at spraga@eateasy.ua.</p></li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}