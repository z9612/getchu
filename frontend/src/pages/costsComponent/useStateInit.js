import axios from 'axios'
import { useSetRecoilState } from 'recoil'

import { foodState, medicalState, goodsState } from '../teststate'
import { foodAmountState } from './state'
import getFoodAmount from '../estimate/food/getFoodAmount'

const useInitState = async (breed, setLoading) => {
  // state 데이터 변경 위해
  const setFoodData = useSetRecoilState(foodState)
  const setMedicalData = useSetRecoilState(medicalState)  
  const setGoodsData = useSetRecoilState(goodsState)
  const setFoodAmount = useSetRecoilState(foodAmountState)

  // state 데이터를 API 데이터로 변경
  const estimateResponse = await axios.get(`/estimate/estimate?name=${breed}`)
  const estimateData = await estimateResponse.data

  const food = await estimateData.slice(0,7)
  setFoodData(food)

  const medical = await estimateData.slice(7,14)
  setMedicalData(medical)

  const goods = await estimateData.slice(14,23)
  setGoodsData(goods)
  // console.log(food)

  // 사료 금액 산정 기준 설명에 필요한 사료 양 저장
  const dogInfoResponse = await axios.get(`/dog/findByName?name=${breed}`)
  const dogInfo = await dogInfoResponse.data
  const foodAmount = getFoodAmount(dogInfo)
  setFoodAmount(foodAmount)
  setLoading(false)
  console.log('init')
}

export default useInitState