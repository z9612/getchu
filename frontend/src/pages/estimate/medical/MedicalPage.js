import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Stack } from '@mui/material';

import MedicalDetail from './MedicalDetail';
import MedicalFooter from './MedicalFooter';
import { medicalState } from '../../teststate';
import { medicalSumState } from '../../costsComponent/state';

const MedicalPage = () => {
  const [medicalList, setMedicalList] = useRecoilState(medicalState)
  const setMedicalSum = useSetRecoilState(medicalSumState)

  const changeSumByIndex = (index, checked) => {
    // console.log(medicalList, index, checked);
    const price = medicalList[index].avg
    const diff = checked ? -price : price
    setMedicalSum(prev => prev + diff)

    const newList = medicalList.map((medical, idx) => {
      if (idx === index) {
        return {...medical, defaultCheck: !checked}
      } else {
        return {...medical}
      }
    })
    // console.log(newList)
    setMedicalList(newList)
  }

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Stack
      direction="column"
      alignItems="stretch"
      justifyContent="space-between"
    >
      <main>
        {medicalList.map((medical, index) => (
          <MedicalDetail
            medical={medical}
            expanded={expanded}
            handleChange={handleChange}
            index={index}
            changeSumByIndex={changeSumByIndex}
            key={medical.name}
          /> 
        ))} 
      </main>
      <MedicalFooter />
    </Stack>
  );
}

export default MedicalPage;