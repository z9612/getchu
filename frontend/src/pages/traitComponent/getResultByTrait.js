import axios from "axios";

const baseUrl = "/dog/recommand/lifestyle";

export const getResultByTrait = async (query) => {
  const config = {
    url: baseUrl + query,
    method: "GET",
  };

  const response = await axios(config);
  const data = await response.data;
  return data;
};