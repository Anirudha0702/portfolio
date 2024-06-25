import React from 'react'

const Divider = ({className}) => {
  return (
    <h2 className={`h-[2px] ${className} relative`}>
        <div className="absolute right-0 rounded-full h-2 w-2 bg-inherit top-1/2 -translate-y-1/2"></div>
    </h2>
  )
}

export default Divider