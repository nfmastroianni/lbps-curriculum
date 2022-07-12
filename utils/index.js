export const createCurriculaObject = (array) => {
  const curricula = array.map((row) => {
    return {
      published: row[0] || null,
      title: row[1] || null,
      span: row[2] || null,
      level: row[3] || null,
      area: row[4] || null,
      guide: row[5] || null,
      calendar: row[6] || null,
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

export const getSpanPaths = (curricula) => {
  const pairs = []
  curricula.forEach((curriculum) => {
    let pair = [slugify(curriculum.span), slugify(curriculum.area)]
    pairs.push(pair)
  })
  let stringPairs = pairs.map(JSON.stringify)
  const uniquePairs = new Set(stringPairs)
  const uniqueArray = Array.from(uniquePairs, JSON.parse)
  const paths = []
  uniqueArray.forEach((path) => {
    paths.push({ params: { slug: path } })
  })
  return paths
}
