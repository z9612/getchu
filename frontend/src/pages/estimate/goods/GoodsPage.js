import { useState } from 'react'
import { Stack } from '@mui/material'

import GoodsDetail from './GoodsDetail'
import GoodsFooter from './GoodsFooter'

const GoodsPage = () => {
  const [accordionExpanded, setAccordionExpanded] = useState(0)
  const expandAccordion = (index) => (event, isExpanded) => {
    setAccordionExpanded(isExpanded ? index : false)
  }

  return (
    <Stack
      direction="column"
      alignItems="stretch"
    >
      <main>
        <GoodsDetail 
          accordionIndex={1}
          accordionExpanded={accordionExpanded}
          expandAccordion={expandAccordion}
        />
      </main>
      <GoodsFooter />
    </Stack>
  )
}

export default GoodsPage