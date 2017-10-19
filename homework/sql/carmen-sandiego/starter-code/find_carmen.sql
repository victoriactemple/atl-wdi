Clue #1: 

 SELECT name, region, population FROM country WHERE region='Southern Europe' ORDER BY population; 
 
 -- * Clue # 1 = Holy City, Vatican City State 

 Clue #2: official language of VAT
 
 SELECT language FROM countrylanguage WHERE countrycode = 'VAT';

 Clue #3
 SELECT * FROM countrylanguage WHERE language = 'Italian' ORDER BY percentage;
 -- answer is SMR


 Clue #4
SELECT name FROM country WHERE code ='SMR';

--     name
-- ------------
--  San Marino
-- (1 row)

Clue #5




