import React, { useState } from 'react'
import Square from './Square'
import Input from './Input'

const App = () => {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')

  return (
    <div className='App'>
      <Square 
        colorValue={colorValue}
        hexValue={hexValue}
      />
      <Input
        colorValue = {colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
      />

    </div>
  )
}

export default App