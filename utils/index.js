export const createCurriculaObject = (array) => {
  const curricula = array.map((curriculum) => {
    return {
      published: curriculum[0],
      title: curriculum[1],
      band: curriculum[2],
      area: curriculum[3],
      guide: curriculum[4],
      calendar: curriculum[5],
    };
  });
  return curricula;
};
