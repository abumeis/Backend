CREATE TABLE students
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    city VARCHAR(30)

)

INSERT INTO students (name, city)
 VALUES
 ('Véronique','Paris'),
 ('Steeven','Lyon'),
 ( 'Marc','Marseille'),
 ('Nour','Lyon'),
 ('Romain','Paris'),
 ('Sophie','Paris'),






CREATE TABLE languages
(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),

)
INSERT INTO languages ( name)
 VALUES
 ('French'),
 ('English'),
 ( 'German'),
 ('Spanish'),
 ('Mandarin'),
 ('Sophie'),






CREATE TABLE Favorites
(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    class VARCHAR(30),
    sport VARCHAR(30),
    studentID INT
    FOREIGN KEY (studentID ) REFERENCES students(id)

);


INSERT INTO Favorites (class,sport, studentID)
 VALUES

('Maths','Cricket',	2),
('Music','Hip-hop',6),
('Arts',	'Boxing',	1),
('Literature','Tennis',3),
('Computer science','Tennis',5),
('Arts',	'Baseball',4)






CREATE TABLE students_languages
(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    studentID INT,
    languageID INT

);
 
INSERT INTO students_languages ( studentID,languageID)
 VALUES

(1,	1),
(1,	2),
(2,	1),
(2,	3),
(3,	1),
(4,	1),
(4,	2),
(4,	4),
(4,	5),
(5,	1),
(5,	5),
(6,	1),
(6,	2),
(6,	3)

/* ## Rapport lvl 1 */
/* Faites les requêtes pour :

1. Récupérer toutes les colonnes de l’étudiant.e avec l’ID 3*/
SELECT * FROM `students` WHERE id = 3

/* 2. Récupérer toutes les colonnes l’étudiant.e avec l’ID 6*/
SELECT * FROM `students` WHERE id = 6

/* 3. Récupérer le nom et la ville de l’étudiant.e avec l’ID 1 */
SELECT name, city FROM `students` WHERE id = 1
/* 4. Récupérer le nom de l’étudiant.e avec l’ID 2 */
SELECT name FROM `students` WHERE id = 2
/* 5. Récupérer toutes les colonnes des étudiant.e.s de la ville de Paris */
SELECT name FROM `students` WHERE city = 'Paris'
/* 6. Récupérer les noms des étudiant.es de la ville de Lyon */ */
SELECT name FROM `students` WHERE city = 'Lyon'




/* ## Rapport lvl 2 

Faites les requêtes pour :*/

/* 1. Pour l’étudiant.e d’ID 5, récupérer toutes les colonnes sur l’étudiant.e et ses activités favorites */
SELECT * FROM students INNER JOIN favorites  ON students.id = studentID WHERE students.id = 5
/* 2. Pour l’étudiant.e d’ID 4, récupérer son nom et son sport préféré */
SELECT name, sport FROM students INNER JOIN favorites  ON students.id = studentID WHERE students.id = 4
/* 3. Pour l’étudiant.e d’ID 1, récupérer son nom et sa matière préférée */
SELECT name, class FROM students INNER JOIN favorites ON students.id = studentID WHERE students.id = 1
/* 4. Récupérer toutes les colonnes de l’étudiant.e qui aime la musique */
SELECT * FROM students INNER JOIN favorites ON students.id = studentID WHERE  favorites.class  = "Music"

/* 5. Récupérer le nom des étudiant.e.s qui aime le tennis */
SELECT name FROM students INNER JOIN favorites ON students.id = studentID WHERE  favorites.sport  = "Tennis"

/* 6. Récupérer le nom des étudiant.e.s qui aime les matières artistiques */
SELECT * FROM students INNER JOIN favorites ON students.id = studentID WHERE  favorites.class  = "Arts"

/* 7. Récupérer le nombre d’étudiant.e.s de la ville de Paris */
SELECT COUNT(*) FROM students WHERE city = "Paris "





/* ## Rapport lvl 3 */
/* Faites les requêtes pour : */

/* 1. Récupérer les langues et toutes les colonnes de l’étudiant.e d’ID 1 */
SELECT * FROM students INNER JOIN students_languages 
 ON students.id =  students_languages.studentID 
 INNER JOIN languages
 ON  students_languages.languageID =  languages.id WHERE students.id =1 
 

/* 2. Récupérer les langues et toutes les colonnes de l’étudiant.e d’ID 4 */
SELECT * FROM students INNER JOIN students_languages 
 ON students.id =  students_languages.studentID 
 INNER JOIN languages
 ON  students_languages.languageID =  languages.id WHERE students.id =4 
/* 3. Récupérer la colonne langue et le nom de l’étudiant.e d’ID 5 */
SELECT students.name,languages.name FROM students INNER JOIN students_languages 
 ON students.id =  students_languages.studentID 
 INNER JOIN languages
 ON  students_languages.languageID =  languages.id WHERE students.id =5
/* 4. Pour chaque étudiant.e.s (6), faîtes une requêtes pour récupérer le nombre de langues parlées par cet étudiant.e.s avec leurs noms et le nombres de langues*/
SELECT students.name, COUNT(*) number_of_languages
FROM students JOIN students_languages 
ON students.id = studentID WHERE  favorites.sport  = "Tennis"GROUP BY students.name




/*Bonus*/
/* 1. Récupérer les étudiant.e.s qui ont un “e” dans leur prénom*/
SELECT name FROM `students` WHERE name LIKE '%e%'

/* 2. Récupérer le sport préférés des étudiant.e.s qui ont un “e” dans leur prénom */
SELECT name, sport
FROM students JOIN  favorites
ON students.id = favorites.studentID 
 WHERE name LIKE '%e%'

/* 3. Récupérer la classe préférées des étudiant.e.s qui ont un “i” dans le nom de leur ville */

SELECT name, sport
FROM students JOIN  favorites
ON students.id = favorites.studentID 
 WHERE name LIKE '%e%'









