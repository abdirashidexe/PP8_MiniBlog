create database miniblog;
use miniblog;

drop table if exists posts;
create table posts(
	id int(5) auto_increment primary key,
    author varchar(255),
    title varchar(255), 
    content varchar(255),
    created_at datetime default now()
);

insert into posts (id, author, title, content)
values ('1', 'Test Name', 'Test Title', 'Test Content Lorum Ipsum');