import { atom, selector } from 'recoil';

export const foodAmountState = atom({
  key: 'foodAmountState',
  default: {},
})

export const foodIndexState = atom({
  key: 'foodIndexState',
  default: 0,
})

export const foodSumState = atom({
  key: 'foodSumState',
  default: 0,
})

export const medicalSumState = atom({
  key: 'medicalSumState',
  default: 0,
})

export const goodsSumState = atom({
  key: 'goodsSumState',
  default: 0,
})

export const totalSumState = selector({
  key: 'totalSumState',
  get: ({ get }) => (
    get(foodSumState) * 12 + 
    get(medicalSumState) + 
    get(goodsSumState)
  )
});