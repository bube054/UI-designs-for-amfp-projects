import React from 'react'

const ForumButton = (props) => {
  const type = props.type || "button"
  const label = props.label || "click me"
  const onClick = props.onClick || function () {}
  const color = props.color || "blue"
  const className = props.className || "px-3 py-2 text-xs"

  const clickHandler = (e) => {
    e.preventDefault()
    onClick()
  }

  // console.log(props.children);
  if(props.children){
    return (
      <>
      <button onClick={e => clickHandler(e)} type={type} className={`flex items-center space-x-1 font-medium text-center text-white bg-${color}-600 rounded-lg hover:bg-${color}-700 focus:ring-0 focus:outline-none ${className} `}>
        <span>{props.children}</span>
        <span>{label}</span>
      </button>
      </>
    )
  }

  return (
    <>
    <button onClick={e => clickHandler(e)} type={type} className={`font-medium text-center text-white bg-${color}-600 rounded-lg hover:bg-${color}-700 focus:ring-0 focus:outline-none ${className} `}>{label}</button>
    </>
  )
}

export default ForumButton