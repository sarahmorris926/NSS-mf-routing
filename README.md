# NSS-mf-routing & NSS-mf-listing
NSS Modern Frameworks - Exercise Three (Route Routing) and Four (Route Listing)


## Setup

Move into a directory where you'd like to clone down the code. Once you've moved into the correct directory, type the following command in the terminal:
```
git clone https://github.com/sarahmorris926/NSS-mf-routing.git
```
Once it's cloned down, start up a server and you're ready to view it on your local host.

## Routing Requirements

For this exercise, you're going to create a basic application, with a two views. Each view will provide information about a famous American highway. Each will have a title show the name of the highway, and an element in which the description of the highway will be displayed.

You will need:

1. An Angular application module. Inject `ngRoute` into your applcation.
1. A `config` section for your application where you set up two routes.
    1. Famous highway #1
    2. Famous highway #2
1. Two controllers defined in your application.
1. Two partials - one bound to one of the controllers.
1. Each controller will have two scope variables.
    1. `$scope.highwayName`
    1. `$scope.highwayDescription`
1. You provide the name and description for each highway that you find via research.

Start `http-server` and access both of the routes and verify that each highway's information displays correctly.

## Listing Requirements

In this exercise you will add a default view to your Routes of America application.

1. Add an additional route to your application that will load a listing view.
1. The listing view simply shows two hyperlinks that route the user to the two routes you built previously.
1. Add an `otherwise` configuration option to your routing.

Start `http-server` and access both of the existing routes and verify that they still work. Then verify that the base route works.
