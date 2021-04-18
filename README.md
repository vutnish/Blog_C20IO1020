# Blog_C20IO1020
mysql->
CREATE DATABASE IF NOT EXISTS `nodelogin` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE nodelogin;
CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO admin (`id`, `username`, `password`, `email`) VALUES (1, 'vutnish', '0407', 'tubshok@gmail.com');

ALTER TABLE 'accounts' ADD PRIMARY KEY ('id');
ALTER TABLE 'accounts' MODIFY 'id' int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;


CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO admin (`id`, `username`, `password`, `email`) VALUES (1, 'vutnishadmin', '0407', 'tubshok@gmail.com');

ALTER TABLE 'accounts' ADD PRIMARY KEY ('id');
ALTER TABLE 'accounts' MODIFY 'id' int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;

	CREATE TABLE content (
	  id int NOT NULL AUTO_INCREMENT,
	  title varchar(300) NOT NULL,
	  texts longtext NOT NULL,
	  image varchar(300) ,
	  username varchar(300) NOT NULL,
	  primary key (id)
	) 
  <-mysql end here.
  
  
  install nodejs->
         link:"https://nodejs.org/en/download/"
     terminal->
          npm i express;
          npm i express-session;
          npm i body-parser;
          npm i path;
          npm i dotenv;
          npm i ejs;
          npm i express-fileupload <-terminal end
   <- node js end
          



	
