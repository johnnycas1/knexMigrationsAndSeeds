# gMemory practice pt.1

## Objectives
- [why?]
- [walk through included files]
- [install dependencies]
- [create knex file]
- [generate migration]
- [build out migration]
- [apply migration local database]
- [check psql for table]
- [generate seed]
- [build out seed]
- [apply seed local database]
- [check psql for seeded table]
- [build out database-connection]
- [build queries]
- [test each route & query using postman]


### Steps
- Create Database
```
createdb DBNAMEHERE
```
- check for database
```
psql DBNAMEHERE
```
- install knex and pg dependencies
```
npm i knex pg
```
- generate knex file
```
knex init
```
- connect db in knex file
  - development & production

- create migration
```
knex migrate:make TABLENAMEHERE
```
- run migration
```
knex migrate:latest
```
- check database for table
```
psql DBNAME
heroes=# TABLE TABLENAMEHERE;
```
- create seed
```
knex seed:make 01-hero
```
- run seed
```
knex seed:run
```



## Resources
- [Create DB with Kyle at 28min](https://www.youtube.com/watch?v=qdbHx9bd1uo)
- [Migrations and Seeds with Marlena pt.1 through migration](https://www.youtube.com/watch?v=OzMTyKRAF_A&feature=youtu.be)
- [Migrations and Seeds with Marlena pt.2 starts with seed](https://www.youtube.com/watch?v=OzMTyKRAF_A&feature=youtu.be)
- [Knex docs are GREAT!](https://knexjs.org/)



