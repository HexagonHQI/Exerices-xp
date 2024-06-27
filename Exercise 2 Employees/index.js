const users = [
    // ... (users data)
  ];
  
  const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
  console.log(welcomeStudents); // ["Hello Bradley", "Hello Chloe", ...]

//   residents
  const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStackResidents); // [{ firstName: ..., lastName: ..., role: ... }, ...] (Full Stack Residents only)

// Last name of residents
const fullStackLastNames = users.filter(user => user.role === 'Full Stack Resident')
  .map(user => user.lastName);
console.log(fullStackLastNames); // ["Bouley", "Alnaji", "Hajek"]
