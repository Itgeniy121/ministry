import logo from "../../../assets/logo.svg"
import MainButton from "../../../components/UI/MainButton"
const CompanyCard = () => {
  return (
    <div className="flex flex-col justify-start items-center w-[400px] h-[447px] pt-[24px] bg-white rounded-[10px]">
        <div className="w-full flex justify-start items-start ml-[23px]"><p className="h1-27-400-golos">IT company 333 super</p></div>
        <img src={logo} alt="logo" className="w-[64px] h-[64px] mt-[69px]"/>
        <p className="h1-24-600-golos !text-[#0064DC] mt-[14px]">IT – КОМПАНИЯ</p>
        <p className="h1-17-400-golos !text-[#0064DC]">Разработка сайтов</p>
        <div className="flex flex-row justify-between mt-[17px] w-[351px]">
            <div className="rounded-[10px] bg-[#F0F3FE] px-[26px] h-[32px] flex justify-center items-center"><p className="h1-20-400-inter !text-[#466BE1]">JS</p></div>
            <div className="rounded-[10px] bg-[#F0F3FE] px-[26px] h-[32px] flex justify-center items-center"><p className="h1-20-400-inter !text-[#466BE1]">Сайты</p></div>
            <div className="rounded-[10px] bg-[#F0F3FE] px-[26px] h-[32px] flex justify-center items-center"><p className="h1-20-400-inter !text-[#466BE1]">Frontend</p></div>
        </div>
        <div className="w-[342px] text-center mt-[17px] mb-[15px]">
            <p className="h1-17-400-golos">Создание корпоративных сайтов и порталов для бизнеса</p>
        </div>
        <MainButton width="334px" height="35px"><p className="h1-20-400-golos !text-white">Подробнее</p></MainButton>
    </div>
  )
}

export default CompanyCard