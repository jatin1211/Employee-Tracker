const inquirer = require("inquirer");
const db = require("./db/connection");
const cTable = require("console.table");
var departmentList = [];
//var roleList = [];

async function questions() {
  // app startup inquirer questions
  const values = await inquirer.prompt([
    {
      type: "list",
      name: "a1",
      message: "What would you like to do?",
      choices: [
        "view all departments",
        "view all roles",
        "view all employees",
        "add a department",
        "add a role",
        "add an employee",
        "update an employee role",
        "end"
      ],
    },
  ]);
  const answer = values.a1;
  checkFunction(answer);
}

function checkFunction(answer) {
  switch (answer) {
    case "view all departments":
      db.query(`SELECT * FROM department`, (err, rows) => {
        console.table(rows);
        // to make synchronous function call to questions()
        if (rows) {
          questions();
        }
      });

      break;
    case "view all roles":
      db.query(
        `SELECT role.id,role.title,role.salary,department.name AS department FROM department LEFT JOIN role ON department.id = role.department_id`,
        (err, rows) => {
          console.table(rows);
          // to make synchronous function call to questions()
          if (rows) {
            questions();
          }
        }
      );
      break;
    case "view all employees":
      db.query(
        `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;`,
        (err, rows) => {
          console.table(rows);
          // to make synchronous function call to questions()
          if (rows) {
            questions();
          }
        }
      );
      //`SELECT employee.id,employee.first_name,employee.last_name,role.title,role.salary,employee.manager_id,department.name AS department FROM role INNER JOIN employee ON role.id = employee.role_id INNER JOIN department ON department.id = role.department_id`
      break;
    case "add a department":
      return inquirer
        .prompt([
          {
            type: "text",
            name: "name",
            message:
              "What is the name of the department you would like to add?",
          },
        ])
        .then(({ name }) => {
          departmentList.push(name);
          db.query(
            `INSERT INTO department(name) VALUES('${name}');`,
            (err, rows) => {
              console.log(`${name} was added to the department list`);
              // to make synchronous function call to questions()
              if (name) {
                questions();
              }
            }
          );
        });
    // break;
    case "add a role":
      db.query("SELECT * FROM department", (err, data) => {
        let deptArr = data.map(({ id, name }) => ({
          name: name,
          value: id,
        }));

        return inquirer
          .prompt([
            {
              type: "text",
              name: "name",
              message: "What is the name of the role you would like to add?",
            },
            {
              type: "text",
              name: "salary",
              message: "What is the salary of the role you would like to add?",
            },
            {
              type: "list",
              name: "department",
              message:
                "What is the name of the department you would like to add to the new role?",
              choices: deptArr,
            },
          ])
          .then(({ name, salary, department }) => {
            db.query(
              `INSERT INTO role(title, salary, department_id) VALUES('${name}','${salary}',${department});`,
              (err, rows) => {
                console.log(
                  `${name} role with ${salary} salary was added to the role list`
                );
                // to make synchronous function call to questions()
                if (name) {
                  questions();
                }
              }
            );
          });
      });
      break;
    case "add an employee":
      return inquirer
        .prompt([
          {
            type: "text",
            name: "first_name",
            message:
              "What is the first name of the employee you would like to add?",
          },
          {
            type: "text",
            name: "last_name",
            message:
              "What is the last name of the employee you would like to add?",
          },
        ])

        .then(({ first_name, last_name }) => {
          db.query("SELECT * FROM role", (err, data) => {
            let roleArr = data.map(({ id, title }) => ({
              name: title,
              value: id,
            }));

            inquirer
              .prompt({
                type: "list",
                name: "role",
                message: "What is the role of the employee?",
                choices: roleArr,
              })
              .then((roleRes) => {
                let roleId = roleRes.role;

                db.query("SELECT * FROM employee", (err, data) => {
                  let managerArr = data.map(
                    ({ id, first_name, last_name }) => ({
                      name: `${first_name} ${last_name}`,
                      value: id,
                    })
                  );

                  inquirer
                    .prompt({
                      type: "list",
                      name: "manager",
                      message: "Name of manager",
                      choices: managerArr,
                    })
                    .then((managerRes) => {
                      let managerId = managerRes.manager;

                      db.query(
                        `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES('${first_name}','${last_name}',${roleId},${managerId});`,
                        (err, rows) => {
                          console.log(
                            `${first_name} ${last_name}  was added to the employee list`
                          );
                          // to make synchronous function call to questions()
                          if (first_name) {
                            questions();
                          }
                        }
                      );
                    });
                });
              });
          });
        });
      break;
    case "update an employee role":
      db.query("SELECT * FROM employee", (err, data) => {
        let nameArr = data.map(({ id, first_name, last_name }) => ({
          name: `${first_name} ${last_name}`,
          value: id,
        }));
        db.query("SELECT * FROM role", (err, data) => {
          let roleArr = data.map(({ id, title }) => ({
            name: title,
            value: id,
          }));
          return inquirer
            .prompt([
              {
                type: "list",
                name: "first_name",
                message: "Which employee's role would you like to update?",
                choices: nameArr,
              },
              {
                type: "list",
                name: "role",
                message: "Which role would you like to update to the employee?",
                choices: roleArr,
              },
            ])
            .then((values) => {
              db.query(
                `UPDATE employee SET role_id = ${values.role} WHERE id = ${values.first_name};`,
                (err, data) => {
                  console.log("Role updated");
                  questions();
                }
              );
            });
        });
      });
  }
}
console.log(`
+--------------------------------------------------------------+
|                 WELCOME TO EMPLOYEE TRACKER                  |
+--------------------------------------------------------------+\n`);

// calling function questions() on startup
questions();
