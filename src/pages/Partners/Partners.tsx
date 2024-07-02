import { Layout } from "../../components/Layout"
import { Contact } from "../../components/Contact/Contact"
import { PartnersList } from "./components/PartnersList"

import ashan from "/partners/ashan.png"
import atb from "/partners/atb.png"
import fozzy from "/partners/fozzy.png"
import goodwine from "/partners/goodwine.png"
import idealist from "/partners/idealist.png"
import metro from "/partners/metro.png"
import novus from "/partners/novus.png"
import okko from "/partners/okko.jpg"
import salateria from "/partners/salateria.png"
import silpo from "/partners/silpo.png"
import socar from "/partners/socar.png"
import span from "/partners/span.png"
import upg from "/partners/upg.png"
import varus from "/partners/varus.png"
import wog from "/partners/wog.png"

export const Partners = () => {
  var list : { category: string; isLeftDiraction: boolean; list: {src: string;alt?: string | undefined;}[];}[] = [
    {category : "Stores", isLeftDiraction:false, list : 
      [
        {src : ashan, alt: "ashan logo"},
        {src : atb, alt: "atb logo"},
        {src : varus, alt: "varus logo"},
        {src : silpo, alt: "silpo logo"},
        {src : metro, alt: "metro logo"},
      ]},
    {category : "Stores", isLeftDiraction:true, list : 
      [
        {src : goodwine, alt: "goodwine logo"},
        {src : novus, alt: "novus logo"},
        {src : fozzy, alt: "fozzy logo"},
        {src : salateria, alt: "salateria logo"},
        {src : idealist, alt: "idealist logo"}
      ]},
      {category : "Stores", isLeftDiraction:false, list : 
        [
          {src : socar, alt: "socar logo"},
          {src : okko, alt: "okko logo"},
          {src : span, alt: "span logo"},
          {src : upg, alt: "upg logo"},
          {src : wog, alt: "wog logo"}
        ]},
  ]

  return (
    <Layout>
      <PartnersList partners={list}/>
      <Contact/>
    </Layout>
  )
}