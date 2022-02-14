import axios from "axios";
import getMbtiQuery from "./getMbtiQuery";

const baseUrl = "/dog/recommand/MBTI";

const getMbtiResultPromise = async (params) => {
  console.log(params);
  const query = getMbtiQuery(params);

  const config = {
    url: baseUrl + query,
    method: "GET",
  };

  const response = await axios(config);
  const data = await response.data;
  return data;
};

export default getMbtiResultPromise;
