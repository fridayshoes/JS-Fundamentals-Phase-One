// this is an object
const cohort = {
  name: 'May2022',
  id: 1234,
  student_names: ['john', 'mark', 'louise', 'steve']
};

const cohortDetails = (details) => {
  return `${details.id} - ${details.name} - ${details.student_names.length}`;
}

console.log(cohortDetails(cohort));

// result
// 1234 - May2022 - 4
