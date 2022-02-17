import axios from "axios";

const getSearchResult = async (name) => {
  const response = await axios.get(`/dog/findByName?name=${name}`)
  const data = await response.data;
  return data;
};

export default getSearchResult;