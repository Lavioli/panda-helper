``Installing npm & package control in sublime text``

1. Install node and npm (http://nodejs.org/)
2. Install Package Control (https://sublime.wbond.net/installation)
3. Cmd + Shift + P 
4. Type "Install Package" and select "Package Control: Install Package"

``Install npm packages``
1. Cmd + Shift + P
2. Type "npm install" and select
3. insert npm install <package name> to install package
    -npm install
        -install saved packages 
    -npm install <pkg name> --save
        -install and save packages as dependencies
    -npm install <pkg name> --save-dev
        -install and save package as a development dependency
    -npm install <pkg name> --save-optional
        -install and save package as an optional dependency (overrides dependencies if any of they fail, such as rejecting a certain version of a package)

``Install mongoDB``
1. sudo apt-get install -y mongodb-org
2. mkdir mongo_data (inside workspace dir)
3. echo 'mongod --bind_ip=$IP --dbpath=/home/ubuntu/workspace/mongo_data --nojournal --rest "$@"' > run_mongod
4. chmod a+x run_mongod
    -./run_mongod from the console to run the database
5. npm init
6. npm install --save mongodb

``Install Mongoose``
1. npm install express mongoose body-parser --save

``Install Mocha & Chai``
1. npm install mocha chai chai-http --save-dev

``Install passport & bcrypt``
1. npm install --save express body-parser mongoose passport passport-http bcryptjs

``Install node.js with express module``
1. npm install --save express
2. echo $C9_HOSTNAME
    -checks for hostname link



``REACT CHEATSHEET``
http://tinyurl.com/reactcheatsheet

``REDUX CHEATSHEET``
http://redux.js.org/docs/basics/
http://tinyurl.com/reduxcheatsheet

``cURL Requests``
`GET`
curl http://localhost:8080/items
`POST`
curl -X POST -H "Content-Type: application/json" -d '{"name": "durian"}'
http://localhost:8080/items
`PUT`
curl X PUT -H "Content-Type": application/json -d '{"name": "durian", "id": 3}' http://localhost:8080/items/3
`DELETE`
curl -X DELETE http://localhost:8080/items/3

``HEROKU``
`Login`
$heroku login
Enter your Heroku credentials.
Email: frodo@example.com
Password:
Could not find an existing public key.
Would you like to generate one? [Yn]
Generating new SSH public key.
Uploading ssh public key /Users/frodo/.ssh/id_rsa.pub
`heroku create`
$ heroku create
Creating stark-fog-398... done, stack is cedar
http://stark-fog-398.herokuapp.com/ | git@heroku.com:stark-fog-398.git
Git remote heroku added
$ git push heroku master
`checks if dyno is running to serve the app`
$ heroku ps:scale web=1
Scaling web processes... done, now running 1
`open`
$ heroku open

