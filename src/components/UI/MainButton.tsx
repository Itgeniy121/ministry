import { FC } from "react"

interface buttonProps{
    width: string,
    height: string,
    children: React.ReactNode
}
const MainButton: FC<buttonProps> = ({width, height, children}) => {
  return (
    <button style={{width, height}} className="bg-[#0064DC] rounded-[10px]">{children}</button>
  )
}

export default MainButton