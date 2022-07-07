export const createCurriculaObject = (array) => {
  const curricula = array.map((curriculum) => {
    return {
      published: curriculum[0],
      title: curriculum[1],
      span: curriculum[2],
      level: curriculum[3],
      area: curriculum[4],
      guide: curriculum[5],
      calendar: curriculum[6],
    };
  });
  return curricula;
};

export const alphaSortArrayAscending = (array, prop) => {
  if (prop) {
    return array.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
  } else {
    return array.sort((a, b) => (a > b ? 1 : -1));
  }
};
