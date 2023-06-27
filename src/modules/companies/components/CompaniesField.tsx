import Header from "./Header"
import Filters from "./Filters"
import CompanyCard from "./CompanyCard"
import ptlogo from "../static/ptlogo.svg"
import MainButton from "../../../components/UI/MainButton"
import { Link } from "react-router-dom"
const CompaniesField = () => {
  return (
    <div className="w-full h-full">
        <Header/>
        <Filters/>
        <div className="w-full flex flex-row justify-between items-center px-[104px] mt-[80px]">
          <CompanyCard/>
          <CompanyCard/>
          <div className="flex flex-col justify-start items-center w-[400px] h-[447px] pt-[24px] bg-white rounded-[10px]">
          <div className="w-full flex justify-start items-start ml-[23px]"><p className="h1-27-400-golos">Program Tactics</p></div>
          <img src={ptlogo} alt="logo" className="mt-[-40px]"/>
          <p className="h1-17-400-golos !text-[#0064DC] mt-[-55px]">Корпоративные решения</p>
          <div className="flex flex-row justify-start w-[351px] mt-[15px]">
            <div className="rounded-[10px] bg-[#F0F3FE] px-[26px] h-[32px] flex justify-center items-center mr-[11px]"><p className="h1-20-400-inter !text-[#466BE1]">JS</p></div>
            <div className="rounded-[10px] bg-[#F0F3FE] px-[26px] h-[32px] flex justify-center items-center"><p className="h1-20-400-inter !text-[#466BE1]">Автоматизация</p></div>
          </div>
          <div className="w-[342px] text-center mt-[17px] mb-[15px]">
            <p className="h1-17-400-golos">Разработка корпоративных систем для бизнеса, предприятий и гос.учреждений</p>
          </div>
          <MainButton width="334px" height="35px"><Link to="/company" className="h1-20-400-golos !text-white">Подробнее</Link></MainButton>
    </div>
        </div>
        <div className="w-full mt-[54px] flex flex-row justify-between items-center px-[104px]">
          <CompanyCard/>
          <CompanyCard/>
          <CompanyCard/>
        </div>
    </div>
  )
}

export default CompaniesField