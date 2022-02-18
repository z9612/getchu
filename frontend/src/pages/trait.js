import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

import { DragDrop } from './traitComponent/DragDrop'
import { initial } from './traitComponent/initial'
import { getResultByTrait } from "./traitComponent/getResultByTrait";
import getQuery from './survey/getQuery'

export const TraitPriority = () => {
  const [state, setState] = useState({ quotes: initial });

  const navigate = useNavigate()
  const sendResult = async () => {
    const rating = [5, 4, 4, 3, 2, 2, 1]
    const answers = {}
    state.quotes.forEach((quote, index) => {
      answers[quote.paramName] = rating[index]
    })
    
    const query = getQuery(answers)
    const result = await getResultByTrait(query)
    navigate('/result', {state: result})
  }

  return (
    <Stack
      height="85vh"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Typography align="center">
        중요한 특성이 먼저 오도록 <br /> 
        꾹 눌러서 옮겨주세요!
      </Typography>
      <DragDrop state={state} setState={setState} />
      <Button variant="contained" onClick={sendResult}>
        결과 확인!
      </Button>
    </Stack>
  )
}