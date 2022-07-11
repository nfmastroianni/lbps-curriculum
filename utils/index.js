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
    }
  })
  return curricula
}

export const alphaSortArrayAscending = (array, prop) => {
  if (prop) {
    return array.sort((a, b) => (a[prop] > b[prop] ? 1 : -1))
  } else {
    return array.sort((a, b) => (a > b ? 1 : -1))
  }
}

export const slugify = (text) => {
  return text
    .toString() // Cast to string (optional)
    .normalize('NFKD') // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}
