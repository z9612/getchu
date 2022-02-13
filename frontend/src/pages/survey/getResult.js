import axios from 'axios';
import getQuery from './getQuery';

const baseUrl = '/dog/recommand/dogStyle'

const getResultPromise = async (params) => {
  // console.log(params);    
  const query = getQuery(params);

  const config = {
    url: baseUrl + query,
    method: 'GET'
  };

  const response = await axios(config);
  const data = await response.data;
  return data;
}

export default getResultPromise;