import MainButton from "../../../../../components/UI/MainButton"
const Company = () => {
  return (
    <div className="w-[1271px] h-[345px] pt-[40px] px-[51px] flex flex-row justify-between items-start bg-white rounded-[10px] mt-[41px]">
        <div className="flex flex-col justify-start items-start">
            <h1 className="h1-35-400-golos">IT company 333 super</h1>
            <div className="flex flex-row mt-[21px] mb-[29px]">
                <div className="px-[26px] bg-[#F0F3FE] py-[4px] rounded-[10px] mr-[11px]"><p className="h1-20-400-inter !text-[#466BE1]">Правки после отправления на доработку</p></div>
            </div>
            <MainButton width="510px" height="54px"><p className="h1-25-400-golos !text-white">Одобрить</p></MainButton>
            <div className="flex flex-row mt-[11px]">
                <button className="w-[249px] h-[54px] rounded-[10px] bg-[#FFEAE8] mr-[12px]"><p className="h1-25-400-golos !text-[#EA5945]">Отклонить</p></button>
                <button className="w-[249px] h-[54px] rounded-[10px] bg-[#F0F3FE]"><p className="h1-25-400-golos !text-[#466BE1]">Надо доработать</p></button>

            </div>
        </div>
        <div className="flex flex-col w-[520px] h-[231px]">
            <h1 className="h1-30-400-golos !text-[#0064DC] mb-[11px]">Компания внесла правки</h1>
            <p className="h1-17-400-golos">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
  )
}

export default Company