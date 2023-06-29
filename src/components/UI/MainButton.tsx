import { FC } from "react"

interface buttonProps{
    width: string,
    height: string,
    children: React.ReactNode,
    onClick?: ()=>void,
}
const MainButton: FC<buttonProps> = ({width, height, children, onClick}) => {
  return (
    <button style={{width, height}} className="bg-[#0064DC] rounded-[10px] max-fh:!w-[300px]" onClick={onClick}>{children}</button>
  )
}

export default MainButton