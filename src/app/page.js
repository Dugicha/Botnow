import MainPage from "@/components/Mainpage"
import About from "@/components/About"
import Pricing from "@/components/Pricing"
import Black from "@/components/Black"
import Services from "@/components/Services"
import Footer from "@/components/Footer"

export default function Home() {
  return (<>
    <MainPage />
    <About/>
    <Black />
    <Services />
    <Pricing />
    <Footer />
    
    </>
  )
}
