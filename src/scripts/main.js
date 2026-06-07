'use strict';

function sortList(listElement) {
  const items = Array.from(list.querySelectorAll('li'));

  function convertSalary(salaryString) {
    return Number(salaryString.replace('$', '').replace(',', ''));
  }

  const sortSalary = items.sort(
    (a, b) => convertSalary(b.dataset.salary) - convertSalary(a.dataset.salary),
  );

  return list.append(...sortSalary);
}

function getEmployees(listElement) {
  const items = Array.from(list.querySelectorAll('li'));

  const employee = items.map((li) => {
    return {
      name: li.dataset.name,
      position: li.dataset.position,
      salary: Number(li.dataset.salary),
      age: li.dataset.age,
    };
  });

  return employee;
}

const list = document.querySelector('ul');

sortList(list);
getEmployees(list);
