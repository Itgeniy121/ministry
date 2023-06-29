import example from "../static/example.svg"
import rArrow from "../static/rArrow.svg"
import react from "../static/react.svg"
import js from "../static/js.svg"
import dArrow from "../static/dArrow.svg"
import ClubConsulting from "../static/ClubConsulting.svg"
import rusBank from "../static/rusBank.svg"
import MainButton from "../../../components/UI/MainButton"
const Info = () => {
  return (
    <div className="flex flex-col w-full mt-[58px] pl-[118px] pb-[74px]">
        <div className="flex flex-row justify-start items-start">
          <h1 className="h1-30-400-golos !text-[#0064DC] mr-[70px] shrink-0">О компании</h1>
          <div className="w-[925px]">
            <p className="h1-17-400-golos">Региональная IT - компания по разработке комплексных корпоративных систем для среднего и крупного бизнеса, предприятий и гос.учреждений. Компания специализируется на разработке корпоративных порталов, мобильных приложений, сайтов, решений для автоматизации производства и бизнес-процессов.</p>
          </div>
        </div>
        <div className="flex flex-row justify-start items-start mt-[58px]">
          <h1 className="h1-30-400-golos !text-[#0064DC] mr-[70px] shrink-0 mt-[44px]">Портфолио</h1>
          <img src={example} alt="example"/>
          <div className="flex flex-col w-[586px] mt-[27px] ml-[40px]">
            <p className="h1-17-400-golos">Автоматизированная система управления капиталом и инвестиционными процессами клиентов; WEB 3.0 решение по контролю процессов распределения финансов компании.</p>
            <div className="flex flex-row mt-[18px] items-center">
              <MainButton width="334px" height="35px"><p className="h1-20-400-golos !text-white">Подробнее</p></MainButton>
              <p className="h1-17-400-golos !text-[#0064DC] ml-[27px] mr-[13px]">Ко всем проектам</p>
              <img src={rArrow} alt="arrow"/>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start items-start mt-[49px]">
          <h1 className="h1-30-400-golos !text-[#0064DC] mr-[70px] shrink-0">Технологии</h1>
          <div className="flex flex-row">
            <div className="flex flex-col items-start justify-start mr-[16px]">
              <div className="w-[124px] h-[74px] flex justify-center items-center bg-white rounded-[10px]"><img src={react} alt="tech"/></div>
              <p className="h1-17-400-golos">React</p>
            </div>
            <div className="flex flex-col items-start justify-start mr-[16px]">
              <div className="w-[124px] h-[74px] flex justify-center items-center bg-white rounded-[10px]"><img src={js} alt="tech"/></div>
              <p className="h1-17-400-golos">Javascript</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start mt-[19px] w-full">
          <div className="flex items-center justify-start ml-[762px]">
            <p className="h1-17-400-golos !text-[#0064DC] ml-[13px]">Показать все теги</p>
            <img src={dArrow} alt="arrow" />
          </div>
          <div className="flex flex-row items-start justify-start mt-[27px]">
            <h1 className="h1-30-400-golos !text-[#0064DC]">Теги</h1>
            <div className="flex flex-col ml-[164px]">
              <div className="flex flex-row justify-between items-center w-[715px]">
                <div className="px-[43px] bg-[#F0F3FE] py-[12px] rounded-[15px]"><p className="h1-17-400-golos !text-[#0064DC]">React</p></div>
                <div className="px-[43px] bg-[#F0F3FE] py-[12px] rounded-[15px]"><p className="h1-17-400-golos !text-[#0064DC]">Redux</p></div>
                <div className="px-[43px] bg-[#F0F3FE] py-[12px] rounded-[15px]"><p className="h1-17-400-golos !text-[#0064DC]">Автоматизация</p></div>
                <div className="px-[43px] bg-[#F0F3FE] py-[12px] rounded-[15px]"><p className="h1-17-400-golos !text-[#0064DC]">React Native</p></div>
              </div>
              <div className="flex flex-row justify-between items-center w-[715px] mt-[10px]">
                <div className="px-[43px] bg-[#F0F3FE] py-[12px] rounded-[15px]"><p className="h1-17-400-golos !text-[#0064DC]">Next.js</p></div>
                <div className="px-[43px] bg-[#F0F3FE] py-[12px] rounded-[15px]"><p className="h1-17-400-golos !text-[#0064DC]">Nest.js</p></div>
                <div className="px-[43px] bg-[#F0F3FE] py-[12px] rounded-[15px]"><p className="h1-17-400-golos !text-[#0064DC]">Express</p></div>
                <div className="px-[43px] bg-[#F0F3FE] py-[12px] rounded-[15px]"><p className="h1-17-400-golos !text-[#0064DC]">Проектирование</p></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start items-start mt-[47px]">
          <h1 className="h1-30-400-golos !text-[#0064DC] mr-[36px] shrink-0 w-[131px]">Наши Клиенты</h1>
          <div className="flex flex-row">
            <div className="flex justify-center items-center bg-[#0C0918] w-[239px] h-[147px] mr-[28px]">
              <img src={ClubConsulting} alt="clients" />
            </div>
            <img src={rusBank} alt="clients" />
          </div>
        </div>  
    </div>
  )
}

export default Info