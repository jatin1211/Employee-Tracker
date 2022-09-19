INSERT INTO department(name)
VALUES
('Marketing'), ('Finance'), ('Operations'), ('Human Resource'), ('IT');

INSERT INTO role(title,salary,department_id)
VALUES
('Marketing Lead','100000',1),
('Marketing planner','80000',1),
('Finance intern','60000',2),
('Finance Manager','120000',2),
('Operations technician','85000',3),
('Operations engineer','90000',3),
('Human Resource Associate','750000',4),
('Human Resource Manager','110000',4),
('IT engineer','110000',5),
('IT head','140000',5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 4,1),
  ('Virginia', 'Woolf', 6,2),
  ('Piers', 'Gaveston', 5,1),
  ('Charles', 'LeRoi', 2,4),
  ('Katherine', 'Mansfield',1, 3),
  ('Dora', 'Carrington',8, 3),
  ('Edward', 'Bellamy',3, 5),
  ('Montague', 'Summers',1, 4),
  ('Octavia', 'Butler',7,6),
  ('Unica', 'Zurn',4, 7);