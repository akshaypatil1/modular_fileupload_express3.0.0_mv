
Sample abstract:

	This sample code demonstrates a few important node features:

	- 	How to setup a RESTful API for Multiple file upload or single file upload using node.js express.
	- 	How to setup a RESTful API using node.js express.
	- 	How to serve up static HTML via HTTP from a subfolder as the default URL root folder in your project.
	- 	How to connect to MySQL database and communicate via queries with that database.
	- 	How to send results from a MySQL query in the JSON format.
	- 	How to consume the RESTful API JSON results using jQuery in the static pages.

To fiddle with this example, you will need:

	- 	A MySQL Server running with the ability to create a new DB and run a script to add content.
	- 	An understanding of basic SQL syntax (if you want to mess with the resultset).
	- 	Node.js up and running

	Note: You will use Apache to run phpMyAdmin for administration of your new MySQL database, but node.js will not use Apache to serve any pages. Once the example application is running, you should not need Apache running, but you will need MySQL up and running with your database.

Here are the steps to get the example up and running:

	1.  Start your Apache and MySQL servers (using XAMPP or MAMP) and load up phpMyAdmin.
	2.  Go to the databases tab and create a new database:
      		DB name: 	node_js_sample 
      		Type:		utf8_general_ci
	3.  With the database selected, go to the import tab and browse your computer to find the "node_js_sample.sql" file and hit "GO".
	4.  Go to the Query tab and enter "SELECT * FROM list" and hit "GO". You should see 2 rows if you are successful.
	5.  Go back to your MAMP/XAMPP administrative start page and record your MySQL username and password, hostname and server port.
	6.  Look at the URL of the administrative start page. Does it say something like "localhost:8080". Record the port number after the colon.
	7.  Edit the config.js file.
	8. 	Search for... mysql.createConnection
	9. 	Replacing the database connection information here with the hostname, port, user and password recorded in  step 5.
	10. Here we had set port as 3000 
	11. Change the port number here if it match the MySQL port number from step 5 or the apache port number from step 7 above.
      	(If it does match, give it a new number; any number in the thousands will do, typically.)
	12. Save those changes to the app.js file.
	13. Install node.js by visiting http://nodejs.org and pressing the "install" button.
	14. Open up a terminal window to the folder that contains the app.js file (this should either be an OSX/Linux shell 		terminal or a Windows GIT Bash).
		[here I'm expecting that you will install packeges before executting node app.js command]
	15. Load up a browser and enter the following URL... http://localhost:[the node_port number you gave it here!]
				in our case load up a browser and enter the following URL 'http://localhost:3000/api/list'
	16. You are now fiddling with the application.
	17. You can stop the node.js app.js app from running by pressing [ctrl]+[c] in the terminal window.

Tips on learning from the file:

	- 	I recommend you first read through the app.js file to learn how the static pages in the public folder get served up.
	-	I'm considering that if there is only one file to upload then it's profilepic and if there are multiple files then 		it's user's album files.
	-	This project have public, routes, views, app.js, config.js, node_js_sample.sql, package.json, readme.txt
	-	app.js is our main file where we define our API rout path and call functions from 'routes' folder
	-	config.js include all configurations requred to execute successfully this project
	-	We are requring config.js in app.js and all other configurations in config.js file only
	-	so that our code become more moduler that what I shared in https://github.com/akshaypatil1/fileupload-node-express-mysql-multer

