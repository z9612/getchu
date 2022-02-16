const contents = [
  '초보자 추천',
  '아파트 생활 적합',
  '혼자 있는 걸 잘 참음',
  '큰 개를 원함',
  '다른 개와 친함',
  '아이와 친함',
  '털 빠짐 적음',
];

export const initial = Array.from({ length: 7 }, (v, k) => k).map(k => {
  const custom = {
    id: `id-${k}`,
    content: contents[k]
  };

  return custom;
});