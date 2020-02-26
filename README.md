# node-mongo-d3
Interactive Data Visualization using node mongo and d3.js
Used Components in the project:
D3.js
Dc.js
Node.js
Crossfilter.js
Jquery
MongoDB

Steps to follow:

1. Install MongoDB
2. Insert the data into mongoDB
3. Install Nodejs and NPM
4. Navigate to the node-mongo-d3 directory using command prompt and run npm install, this will install the dependencies
5. Navigate to the node-mongo-d3 directory using command prompt and run npm start
   In your browser go to localhost:3000
   
Before we need to insert samplecsv.csv file into the mongodb so as to read the data.
   create DB name as test 
   collection name as products
Go to the folder where you installed mongodb and locate the bin folder. In my case the path is :

C:\Program Files\MongoDB\Server\3.0\bin>

Fire up your mongoDB by running mongod.exe. Leave the prompt running as it is and open another command prompt and navigate to the bin directory again. Enter this command
 
C:\Program Files\MongoDB\Server\3.0\bin>mongoimport -d test -c products --type csv --headerline --file C:\Users\mypc\Desktop\sampledata\sampledata.csv

or

you can go to the file location in command prompt and enter this command--> mongoimport -d test -c products --type csv --headerline --file 
   
   
![image_2020_02_25T15_42_18_665Z](https://user-images.githubusercontent.com/32735357/75322942-d3826480-5899-11ea-9fcb-21cbdcd5d075.png)

