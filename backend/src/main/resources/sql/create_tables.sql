create table users(
                      id serial primary key,
                      first_name varchar(40) not null,
                      last_name varchar(40) not null,
                      username varchar(20) not null unique,
                      email varchar(40) not null unique,
                      password varchar(40) not null
);

create table tasks(
                      id serial primary key,
                      title varchar(50) not null,
                      description text not null default '',
                      status smallint not null default 1,
                      user_id integer references users(id) on delete cascade
);

-- drop table tasks;
-- drop table users;