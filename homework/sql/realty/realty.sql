1. 
realty_db=# 
SELECT AVG(sq_footage) FROM office;
          avg
-----------------------
 5500.0000000000000000
(1 row)

realty_db=#

2. 
realty_db=#
 SELECT COUNT (id) FROM apartments;
 count
-------
     6
(1 row)

realty_db=#

3. 

SELECT * FROM apartments WHERE occupied = 'false';
 id | apt_number | bedroom_count | bathroom_count |      address      |  tenant   | occupied | sq_footage | price
----+------------+---------------+----------------+-------------------+-----------+----------+------------+-------
  2 |        173 |             3 |              5 | 948 BrookStore St | Margaraet | f        |       2789 |  1200
  6 |        278 |             4 |              6 | 77 Hello Goodbye  | Jill      | f        |         99 |  7799
(2 rows)

realty_db=#

4. 
SELECT name FROM office;
    name
------------
 Aerodytech
 BananaLand
(2 rows)

5. 
SELECT num_cubicles, num_bathrooms FROM office WHERE id = 3;
.... That didn't work. 
realty_db=# SELECT num_cubicles, num_bathrooms FROM office WHERE id=3;
 num_cubicles | num_bathrooms
--------------+---------------

now sure twhat I'm missing here. Will check this out further. 


6. 
 SELECT * FROM storefront WHERE kitchen=true;
 id | address | occupied | price | kitchen | sq_footage | owner | patio
----+---------+----------+-------+---------+------------+-------+-------
(0 rows)

 SELECT * FROM storefront WHERE kitchen=false;
 id |   address    | occupied | price | kitchen | sq_footage |   owner    | patio
----+--------------+----------+-------+---------+------------+------------+-------
    | 99 Bluebird  | t        |   800 | f       |       1200 | Gary Smith | f
    | 100 Pasco Ln | t        |  1800 | f       |        800 | Denise     | t
(2 rows)


7. 
 SELECT * FROM storefront WHERE patio=true ORDER BY sq_footage ASC
;
 id |   address    | occupied | price | kitchen | sq_footage | owner  | patio
----+--------------+----------+-------+---------+------------+--------+-------
    | 100 Pasco Ln | t        |  1800 | f       |        800 | Denise | t
(1 row)

8. 
 SELECT  MIN(num_cubicles) FROM office;
 min
-----
   6
(1 row)


9. 
SELECT name FROM office ORDER BY num_cubicles, num_bathrooms;
    name
------------
 BananaLand
 Aerodytech
(2 rows)
