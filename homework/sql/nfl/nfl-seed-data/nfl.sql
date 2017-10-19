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
