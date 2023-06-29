import { FC } from "react"

interface buttonProps{
    width: string,
    height: string,
    children: React.ReactNode
}
const Button: FC<buttonProps> = ({width, height, children}) => {
  return (
    <button style={{width, height}} className="bg-[#466BE1] rounded-[10px] max-fh:!w-[300px]">{children}</button>
  )
}

export default Button