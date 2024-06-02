create a folder inside ANGULAR-APP:
    -to create parent files:
      write command in terminal: ng new second-angular-app

    -to create the web page: npm start

    -to refresh the browser: ng serve

Break the project into small components

how to navigate parent and child components
    - file that contains 'app-root' as selector is THE PARENT COMPONENT
    - all other components: child components

create a parent component: ❌ already exists
create a child component: ✅
    -call it header.component.ts 
    -name the selector tag 'app-header' and store it in the html file of the parent comp(in this case-its app.comp.html)
    -follow template url to go to the html file, create it first(header.component.html)
            -whatever you write in this file (write EasyTask) should appear in the browser BUTT 
            -gives an error (If 'app-header' is an angular comp, then verify that it is......)
            -to appear in the browser-import this component in the parent component (in this case-in app.comp.ts)
             
                 

    navigate app-root:
        -start from main.ts, bootstrap calls only AppComponent
        -follow its import path: app.comp.ts 
        -look at the selector name('app-root')
        -which makes app.comp.ts, THE PARENT COMP.
        -follow its template url, you will see the selector tag of child component stored in it

upload an image(task-managem-logo) in the assets 
add it in the header.comp.html

add links in index.html that imports google fonts(all include: href=....fonts.g)


add styles to the header component:
    -create header.component.css and define its styleurl in header.comp.ts
    -add styles

add global styles in style.css

create a child component called user that will contain a list of users.
    -in terminal write: ng g c user
        generates user component in src/app/user with selector called 'app-user'.
    -write the code for a single user(call it name) in its html file.
    -give it styling.
    -to render it on browser: 
        2 steps
        -import it in the parent comp(app.component.ts)
        -follow parent comp html path and store this child selector in the form of a list. Then style these tags in parent comp.css.

    -upload dummy-users.ts(has a bunch of dummy users with names and image identifier) in app folder.
    -upload users folder(contains images of dummy users) in assets folder.

So far, it was all static coding. DYNAMIC coding begins NOW:
You want users name appear on the browser randomly everytime you refresh.
    -create a property in the export class in user.comp.ts to draw a random user from dummy-users.ts. (this property becomes available in user.comp.html: CORE FEATURE of angular)
    -import the array from dummy-users.ts first
    
    -output this dynamic text to the browser
        -in user.comp.html, replace NAME with the property created above using string intrapolation.
        -you can access name, id or avatar using
            property.name
            property.id or 
            property.avatar
        -everytime you refresh browser, you'll see a different name

add an image with its respective name, everytime you refresh browser, you see a different person with his image.
    -in user.comp.html, bind the image with its name using property binder (CORE FEATURE of angular).
    -better practice is to create get() function in child.comp.ts and move the above code to get(). 
    -give it styling in both child and parent comp.

bind an event listener (click) to the buttonin .html and define it in .ts
    -check if its working by opening browser console in developer tools.

change the user display everytime the button is clicked
    -also called changing data of UI or state of UI.
     -in .ts file, modify onclick func.

add more users to the list in parent.html.
-In the browser, you will see the same user a bunch of times, unless you click on them to change it.

You don't want to change users randomly either by clicking or by refreshing. Instead, You want multiple different users in the list format.  
You want child components to be used as elements(tags) to make them configurable so that they are re-usable. Re-use the same component but with different data (another CORE FEATURE of angular).
    -comment out all the code that does the first part.
    -so that we can set attributes and properties on the child element in the parent.html.
        -start with adding the avatar property in the child element tag.
            -decorate avatar with @Input property child.ts. It makes avatar accesseble to the parent.html. And it makes data in the child element customizable and re-usable.  
            -same goes for the name property.
            -make users file accessible to parent.html by importing and defining it in parent.comp.ts 
            -in parent.html, provide values for the avatar and name for each user.
            -define imagePath in child.ts
        -modify user.html to see your code getting rendered on browser.
            -replace selectedUser with name.
            

    

# SecondAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
