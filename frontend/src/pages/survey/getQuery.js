/** 설문 조사 결과 항목들을 
query param 형태로 이어붙임 */

const getQuery = (params) => {
  let query = "";
  Object.keys(params).forEach((key) => {
    query += `&${key}=${params[key]}`;
  });
  query = query.replace("&", "?");
  console.log(query);

  return query;
};

export default getQuery;
