-- show databases
-- create database db
create table students(rollno int,name varchar(30),age int,gender char,major varchar(23));
insert into students values(1,'Anirudh',19,'M','cse');
insert into students values(2,'akilan',20,'M','eee');
insert into students values(3,'chandra',21,'M','ece');
insert into students values(4,'Ani',22,'M','cse');
insert into students values(5,'akil',29,'M','eee');
insert into students values(6,'chandru',20,'M','ece');
insert into students values(7,'fataz',19,'M','cse');
insert into students values(8,'jeeva',18,'M','eee');
insert into students values(9,'rachel zegler',22,'F','ece');
insert into students values(10,'sherley setia',26,'F','cse');
insert into students values(11,'samantha',31,'F','eee');
insert into students values(12,'emma',36,'F','ece');


-- select * from students;

-- update students set age= 40 where name ='fataz';
-- select * from students where age = 19;


select * from students order by age desc;

select * from students order by age;