drop table if exists apartments;
drop table if exists office;
drop table if exists storefront;

create table apartments(
    id serial primary key,
    apt_number INTEGER,
    bedroom_count INTEGER,
    bathroom_count INTEGER,
    address VARCHAR not null,
    tenant VARCHAR,
    occupied BOOLEAN,
    sq_footage INTEGER,
    price INTEGER
);

create table office(
    id INTEGER,
    office_number INTEGER,
    floors INTEGER,
    sq_footage INTEGER,
    num_cubicles INTEGER,
    num_bathrooms INTEGER,
    address VARCHAR not null,
    name VARCHAR,
    occupied BOOLEAN,
    price INTEGER
);

create table storefront(
    id INTEGER,
    address VARCHAR,
    occupied BOOLEAN,
    price INTEGER,
    kitchen BOOLEAN,
    sq_footage INTEGER,
    owner VARCHAR,
    patio BOOLEAN
);