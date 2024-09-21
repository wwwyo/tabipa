-- Enable the uuid-ossp extension for generating UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create Users Table
CREATE TABLE Users (
  ID UUID PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  email VARCHAR(255) NOT NULL UNIQUE
);

-- Create Profiles Table
CREATE TABLE Profiles (
  ID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  userID UUID REFERENCES Users(ID) ON DELETE CASCADE,
  username VARCHAR(255) NOT NULL,
  gender VARCHAR(10),
  birthdate DATE
);

-- Create Travels Table
CREATE TABLE Travels (
  ID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  userID UUID REFERENCES Users(ID) ON DELETE CASCADE,
  title VARCHAR(255),
  description TEXT,
  startDate DATE,
  endDate DATE,
  region VARCHAR(255),
  status VARCHAR(50),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Spots Table
CREATE TABLE Spots (
  ID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255),
  address_or_coordinates VARCHAR(255),
  category VARCHAR(255),
  googleMapID VARCHAR(255),
  imageURL VARCHAR(255)
);

-- Create Reviews Table
CREATE TABLE Reviews (
  ID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  userID UUID REFERENCES Users(ID) ON DELETE CASCADE,
  content TEXT,
  rating FLOAT,
  imageURLs TEXT[],
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create TravelSpots Table
CREATE TABLE TravelSpots (
  ID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  travelID UUID REFERENCES Travels(ID) ON DELETE CASCADE,
  spotID UUID REFERENCES Spots(ID) ON DELETE CASCADE,
  visitDateTime TIMESTAMP
);

-- Create TravelDetails Table
CREATE TABLE TravelDetails (
  ID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  travelID UUID REFERENCES Travels(ID) ON DELETE CASCADE,
  totalCost FLOAT,
  overallRating FLOAT,
  visibility BOOLEAN,
  travelStyle VARCHAR(255)
);

-- Create index on Foreign Key columns for performance
CREATE INDEX idx_profile_user_id ON Profiles(userID);
CREATE INDEX idx_travel_user_id ON Travels(userID);
CREATE INDEX idx_review_user_id ON Reviews(userID);
CREATE INDEX idx_travelspot_travel_id ON TravelSpots(travelID);
CREATE INDEX idx_travelspot_spot_id ON TravelSpots(spotID);
CREATE INDEX idx_traveldetail_travel_id ON TravelDetails(travelID);