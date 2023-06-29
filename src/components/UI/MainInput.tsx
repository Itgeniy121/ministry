import { FC } from "react"

interface inputProps{
    width: string,
    height: string,
    placehplder: string,
}
const MainInput: FC<inputProps> = ({width, height, placehplder}) => {
  return (
    <input style={{width, height}} className="bg-[#F2F2F2] rounded-[10px] pl-[31px] inpt mb-[24px] max-fh:!w-[300px]" placeholder={placehplder}></input>
  )
}

export default MainInput