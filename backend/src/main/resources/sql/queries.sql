-- Sign up
insert into users(first_name,last_name,username,email,password)
values ('Otilia','Vodnitchi','Zoe','otilia.vod@gmail.com','password');

-- Check if username exists
select username from users
where username = 'Zoe';

-- Add task by current user
insert into tasks(title,user_id)
values ('Clean',1);

-- select * from tasks;

-- select just the tasks created by the user
select tasks.id, title, description, status from users
                                                     join tasks on tasks.user_id = users.id
where users.id = 1
order by status desc;

-- select completed/not completed tasks for current user
select tasks.id, title, description, status from users
                                                     join tasks on tasks.user_id = users.id
where users.id = 1 and status = 0;

-- Sign in
select id, first_name,last_name,username,email from users
where username = 'Zoe' and password = 'password';

-- Update task by id
update tasks
set title = 'Eat', description = 'vdjdj', status = 0
where id = 1;

-- Delete task by id
delete from tasks
where id = 1;

-- insert into users(first_name,last_name,username,email,password)
-- values ('acb','mbr','123','asd3fb','password');
--
-- select * from users;

-- Update user's profile
update users
set first_name = 'mnb',last_name = 'axyz',username = 'iop'
where id = 3;

-- Change password
update users
set password = 'pass1'
where id = 3;