import { useState } from 'react'
import { Checkbox } from '@mui/material'
import currency from '../currencyFormatter'

const GoodsDetailItem = ({ 
  item, 
  index,
  changeSumByIndex
}) => {
  const [checked, setChecked] = useState(true)

  return (
    <article>
      <img src={item.image} alt={item.title} />
      <p>{item.title}</p>
      <p></p>
      <Checkbox 
        checked={checked}
        onClick={() => {
          changeSumByIndex(index, checked)
          setChecked(!checked)
        }}
      />
      {currency(item.price)}
    </article>
  )
}

export default GoodsDetailItem