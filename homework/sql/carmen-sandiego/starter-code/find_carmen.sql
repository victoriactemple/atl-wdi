Clue #1: 

 SELECT name, region, population FROM country WHERE region='Southern Europe' ORDER BY population; 
 
 -- * Clue # 1 = Holy City, Vatican City State 

 Clue #2: official language of VAT
 
 SELECT language FROM countrylanguage WHERE countrycode = 'VAT';

 Clue #3
 SELECT * FROM countrylanguage WHERE language = 'Italian' ORDER BY percentage;
 -- answer is SMR


 Clue #4
SELECT name FROM city WHERE countrycode ='SMR';

-- so she's in Serravalle 

-- carmen=# SELECT * FROM country WHERE name = 'San Marino';
--  code |    name    | continent |     region      | surfacearea | indepyear | population | lifeexpectancy |  gnp   | gnpold | localname  | governmentform | headofstate | capital | code2
-- ------+------------+-----------+-----------------+-------------+-----------+------------+----------------+--------+--------+------------+----------------+-------------+---------+-------
--  SMR  | San Marino | Europe    | Southern Europe |          61 |       885 |      27000 |           81.1 | 510.00 |        | San Marino | Republic       |             |    3171 | SM
-- (1 row)

-- carmen=# SELECT name FROM city WHERE countrycode ='SMR';
--     name
-- ------------
--  Serravalle
--  San Marino
-- (2 rows)

-- carmen=#


 SELECT * FROM city WHERE name LIKE 'Serr%';

   id  |    name    | countrycode |     district      | population
------+------------+-------------+-------------------+------------
  265 | Serra      | BRA         | Esp�rito Santo  |     302666
 3170 | Serravalle | SMR         | Serravalle/Dogano |       4802
(2 rows)


Clue #5

 ****** Got super lost and had to look at the solutions to get me back on track...
 I think something may be out of order or flip-flopped? 

SELECT name FROM city WHERE id = '211';
    name
------------
 Bras�lia
(1 row)


SELECT name FROM country WHERE code = 'BRA';
  name
--------
 Brazil
(1 row)




Clue #6 
 SELECT name FROM city WHERE population = 91084;
     name
--------------
 Santa Monica
(1 row)