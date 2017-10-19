#1 
nfl=# 
SELECT name FROM teams;
         name
----------------------
 Buffalo Bills
 Miami Dolphins
 New England Patriots
 New York Jets
 Baltimore Ravens
 Cincinnati Bengals
 Cleveland Browns
 Pittsburgh Steelers
 Houston Texans
 Indianapolis Colts
 Jacksonville Jaguars
 Tennessee Titans
 Denver Broncos
 Kansas City Chiefs
 Oakland Raiders
 San Diego Chargers
 Dallas Cowboys
 New York Giants
 Philadelphia Eagles
 Washington Redskins
 Chicago Bears
 Detroit Lions
 Green Bay Packers
 Minnesota Vikings
 Atlanta Falcons
 Carolina Panthers
 New Orleans Saints
 Tampa Bay Buccaneers
 Arizona Cardinals
 St. Louis Rams
 San Francisco 49ers
 Seattle Seahawks
(32 rows)

# 2 
nfl=# 
SELECT stadium, head_coach FROM teams;
            stadium            |   head_coach
-------------------------------+----------------
 Ralph Wilson Stadium          | Doug Marrone
 Sun Life Stadium              | Joe Philbin
 Gillette Stadium              | Bill Belichick
 MetLife Stadium               | Rex Ryan
 M&T Bank Stadium              | John Harbaugh
 Paul Brown Stadium            | Marvin Lewis
 FirstEnergy Stadium           | Mike Pettine
 Heinz Field                   | Mike Tomlin
 NRG Stadium                   | Bill OBrien
 Lucas Oil Stadium             | Chuck Pagano
 EverBank Field                | Gus Bradley
 LP Field                      | Ken Whisenhunt
 Sports Authority Field        | John Fox
 Arrowhead Stadium             | Andy Reid
 O.co Coliseum                 | Tony Sparano
 Qualcomm Stadium              | Mike McCoy
 AT&T Stadium                  | Jason Garrett
 MetLife Stadium               | Tom Coughlin
 Lincoln Financial Field       | Chip Kelly
 FedExField                    | Jay Gruden
 Soldier Field                 | Marc Trestman
 Ford Field                    | Jim Caldwell
 Lambeau Field                 | Mike McCarthy
 TCF Bank Stadium              | Mike Zimmer
 Georgia Dome                  | Mike Smith
 Bank of America Stadium       | Ron Rivera
 Mercedes-Benz Superdome       | Sean Payton
 Raymond James Stadium         | Lovie Smith
 University of Phoenix Stadium | Bruce Arians
 Edward Jones Dome             | Jeff Fisher
 Levis Stadium                 | Jim Harbaugh
 CenturyLink Field             | Pete Carroll
(32 rows)


#3 
nfl=# 

SELECT head_coach FROM teams WHERE conference = 'AFC' AND division = 'South';

   head_coach
----------------
 Bill OBrien
 Chuck Pagano
 Gus Bradley
 Ken Whisenhunt
(4 rows)

#4 
nfl=# SELECT COUNT (*) FROM players;
 count
-------
  1532
(1 row)

#5

SELECT name, head_coach FROM teams WHERE conference = 'NFC' AND division = 'North' OR conference = 'AFC' AND division = 'East';
         name         |   head_coach
----------------------+----------------
 Buffalo Bills        | Doug Marrone
 Miami Dolphins       | Joe Philbin
 New England Patriots | Bill Belichick
 New York Jets        | Rex Ryan
 Chicago Bears        | Marc Trestman
 Detroit Lions        | Jim Caldwell
 Green Bay Packers    | Mike McCarthy
 Minnesota Vikings    | Mike Zimmer
(8 rows)

#6
-- The 50 players with the highest salaries

SELECT name FROM players ORDER BY salary DESC LIMIT 50;
          name
-------------------------
 Peyton Manning
 Drew Brees
 Dwight Freeney
 Elvis Dumervil
 Michael Vick
 Sam Bradford
 Jared Allen
 Matt Ryan
 Matthew Stafford
 Tamba Hali
 Jake Long
 Nnamdi Asomugha
 Trent Williams
 Vincent Jackson

 #7
 nfl=# SELECT AVG (salary) FROM players;
         avg
----------------------
 1579692.539817232376
(1 row)

# 8
nfl=# 
SELECT name, position FROM players WHERE salary < 1000000;
          name          | position
------------------------+----------
 Kirk Morrison          | LB
 Corey McIntyre         | RB
 C.J. Spiller           | RB
 Garrison Sanborn       | LB
 Eric Wood