let company = {
    sales:
    [{ name: 'John', salary: 1000 },
     { name: 'Alice', salary: 600 }],
  development: {
      web:
    [{ name: 'Peter', salary: 2000 },
     { name: 'Alex', salary: 1800 }],
    internals: [{ name: 'Jack', salary: 1300 }]
  }
};

function calculateTotalSalary(company) {
  let totalSalary = 0;

  for (let department in company) {
    if (Array.isArray(company[department])) {
      company[department].forEach(user => {
        totalSalary += user.salary;
      });
    } else if (typeof company[department] === 'object') {
      for (let subdepartment in company[department]) {
        company[department][subdepartment].forEach(user => {
          totalSalary += user.salary;
        });
      }
    }
  }

  return totalSalary;
}

console.log("Загальна сума зарплат користувачів: " + calculateTotalSalary(company));
