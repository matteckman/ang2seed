# Seed App for Angular2

The goal for this app is to have a seed app for starting an Angular2 app, and to generate discussion about architectural elements in an enterprise-level Angular2 app.

# Installing (after cloning from Github)

`npm run serve`

# Architectural Elements To Discuss

* Move to AngularSeed as foundation for app (https://github.com/mgechev/angular-seed)

* Building the app
  * Uses SystemJS to handle requires
  * Uses Gulp (pipes) to handle larger builds

* Consuming API's and aggregating into a cohesive data (persistance) layer - from the server or from the client
  * GraphQL (Apollo) vs Falcor
  * https://auth0.com/blog/getting-started-with-falcor/
  * https://github.com/amalshehu/data-persistence
  * http://www.apollodata.com/
  * http://graphql.org/blog/rest-api-graphql-wrapper/

* Building one app so it works on multiple platforms (mobile, desktop)
  * Electron 
  * Ionic2

* Handling errors from api through to client and back to server
  * logging errors to a center repository: ELK (one possibility)

* Debugging
  * Chrome Debugger

* Scalability
  * proxy server
  * session servers
  * speed testing and optimizing

* A swap-in view framework model (i.e. switching from Bootstrap to something else)

* Testing
  * Unit Testing: Jasmine, Karma
  * End to End Testing: Protactor

* Authentication
  * Auth0 vs in-house

* MISC
  * Observables (instead of promises)
  * Style guide choices
  * Dependency management in plugins (Yarn)
  * Documentation
  * Configuration management across environments (env mgmt)