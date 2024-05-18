# Hotel-Reservation-Manager

Table Creations Scripts :

CREATE TABLE Hotels (
id INT PRIMARY KEY,
name VARCHAR(255),
latitude DECIMAL(10, 8),
longitude DECIMAL(11, 8)
);

CREATE TABLE Rooms (
id INT PRIMARY KEY,
hotel_id INT,
room_number INT,
room_type INT,
price DECIMAL(10, 2),
is_available INT,
FOREIGN KEY (hotel_id) REFERENCES Hotels(id)
);

Insert Values Scripts :

INSERT INTO Hotels (id, name, latitude, longitude)
VALUES
(1, 'Hotel Ramada', 46.764654252624204, 23.598674125224626),
(2, 'Grand Hotel Italia', 46.7522792440665, 23.605990381045697),
(3, 'Hampton by Hilton', 46.77539900854998, 23.60182699638966);

INSERT INTO Rooms (id, hotel_id, roomNumber, type, price, isAvailable)
VALUES
(1, 1, 210, 2, 200, 1),
(2, 1, 125, 1, 350, 1),
(3, 1, 87, 1, 300, 0),
(4, 2, 41, 3, 240, 1),
(5, 3, 32, 2, 410, 0),
(6, 3, 21, 2, 350, 1),
(7, 3, 64, 3, 300, 1);

To run the program enter FRONTEND/frontend and in terminal write npm run start, for the backend start the server for communications.
