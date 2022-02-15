import axios from 'axios'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { foodState, medicalState, goodsState } from '../teststate'
import { 
  foodAmountState, 
  foodIndexState,
  foodSumState, 
  medicalSumState, 
  goodsSumState 
} from './state'
import getFoodAmount from '../estimate/food/getFoodAmount'

const useInitState = async (breed, setLoading) => {
  // state 데이터 변경 위해 Recoil 상태들 선언
  const setFoodData = useSetRecoilState(foodState)
  const setFoodSum = useSetRecoilState(foodSumState)
  const setFoodAmount = useSetRecoilState(foodAmountState)
  const foodIndex = useRecoilValue(foodIndexState)
  
  const setMedicalData = useSetRecoilState(medicalState)  
  const setMedicalSum = useSetRecoilState(medicalSumState)
  
  const setGoodsData = useSetRecoilState(goodsState)
  const setGoodsSum = useSetRecoilState(goodsSumState)

  /**사료비 관련 상태 설정 */
  const estimateResponse = await axios.get(`/estimate/estimate?name=${breed}`)
  const estimateData = await estimateResponse.data
  const food = await estimateData.slice(0,7)
  setFoodData(food)
  setFoodSum(Number(food[foodIndex].dogFeedPrice))
  
  // 사료 금액 산정 기준 설명에 필요한 사료 양 저장
  const dogInfoResponse = await axios.get(`/dog/findByName?name=${breed}`)
  const dogInfo = await dogInfoResponse.data
  const foodAmount = getFoodAmount(dogInfo)
  setFoodAmount(foodAmount)
  
  /** 의료비 관련 상태 설정 */
  const medicalResponse = await axios.get(`/estimate/health?name=${breed}`)
  const medicalData = await medicalResponse.data
  medicalData.forEach((medical) => {
    medical.defaultCheck = true
  })
  medicalData[5].defaultCheck = false
  medicalData[6].defaultCheck = false
  setMedicalData(medicalData)

  const medicalSum = medicalData.reduce((prev, cur) => {
    return cur.defaultCheck ? prev + cur.avg : prev
  }, 0)
  setMedicalSum(medicalSum)

  /** 물품비 관련 상태 설정 */
  
  const goodsResponse = await axios.get(`/estimate/findAll`)
  const goodsData = await goodsResponse.data
  const goods = await goodsData.slice(14,23)
  // console.log(goods);
  setGoodsData(goods)

  setLoading(false)
  console.log('init')
}

export default useInitState