import React from 'react'

const Button = (props : any) => {
  return (
    <div>
      <button className={`text-center ${props.btnBg} rounded-lg px-8  ${props.btnTitleColor} h-[40px]`} >
        {props.btnTitle}
      </button>
    </div>
  )
}

export default Button


