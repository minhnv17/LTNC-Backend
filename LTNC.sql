create database LTNC;

create table `users`(
	`ID` nvarchar(30),
    `name` nvarchar(255) not null,
    `address` nvarchar(255),
	`phone` nvarchar(255),
    `email` nvarchar(255),
    `password` nvarchar(255) not null,
    `role` enum('student', 'teacher', 'ministry') not null,
    primary key (ID)
);

create table `students`(
	`ID` int AUTO_INCREMENT,
    `userID` nvarchar(30) not null,
    `class` nvarchar(255),
    primary key (ID),
    foreign key (userID) REFERENCES users(ID)
);

create table `teachers`(
	`ID` int AUTO_INCREMENT,
    `userID` nvarchar(30) not null,
    `labRoom` nvarchar(50),
    primary key (ID),
    foreign key (userID) REFERENCES users(ID)
);

create table `projectAssignment`(
	`ID` int AUTO_INCREMENT,
    `teacherId` int not null,
    `projectId` int not null unique,
    primary key (ID),
    foreign key (teacherId) REFERENCES teachers(ID),
    foreign key (projectId) REFERENCES projects(ID)
);

create table `studentProjAsgn`(
	`ID` int AUTO_INCREMENT,
    `studentId` int not null,
    `projectId` int not null,
    primary key (ID),
    foreign key (studentId) REFERENCES students(ID),
    foreign key (projectId) REFERENCES projects(ID)
);

create table `projects`(
	`ID` int AUTO_INCREMENT,
    `name` nvarchar(255) not null,
    `type` enum('project1', 'project2', 'project3', 'projectFinal') not null,
    `semester` nvarchar(50),
    primary key (ID)
);