CREATE DATABASE insurancedb;

CREATE TABLE Insurance(
    id INT(11) AUTO_INCREMENT,
    name VARCHAR(50),
    description VARCHAR(50),
    insuranceType VARCHAR(50),
    createdAt DATE,
    updatedAt DATE,
    PRIMARY KEY(id)
)ENGINE=INNODB; 

CREATE TABLE InsuranceCompany(
    id INT(11) AUTO_INCREMENT,
    name VARCHAR(50),
    address VARCHAR(50),
    mobileNo VARCHAR(50),
    emailAddress VARCHAR(50),
    netWorth VARCHAR(50),
    createdAt DATE,
    updatedAt DATE,
    PRIMARY KEY(id)
)ENGINE=INNODB; 

CREATE TABLE Customer(
    id INT(11) AUTO_INCREMENT,
    name VARCHAR(50),
    address VARCHAR(50),
    mobileNo VARCHAR(50),
    emailAddress VARCHAR(50),
    createdAt DATE,
    updatedAt DATE,
    PRIMARY KEY(id)
)ENGINE=INNODB; 

CREATE TABLE InsurancesTaken(
    id INT(11) AUTO_INCREMENT,
    customerId INT(11),
    insuranceId INT(11),
    termTaken INT(11),
    pricePerMonth INT(11),
    createdAt DATE,
    updatedAt DATE,
    PRIMARY KEY(id),
    FOREIGN KEY(customerId) REFERENCES Customer(id) on delete cascade,
    FOREIGN KEY(insuranceId) REFERENCES Insurance(id) on delete cascade
)ENGINE=INNODB; 
 
CREATE TABLE InsurancesProvided(
    id INT(11) AUTO_INCREMENT,
    companyId INT(11),
    insuranceId INT(11),
    createdAt DATE,
    updatedAt DATE,
    PRIMARY KEY(id),
    FOREIGN KEY(companyId) REFERENCES InsuranceCompany(id) on delete cascade,
    FOREIGN KEY(insuranceId) REFERENCES Insurance(id) on delete cascade
)ENGINE=INNODB; 