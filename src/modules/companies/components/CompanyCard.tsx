import logo from "../../../assets/logo.svg"
import { useNavigate } from "react-router-dom"
const CompanyCard = () => {
  const navigate = useNavigate()
  const handleRoute = () =>{
    navigate('/company')
  }
  return (
    <div className="flex flex-col justify-start items-center w-[400px] h-[447px] py-[23px] bg-white rounded-[10px] px-[35px] max-lt:w-[300px]">
        <div className="w-full flex justify-start items-start"><p className="h1-27-400-golos">IT company 333 super</p></div>
          <img src={logo} alt="logo" className="w-[64px] h-[64px] mt-[69px] max-lt:mt-[30px]"/>
          <p className="h1-24-600-golos !text-[#0064DC] mt-[14px]">IT – КОМПАНИЯ</p>
          <p className="h1-17-400-golos !text-[#0064DC]">Разработка сайтов</p>
        <div className="flex flex-row justify-between mt-[17px] w-[351px] max-lt:w-[250px]">
            <div className="rounded-[10px] bg-[#F0F3FE] px-[26px] h-[32px] flex justify-center items-center max-lt:px-[10px]"><p className="h1-20-400-inter !text-[#466BE1] max-lt:text-[15px]">JS</p></div>
            <div className="rounded-[10px] bg-[#F0F3FE] px-[26px] h-[32px] flex justify-center items-center max-lt:px-[10px]"><p className="h1-20-400-inter !text-[#466BE1] max-lt:text-[15px]">Сайты</p></div>
            <div className="rounded-[10px] bg-[#F0F3FE] px-[26px] h-[32px] flex justify-center items-center max-lt:px-[10px]"><p className="h1-20-400-inter !text-[#466BE1] max-lt:text-[15px]">Frontend</p></div>
        </div>
        <div className="w-full text-center mt-[17px] mb-[15px]">
            <p className="h1-17-400-golos max-lt:text-[14px]">Создание корпоративных сайтов и порталов для бизнеса</p>
        </div>
        <button className="bg-[#0064DC] rounded-[10px] max-fh:!w-[300px] w-[334px] h-[35px] max-lt:w-[200px]" onClick={handleRoute}><p className="h1-20-400-golos !text-white">Подробнее</p></button>

    </div>
  )
}

export default CompanyCard