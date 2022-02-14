import { useState } from 'react'
import { Stack } from '@mui/material'

import GoodsDetail from './GoodsDetail'
import GoodsFooter from './GoodsFooter'
import goodsContent from './goodsContent'

const GoodsPage = () => {
  const [accordionExpanded, setAccordionExpanded] = useState(0)
  const expandAccordion = (index) => (event, isExpanded) => {
    setAccordionExpanded(isExpanded ? index : false)
  }

  return (
    <Stack
      height="90vh"
      direction="column"
      alignItems="stretch"
    >
      <main>
        <GoodsDetail 
          accordionIndex={1}
          accordionExpanded={accordionExpanded}
          expandAccordion={expandAccordion}
          goodsContent={goodsContent}
        />
      </main>
      <GoodsFooter />
    </Stack>
  )
}

export default GoodsPage