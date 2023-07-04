import logopt from "../static/logopt.svg"
import MainButton from "../../../components/UI/MainButton"
const Description = () => {
    const openModal = () =>{
        let modalWindow = document.getElementById('modal3')
        modalWindow?.classList.add('active')
    }

  return (
    <div className="flex flex-row justify-between w-full pr-[78px] h-[290px] mt-[25px]">
        <div className="mt-[-60px] ml-[35px] absolute">
            <img src={logopt} alt="logo"/>
        </div>
        <div className=" w-full flex flex-col justify-between items-end">
            <div className="flex flex-row justify-start items-start">
                <div className="flex flex-col mr-[95px]">
                    <div className="shrink-0">
                        <p className="h1-64-400-golos">Program Tactics</p>
                    </div>
                    <p className="h1-17-400-golos !text-[#F138C0]">Корпоративные решения</p>
                </div>
                <div className="mt-[20px]">
                <MainButton width="261px" height="87px"><p className="h1-32-400-golos !text-white" onClick={openModal}>Связаться</p></MainButton>
                </div>
            </div>
            <div className="flex flex-row justify-between items-start mr-[120px]">
                <div className="flex flex-col justify-between items-start">
                    <p className="h1-32-400-golos">Сайт компании</p>
                    <p className="h1-31-400-golos !text-[#0064DC]"><a href="https://protactics.ru">https://protactics.ru</a></p>
                </div>
                <div className="flex flex-col justify-between items-start ml-[150px]">
                    <p className="h1-17-400-golos !text-[#3C3C3CBF]">Email: connect@protactics.ru</p>
                    <p className="h1-17-400-golos !text-[#3C3C3CBF]">Тел: +79166974227</p>
                    <p className="h1-17-400-golos !text-[#3C3C3CBF]">Адрес: пер. Саратовский 5, оф.103</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Description