import Header from "./components/Header"
import FirstField from "./components/FirstField"
import SecondField from "./components/SecondField"
import Footer from "../../components/Footer"
const Main = () => {
  return (
    <div className="flex flex-col justify-center items-start w-full h-full pt-[40px] max-s:pt-[20px]">
        <Header/>
        <FirstField/>
        <SecondField/>
        <Footer/>
    </div>
  )
}

export default Main