CREATE DATABASE agritechnodb;

CREATE TABLE Temperature(
    id INT(11) AUTO_INCREMENT,
    name VARCHAR(50),
    startTemperature VARCHAR(50),
    endTemperature VARCHAR(50),
    createdAt DATE,
    updatedAt DATE,
    PRIMARY KEY(id)
)ENGINE=INNODB; 

CREATE TABLE Rainfall(
    id INT(11) AUTO_INCREMENT,
    name VARCHAR(50),
    density VARCHAR(50),
    createdAt DATE,
    updatedAt DATE,
    PRIMARY KEY(id)
)ENGINE=INNODB; 

CREATE TABLE Soil(
    id INT(11) AUTO_INCREMENT,
    name VARCHAR(50),
    type VARCHAR(50),
    moisture VARCHAR(50),
    createdAt DATE,
    updatedAt DATE,
    PRIMARY KEY(id)
)ENGINE=INNODB; 

CREATE TABLE Crop(
    id INT(11) AUTO_INCREMENT,
    name VARCHAR(50),
    type VARCHAR(50),
    timeTaken INT(11),
    price INT(11),
    createdAt DATE,
    updatedAt DATE,
    PRIMARY KEY(id)
)ENGINE=INNODB; 

CREATE TABLE CropRequirements(
    id INT(11) UNIQUE AUTO_INCREMENT,
    cropId INT(11),
    soilId INT(11),
    rainfallId INT(11),
    temperatureId INT(11),
    createdAt DATE,
    updatedAt DATE,
    PRIMARY KEY(cropId,soilId,rainfallId,temperatureId),
    FOREIGN KEY(cropId) REFERENCES Crop(id) ,
    FOREIGN KEY(soilId) REFERENCES Soil(id) ,
    FOREIGN KEY(rainfallId) REFERENCES Rainfall(id) ,
    FOREIGN KEY(temperatureId) REFERENCES Temperature(id)
)ENGINE=INNODB; 
 
