import { atom } from 'recoil'

export const foodState = atom({
  key: 'food',
  default: [],
});

export const medicalState = atom({
  key: 'medical',
  default: [],
});

export const goodsState = atom({
  key: 'goods',
  default: [],
});

export const breedState = atom({
  key: 'breed',
  default: [],
});

export const checkState = atom({
  key: 'check',
  default: true,
});