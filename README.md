``Installing npm & package control in sublime text``
1. Install node and npm (http://nodejs.org/)
2. Install Package Control (https://sublime.wbond.net/installation)
3. Cmd + Shift + P 
4. Type "Install Package" and select "Package Control: Install Package"


``Install npm packages as an administrator``
sudo chown your_username directory


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

``Install istanbul``
1. npm install istanbul --save
2. istanbul cover 
3. package.json:
```
    "scripts": {
        "start": "node index.js",
        "test": "mocha",
        "coverage": "istanbul cover _mocha test --recursive"
      },
```
4. npm run coverage


``Install mongoDB on CLOUD9``
1. sudo apt-get install -y mongodb-org
2. mkdir mongo_data (inside workspace dir)
3. mkdir ~/data (outside of workspace dir)
4. echo 'mongod --bind_ip=$IP --dbpath=/home/ubuntu/workspace/mongo_data --nojournal --rest "$@"' > run_mongod
5. chmod a+x run_mongod
    (./run_mongod from the console to run the database)
6. npm init
7. npm install --save mongodb

``Run mongo database from workspace:``
1. ./run_mongod 

``Run mongo shell:``
1. cd into mongo_data
2. $ mongo
3. Commands
    show dbs
    use nameofdatabase
    show collections

``Install mongoDB on macOSX with homebrew``
1. brew update
2. brew install mongodb
3. mkdir -p /data/db
4. sudo chown -R `id -un` /data/db
5. enter password
6. mongod
``Run mongo shell:``
1. cd into mongo_data
2. $ mongo
3. Commands
    show dbs
    use nameofdatabase
    show collections
    db.products.find().pretty()
    db.products.insert({"name": "insert info here"})
    db.products.remove({})  removes all items in collection
    quit()

``already installed homebrew MongoDB and create dbpath only``
in the workspace folder:
mongod --dbpath data/db


``Install Mongoose``
1. npm install mongoose --save
2. require:
    var Count = require('../models/guessCount');
    var mongoose = require('mongoose');


``Install Mocha(globally) & Chai``
1. npm install mocha -g chai chai-http --save-dev
2. if it doesnt work, you might have to do a sudo install:
    ` $sudo npm install mocha -g chai chai-http --save-dev`

``Install passport & bcrypt``
1. npm install --save express body-parser mongoose passport passport-http bcryptjs

``Install node.js with express module``
1. npm install --save express
2. echo $C9_HOSTNAME
    -checks for hostname link
3. Require in your server.js:
    var express = require('express');
    var app = express();

``Install nodemon``
runs node server automatically each time you save a file
1. npm install nodemon -g
run: $ nodemon


``Install concurrently`` 
allows concurrently run multiple proccesses in your build
1. 

#writing script to clean and make build, run server
    ``"clean": "rm -rf build"``
cleans/deletes build folder recursively and forcibly"``
    ``"clean": "rm -rf build"``
make a directory if it doesn't exist(-p), and copy the index.html into build folder
    "build:html": "mkdir -p build && cp index.html build",
    "build:css": "mkdir -p build && cp css/style.css build"
npm start will run clean, and then run build html, and css, and then run server
    ``"start": "npm run clean && npm run build:html && npm run build:css && npm run server"``

npm run server will concurrently run with the previous npm clean and build commands and then will run webpack server in watch mode (which has to use double quotes) along with nodemon server
    ``"server": "concurrently \"webpack -w\" \"nodemon server/server.js\""``


```
 "scripts": {
    "start": "npm run clean && npm run build:html && npm run build:css && npm run server",
    "server": "concurrently \"webpack -w\" \"nodemon server/server.js\"",
    "test": "mocha --compilers js:babel-register test/**/*.js*",
    "coverage": "istanbul cover _mocha test --recursive",
    "clean": "rm -rf build",
    "build:html": "mkdir -p build && cp index.html build",
    "build:css": "mkdir -p build && cp css/style.css build"
  },
```

``Install bodyparser for middleware``
1. npm install body-parser --save
2. require:
    var bodyParser = require('body-parser');

``Install webpack dev server``
    `updates server http://localhost:8080/ automatically without refreshing browser`
1. npm install webpack-dev-server --save-dev
    `-D is basically AKA --save-dev`
2. package.json create a custom script:
    `"start": "webpack-dev-server --inline --hot"`
    -inline adds the javascript code inside the --html page, and --hot reloads it
3. npm start (to run the server)

``Install react, babel, and webpack``
1. npm install --save-dev mocha chai react-addons-test-utils babel-register
2. npm install --save react react-dom
3. npm install --save-dev babel-preset-react
4. npm install --save-dev webpack
5. npm install --save-dev babel-core babel-preset-es2015 babel-loader
6. npm install --save react-router
6. touch webpack.config.js
```
var path = require('path');

    var webpack = require('webpack');

    var packageData = require('./package.json');

    var filename = [packageData.name, packageData.version, 'js'];

    module.exports = {
        entry: path.resolve(__dirname, packageData.main),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: filename.join('.'),
        },
        devtool: 'source-map',
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    loader: 'babel',
                    query: {
                        presets: ['es2015', 'react']
                    }
                }
            ]
        }
    };
```
7. inside package.json
```
    "scripts": {
        //helps us set up mocha and looks for file in folder called test
        "test": "mocha --compilers js:babel-register test/**/*.js*"
      },
      "babel": {
        "presets": ["es2015", "react"]
      }
```

``Basic install for react``
npm install --save react react-dom
npm install --save-dev babel-preset-react
npm install --save-dev webpack
npm install --save-dev babel-core babel-preset-es2015 babel-loader
npm install http-server --save -g
npm install

webpack.config.js:
```
var path = require('path');

var webpack = require('webpack');

var packageData = require('./package.json');

var filename = [packageData.name, packageData.version, 'js'];

module.exports = {
    entry: path.resolve(__dirname, packageData.main),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: filename.join('.'),
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
```

``Install Redux``
1. npm install --save redux

``Install Async Actions``
1. npm install --save redux-thunk
2. add this to store.js
```
var store = createStore(reducers.repositoryReducer, applyMiddleware(thunk));
module.exports  = store;
```

``Install Immunitability Helpers for React"
1. npm install --save react-addons-update


``Install polyfill for HTTP fetch API``
1. npm install --save isomorphic-fetch
2. action.js
```
require('isomorphic-fetch');
```

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

``insert file to .gitignore``
1. echo "node_modules/" >> .gitignore

#HEROKU
install heroku cli if you don't have it

`Login`
$heroku login
Enter your Heroku credentials.
Email: frodo@example.com
Password:
Could not find an existing public key.
Would you like to generate one? [Yn]
Generating new SSH public key.
Uploading ssh public key /Users/frodo/.ssh/id_rsa.pub

#for existing heroku apps (assuming you are already a collaborator)
$heroku login
Enter your Heroku credentials.
Email: frodo@example.com
Password:
$heroku git:remote -a NameOfHerokuAppHere

#for new heroku apps (creating app for the first time)
`heroku create`
$ heroku create typenamehere
Creating typenamehere... done, stack is cedar
http://stark-fog-398.herokuapp.com/ | git@heroku.com:stark-fog-398.git
Git remote heroku added

$ git push heroku master
`checks if dyno is running to serve the app`
$ heroku ps:scale web=1
Scaling web processes... done, now running 1
`open`
$ heroku open



#mLab
create new database using sandbox
click on the database to edit and you should see:
```
To connect using the mongo shell:
 
mongo ds159517.mlab.com:59517/whatsup -u <dbuser> -p <dbpassword>
To connect using a driver via the standard MongoDB URI (what's this?):

mongodb://<dbuser>:<dbpassword>@ds159517.mlab.com:59517/whatsup

```


`connect mLab database with heroku`
$heroku config
$heroku config:set DATABASE_URI=mongodb://<dbusername>:<dbpassword>@ds159517.mlab.com:59517/whatsup
$heroku restart


#GitHub
``Create new repo from bash using github api SSH method``
1. curl -u 'INSERT GITHUB USERNAME HERE' https://api.github.com/user/repos -d '{"name":"INSERT REPO NAME HERE","description":"INSERT OPTIONAL DESCRIPTION HERE"}'
    -Example
    curl -u 'Lavioli' https://api.github.com/user/repos -d '{"name":"panda-helper","description":"cheat sheet app made with content up to week 6 in thinkful"}'
should get a list of urls
2. search for "ssh_url" and copy it
    -Example: "ssh_url": "git@github.com:Lavioli/panda-helper.git"
3. git remote add origin git@github.com:Lavioli/panda-helper.git
4. git push -u origin master

``Create new repo from bash using github api HTTP clone method``
1. curl -u 'INSERT GITHUB USERNAME HERE' https://api.github.com/user/repos -d '{"name":"INSERT REPO NAME HERE","description":"INSERT OPTIONAL DESCRIPTION HERE"}'
    -Example
    curl -u 'Lavioli' https://api.github.com/user/repos -d '{"name":"panda-helper","description":"cheat sheet app made with content up to week 6 in thinkful"}'
    -Expect
    should get a list of urls
2. search for "clone_url" and copy it
3.  -Example: "clone_url": "https://github.com/Lavioli/panda-helper.git"
4. git init
5. git clone https://github.com/Lavioli/panda-helper.git


``Github: Fix SSH error ``
Error: `Permission denied (publickey). fatal: Could not read from remote repository.Please make sure you have the correct access rights
and the repository exists.`
1. ssh-keygen -t rsa -C "youremail@gmail.com"
2. Press Enter
3. Press Enter Again
4. cat ~/.ssh/id_rsa.pub
5. Copy the SSH key, should look something like:
    ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDXuqIO/6+w/ssQ2KCw8djw5fslkdfjaslkfjlksafj/elwmc0aqYuCm6kbxtwHL5mmulFCLj6gmQ40i5JoodOKglr7K93YxsdfasfDfFcRVz+yBOerJYux2NHhoygnfUCzOhYtHcysqpxbaBJR4etVQm/BdFABSxEKt youremail@gmail.com
6. go to https://github.com/settings/ssh
7. Click New SSH Key and paste in the SSH Key

``Github remove git file``
1. rm -rf .git

``move content from one folder to another``
1. mv folder1/* folder2
    -Example: `mv react-review/* ../react-counter`


``remove branch locally and remotely``
1. git branch -rd origin/nameofbranch

``remove branch locally``
1. git branch -D nameofbranch

``git log``
1. git log





#Step by step after installation for react-router email app

``webpack, react, http-server with react-route``
1. touch index.js index.html
2. npm init
3. npm install --save react react-dom
4. npm install --save-dev babel-preset-react
5. npm install --save-dev webpack
6. npm install --save-dev babel-core babel-preset-es2015 babel-loader
7. npm install http-server --save -g
8. npm install --save react-router
10. npm install concurrently -g 
    `allows us to run --watch with webpack at the same time`
11. package.json

```
"scripts": {
        "start": "npm run clean && npm run build:html && npm run server",
        "server": "concurrently "webpack -w\"",
        "clean": "rm -rf build",
        "build:html": "mkdir -p build && cp index.html build"
    }
```

10.to run: $npm start

11. inside- index.html 

```

<!DOCTYPE html>
<html>
    <head>
       <script type="text/javascript" src="https://code.jquery.com/jquery.min.js"></script>
    </head>
    <body>
        <div id='app'></div>
        <--! you have to src the javascript file without any directory in front because you are build it from the build folder and running it from there -->
        <script type="text/javascript" src="chat-example.0.0.0.js"></script>
    </body>
</html>

```

12. index.js
```
var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var Link= router.Link;
var IndexRoute= router.IndexRoute;

```


#install full-stack primer
1.npm run dev (default to 8080)

2.npm run dev

3.edit script: "test": "NODE_ENV=development CLIENT_PATH=build/dev/client mocha --compilers js:babel-core/register --recursive"

4. npm install chai chai-http --save-dev

binding power:
http://javascript.crockford.com/tdop/tdop.html

npm init

npm install --save-dev mocha chai react-addons-test-utils babel-register
//If you haven't already done the usual stuff:
npm install --save react react-dom
npm install --save-dev babel-preset-react
npm install --save-dev webpack
npm install --save-dev babel-core babel-preset-es2015 babel-loader

npm install --save redux
npm install --save react-redux
npm install --save redux-thunk
npm install --save isomorphic-fetch

npm install --save react-router

npm install -g http-server


npm install --save express
npm install --save body-parser


DEPLOY TO HEROKU
$heroku create appnamehere
$git remote -v
$heroku config:set NPM_CONFIG_PRODUCTION=false
    Instruct Heroku to install the development dependencies
$git push heroku master




``start server by http-server for frontend``
1. npm init
2. sudo npm install http-server -g
3. http-server
Server will be available in the given links



PROCESS.ENV
1. npm i dotenv -D
2. touch .env
3. open .env



