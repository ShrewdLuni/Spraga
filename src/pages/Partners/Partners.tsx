import { Contact } from "../../components/Contact/Contact"
import { Footer } from "../../components/Footer/Footer"
import { Navbar } from "../../components/Navbar/Navbar"
import { PartnersList } from "./components/PartnersList"

export const Partners = () => {
  var list = [
    {category : "Stores", list : 
      [{src : ""},{src : ""}]},
    {category : "Food Chains", list : 
      [{src : ""},{src : ""}]},
    {category : "Gas Stations", list : 
      [{src : ""},{src : ""}]}
  ]

  return (
    <div>
      <Navbar/>
      <PartnersList partners={list}/>
      <Contact/>
      <Footer/>
    </div>
  )
}