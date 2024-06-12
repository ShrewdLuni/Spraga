import { Footer } from "../../components/Footer/Footer"
import { Navbar } from "../../components/Navbar/Navbar"
import { Scroller } from "./components/Scroller"

export const Partners = () => {
  var list = [
    {src : ""},
    {src : ""}
  ]

  return (
    <div>
      <Navbar/>
      <div className="w-screen h-screen mt-32 bg-rose-700">
        <p className="text-center text-5xl font-semibold text-white">Partners</p>
        <div className="flex flex-col text-center gap-y-4 w-full items-center justify-center px-20">
          <div className="w-full bg-green-500">
            <p>Stores</p>
            <Scroller ScrollerItems={list}/>
          </div>
          <div className="w-full bg-blue-600">
            <Scroller ScrollerItems={list}/>
          </div>
          <div className="w-full bg-purple-600">
            <Scroller ScrollerItems={list}/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}