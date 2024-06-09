import { Footer } from "./components/Footer/Footer"
import { Navbar } from "./components/Navbar/Navbar"

function App() {

  return (
    <div>
      <Navbar/>
      <div className="w-screen h-screen bg-white">
        <p className="font-bold text-5xl text-white">
        </p>
      </div>
      <Footer/>
    </div>
  )
}

export default App
