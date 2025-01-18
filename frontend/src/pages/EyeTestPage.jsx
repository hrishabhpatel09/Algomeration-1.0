import React from 'react'
import SnellensTest from '../components/SnellensTest'
import AstigmatismTest from '../components/Astigmatism.jsx'
import BlurTest from '../components/BlurTest.jsx'
import PopUp from '../components/PopUp.jsx'
import { AnimatePresence } from 'motion/react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {resetAll} from "../redux/general.slice.js"
import Form from '../components/Form.jsx'

const EyeTestPage = () => {
    const dispatch = useDispatch();

    const [isPopActive, setIsPopActive] = React.useState(true);
    const isSnellensActive = useSelector(state => state.general.isSnellensTestActive);
    const isAstigmatismActive = useSelector(state => state.general.isAstigmatismTestActive);
    const isBlurActive = useSelector(state => state.general.isBlurTestActive);
    const isFormActive = useSelector(state => state.general.isFormActive);
    console.log(isFormActive)
  return (
    <div>
      <AnimatePresence>
        {isPopActive && <PopUp isOpen={isPopActive} onClose={()=>{setIsPopActive(false)}}/>}
        {isSnellensActive && <SnellensTest/>}
        {isAstigmatismActive && <AstigmatismTest/>}
        {isBlurActive && <BlurTest/>}
        {isFormActive && <Form/>}
      </AnimatePresence>
    </div>
  )
}

export default EyeTestPage
