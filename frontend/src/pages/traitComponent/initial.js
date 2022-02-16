const contents = [
  {
    text: '초보자 추천',
    paramName: 'noviceOwners'
  },
  {
    text: '아파트 생활 적합',
    paramName: 'apartmentLiving'
  },
  {
    text: '혼자 있는 걸 잘 참음',
    paramName: 'beingAlone'
  },
  {
    text: '큰 개를 원함',
    paramName: 'size'
  },
  {
    text: '다른 개와 친함',
    paramName: 'dogFriendly'
  },
  {
    text: '아이와 친함',
    paramName: 'kidFriendly'
  },
  {
    text: '털 빠짐 적음',
    paramName: 'amountOfShedding'
  }
];

export const initial = Array.from({ length: 7 }, (v, k) => k).map(k => {
  const custom = {
    id: `id-${k}`,
    content: contents[k].text,
    paramName: contents[k].paramName
  };

  return custom;
});