# `BitSight-test` — BitSight coding test

This is a coding test for BitSight [AngularJS][angularjs] 

The application uses [angular-seed] as a building base.
It was build under the two hours time frame.

## Hot Repo

The button with id #hot_repo will consume the github API and update a table-like div with the 5 repos with
most stars created in the last month

## Prolific Users

The button with id #prolific_users will consume the github API and update a table-like div with the 5 users with
the most followers who joined in the last year

The number of followers for the users will be automatically updated every 2 minutes.

### Prerequisites

You need git to clone the `bitsight-test` repository. You can get git from [here][git].

We also use a number of Node.js tools to initialize and test. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `bitsight-test`

Clone the `bitsight-test` repository using git:

```
git clone https://github.com/alexgarcia9425/bitsight-test.git
cd bitsight-test
```

### Install Dependencies

[angular-seed] has preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

### Run the Application

[angular-seed] has preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].


## Directory Layout

All github related dependencies can be find in the github folder, including the components used to build the
table and rows.

The application logic is in the home controller in home/home.js


## Serving the Application Files

While Angular is client-side-only technology and it is possible to create Angular web apps that
do not require a backend server at all, we recommend serving the project files using a local
web server during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, XHR,
etc to function properly when an HTML page is opened via the `file://` scheme instead of `http://`.


## Contact

For more information on bitsight-test please contact Alex Garcia at: alexgarcia9425@gmail.com

[angular-seed]: https://github.com/angular/angular-seed
[angularjs]: https://angularjs.org/
[bower]: http://bower.io/
[git]: https://git-scm.com/
[http-server]: https://github.com/indexzero/http-server
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[karma]: https://karma-runner.github.io/
[local-app-url]: http://localhost:8000/index.html
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[protractor]: http://www.protractortest.org/
[selenium]: http://docs.seleniumhq.org/
[travis]: https://travis-ci.org/
[travis-docs]: https://docs.travis-ci.com/user/getting-started
