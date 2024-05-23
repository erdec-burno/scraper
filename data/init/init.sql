CREATE TABLE IF NOT EXISTS cities (
  id SERIAL NOT NULL,
  name varchar(250) NOT NULL,
  latitude double precision NOT NULL,
  longitude double precision NOT NULL,
  country varchar(250) NOT NULL,
  capital varchar(250) NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
  "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
  PRIMARY KEY (id)
);

COPY cities(name, latitude, longitude, country, capital) FROM '/docker-entrypoint-initdb.d/cities.csv' DELIMITER ',' CSV HEADER;