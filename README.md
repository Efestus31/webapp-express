# Film rewiew app

Il nostro obbiettivo é creare una semplice app gestionale per inserire film e recensioni pubbliche.

## Caratteristiche chiave

* API CRUD
* MySQL DB

## Database

* table: `movies`
* table: `reviews`

### movies Table

 * id | int(11) NOT NULL AUTO_INCREMENT
 * title | varchar(255) NOT NULL
 * director | varchar(255) NOT NULL
 * genre | varchar(255) NOT NULL
 * relese_year | year(4) DEFAULT NULL
 * abstract | text DEFAULT NULL
 * image | varchar(255) NOT NULL
 * created_at | timestamp NOT NULL DEFAULT
 * updated_at | timestamp NOT NULL DEFAULT

### review Table

  * id | int(11) NOT NULL AUTO_INCREMENT
  * movie_id | int(11) NOT NULL
  * name | varchar(255) NOT NULL
  * vote | tinyint(4) NOT NULL CHECK (`vote` between 1 and 5)
  * text | text DEFAULT NULL
  * created_at | timestamp NOT NULL DEFAULT current_timestamp()
  * updated_at | timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()





