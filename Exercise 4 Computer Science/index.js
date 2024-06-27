const students = [
    { name: "Ray", course: "Computer Science", isPassed: true },
    
  ];
  
  // Filter students who passed
  const passedStudents = students.filter(student => student.isPassed);
  
  // Congratulate passed students (Bonus)
  passedStudents.forEach(student => {
    console.log(`Good Job ${student.name}, you passed the course in ${student.course}!`);
  });
  