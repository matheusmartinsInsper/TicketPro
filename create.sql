drop schema dbteste cascade;
create schema dbteste;

create table dbteste.user {
    user_id uuid primary key,
    name text not null,
    email text not null unique
}