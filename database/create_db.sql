DROP TABLE IF EXISTS ranking.person;

DROP SCHEMA IF EXISTS ranking;
CREATE SCHEMA ranking;
USE ranking;

CREATE TABLE ranking.person (
	personId	INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name		varchar(20) NOT NULL);