import burger from "../static/burger.svg"
const Burger = () => {
  return (
    <div className="flex flex-col justify-start items-center w-[84px] bg-white rounded-[10px] my_shadow h-[1068px] pt-[340px]">
        <img src={burger} alt="menu" className="w-[40px] h-[34px] cursor-pointer"/>
    </div>
  )
}

export default Burger