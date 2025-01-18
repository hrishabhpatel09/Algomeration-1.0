import React from 'react'
import SnellensTest from '../components/SnellensTest'
import AstigmatismTest from '../components/Astigmatism.jsx'
import PopUp from '../components/PopUp.jsx'
import { AnimatePresence } from 'motion/react'

const EyeTestPage = () => {
    const [isPopActive, setIsPopActive] = React.useState(true);
    const [isSnellensActive, setIsSnellensActive] = React.useState(true);
    const [isAstigmatismActive, setIsAstigmatismActive] = React.useState(false);

  return (
    <div>
      <AnimatePresence>
        {isPopActive && <PopUp isOpen={isPopActive} onClose={()=>{setIsPopActive(false)}}/>}
        {isSnellensActive && <SnellensTest isActive={isSnellensActive} setIsActive={setIsSnellensActive}/>}
        {isAstigmatismActive && <AstigmatismTest isActive={isAstigmatismActive} setIsActive={setIsAstigmatismActive}/>}
      </AnimatePresence>
    </div>
  )
}

export default EyeTestPage
