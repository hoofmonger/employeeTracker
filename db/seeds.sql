INSERT INTO departments (id, department_name)
VALUES(001, 'Manager'), 
(002, 'Sales'), 
(003, 'Marketing'), 
(004, 'Engineering'), 
(005, 'Customer Service');

INSERT INTO roles (id, role_name, salary, department_id)
VALUES(001, 'CEO', 1000000, 001), 
(002, 'Sales and Marketing Director', 200000, 001), 
(003, 'Director of Research', 200000, 001), 
(004, 'Customer Service Director', 200000, 001), 
(005, "Senior Sales Rep", 150000, 002), 
(006, "Sales Rep", 85000, 002), 
(007, "Marketing Specialist", 135000, 003), 
(008, "Marketing Intern", 40000, 003), 
(009, "Chief Engineer", 300000, 004), 
(010, "Engineer", 180000, 004), 
(011, "Engineering Intern", 40000, 004), 
(012, "Customer Service - Shift Lead", 115000, 005), 
(013, "Customer Service Representive", 85000, 005);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES(001, 'Sally', 'Davis', 001, 001), 
(002, 'Robert', 'Smith', 002, 001), 
(003, 'Kennedy', 'Bonnet', 003, 001), 
(004, 'Simon', 'Peterson', 004, 001), 
(005, 'Folbert', 'Dimmerson', 005, 002),
(006, 'Nigel', 'Halberd', 005, 002),
(007, "D'Gogius", 'HammerSchmidt', 006, 002),
(008, 'Holden', 'Cross', 006, 002),
(009, 'Halbrick', 'Caneswick', 006, 002),
(010, 'Tiberius', 'Cornswallup', 006, 002),
(011, 'Jimmothy', 'Bonjourno', 007, 002),
(012, 'Melisandra', 'Money-Penny', 008, 002),
(013, 'Julius', 'Axelfort', 008, 002),
(014, 'Waltarius', 'Who', 009, 003),
(015, 'Bobert', 'Carlsburg', 010, 003),
(016, 'Jonly', 'Bonly', 010, 003),
(017, 'Charlston', 'Custardson', 011, 003),
(018, 'Corsaire', 'Bumbleton', 011, 003),
(019, 'Lily', 'Mordred', 012, 004),
(020, 'Marcuius', 'Gobbledorke', 012, 004),
(021, 'Hoobert', 'Hoever', 012, 004),
(022, 'Airwrecka', 'Moldovo', 013, 004),
(023, 'Veronica', 'McSleezy', 013, 004),
(024, 'Vlad', 'Bobniski', 013, 004),
(025, 'Majorie', 'Horsepaste', 013, 004);