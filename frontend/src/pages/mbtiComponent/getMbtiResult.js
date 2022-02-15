import axios from "axios";

const baseUrl = "/dog/recommand/mbti";

const getMbtiResultPromise = async (params) => {
  // console.log(params);

  const query = `?mbti=${params}`;
  // console.log(query);
  const config = {
    url: baseUrl + query,
    method: "GET",
  };

  const response = await axios(config);
  const data = await response.data;
  return data;
};

export default getMbtiResultPromise;
