use db;
create table student ( id int primary KEY,
                      name varchar(20),
                      age int
                     );
create table dept(id int PRIMARY KEY,
                  department varchar(20));
                  
 insert INTO student VALUES(1,'anirudh',19);
 insert INTO student values (2,'akilan',29);
 insert INTO student values (3,'chandra',18);
 insert INTO student values (4,'faree',19);
insert INTO student values (5,'jeeva',20);
insert INTO student values (7,'aswin',22);
  
 insert INTO dept values (1,'cse');
 insert INTO dept values (2,'eee');
 insert INTO dept values (3,'cce');
 insert INTO dept values (4,'ece');
 insert INTO dept values(6,'it');
 
 select * from student;
 
 select * from dept;
 
 
 select student.id,student.name,student.age,dept.department from student inner join dept on student.id = dept.id; 
  
  select student.id,student.name,student.age,dept.department from student right join dept on student.id = dept.id; 
  
   select student.id,student.name,student.age,dept.department from student left outer join dept on student.id = dept.id ;
   
  
   
   
show databases;
create database db;
use db;
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

select * from students;

update students set age= 40 where name ='fataz';

 select * from students where age = 19;
 
select * from students order by age desc;

select * from students order by age;

select gender,count(*) as c from students group by gender;

select sum(age) as sum_age from students;

select avg(age) as avg_age from students;

select name from students where age = (select min(age) from students);






