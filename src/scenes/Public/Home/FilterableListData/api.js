
const students = {
  '0012018': {
    id: '0012018',
    firstName: 'Irish Jane',
    lastName: 'Bulangis-Cual'
  },
  '0022018': {
    id: '0022018',
    firstName: 'Drish Jane',
    lastName: 'Cual'
  },
  '0032018': {
    id: '0032018',
    firstName: 'Dennis',
    lastName: 'Martin'
  }
}

// Fake api request for fetching students.
const fetchStudents = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(students)
    }, 1000)
  })

export default {
  fetchStudents
}
