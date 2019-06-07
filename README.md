# Bar Finder

#### _Node.js, 06.06.2019_

#### By _Marc Davies & Brian Hensley_

## Description

* _This program allows users to display bars by searching by city and/or state._
* _This program makes an API call to https://www.openbrewerydb.org/ to return bars._
* _See specs below for more detail._

## Specs
| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| If user enters Portland as city and Oregon as state, the program returns a list of bars in Portland, Oregon | City: "Portland" / State: "Oregon" | ![ss1](https://i.imgur.com/o4oMu5z.jpg) |
| If user enters Portland as city and nothing as state, the program returns a list of bars in all cities named Portland | City: "Portland" / State: "" | ![ss2](https://i.imgur.com/x56YeGo.jpg) |
| If user enters nothing as city and Oregon as state, the program returns a list of bars in all of Oregon | City: "" / State: "Oregon" | ![ss3](https://i.imgur.com/ZuTWfMx.jpg) |
| If user enters a city or state that doesn't exist, the program returns an error message | City: "Portlad" / State: "Oregon" | ![ss4](https://i.imgur.com/3CwmHt1.jpg) |


## Installation and Setup
* If you don't have it installed, download and install Node.js 12.3.1
* `$ git clone https://github.com/MarcLignarius/BarFinder` This will clone the repository to your local machine.
* `$ npm install` This will allow you to have access to the CLI (command line interface) for webpack.
* `$ npm run build`
This will automatically build the bundle once. The entry file is `./src/script/index.js`, with production ready code (minified).
* `$ npm run start`
This will watch the file changes in `./src` and automatically build the bundle with dev build (not minified). This is a continuous monitoring which can be stopped with the key combination `Ctrl + C` within the terminal.

## Known Bugs
There are no known bugs as of last update.

## Support and contact details
_Please contact us at marcdaviesriot@gmail.com / brnhensley@gmail.com if you run into any issues or have questions, ideas or feedback._

## Technologies Used
This application was built in Atom using JavaScript, Node.js 12.3.1, API calls, jQuery 3.4.1, Bootstrap v4.3.1, custom css file. For unit testing, Jasmine framework and Karma task runner are both used.

### License

*This software is licensed under MIT license.*

Copyright (c) 2019 **_Marc Davies & Brian Hensley_**
