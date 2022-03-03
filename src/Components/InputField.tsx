import React from 'react'

interface Props{
  todo: string,
  settodo: React.Dispatch<React.SetStateAction<string>>
}

const InputField: React.FC<Props>= ({todo, settodo}) => {
  return (
    <form className="input">
        <input type="input"
        value={todo}
        onChange={(e) => settodo(e.target.value)}
         placeholder='Enter something'></input>
        <button type="submit">Submit</button>
    </form>
  )
}

export default InputField