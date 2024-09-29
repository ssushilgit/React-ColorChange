import React, { useState } from 'react'
import Square from './Square'
import Input from './Input'

const App = () => {
  const [colorValue, setColorValue] = useState('')
  return (
    <div className='App'>
      <Square colorValue={colorValue}/>
      <Input
        colorValue = {colorValue}
        setColorValue={setColorValue}
      />

    </div>
  )
}

export default App