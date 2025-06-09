import React from 'react'

const Input = ({type, name, value, onChange, placeholder, clasName}) => {
    return (
      <div className="flex flex-col">
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                className={clasName}
                value={value}
                onChange={onChange}
                required />
      </div>
  )
}

export default Input
