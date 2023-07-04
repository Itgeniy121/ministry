import Header from "./components/Header"
import Description from "./components/Description"
import Info from "./components/Info"
import Footer from "../../components/Footer"
import Modal from "./components/UI/Modal"
const AboutPT = () => {
  return (
    <div className="flex flex-col justify-start items-start w-full bg-[#F2F2F2]">
        <Modal/>
        <Header/>
        <Description/>
        <Info/>
        <Footer background="white"/>
    </div>
  )
}

export default AboutPT