import { Layout } from "../../components/Layout"
import { Contact } from "../../components/Contact/Contact"
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
    <Layout>
      <PartnersList partners={list}/>
      <Contact/>
    </Layout>
  )
}