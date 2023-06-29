import Banner from "./components/Banner"
import Header from "./components/Header"
import Footer from "../../components/Footer"
import CompaniesFiled from "./components/Companies/CompaniesFiled"
const Moderation = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full h-full bg-[#F2F2F2]">
        <Header/>
        <Banner/>
        <CompaniesFiled/>
        <Footer background="white"/>
    </div>
  )
}

export default Moderation