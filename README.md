create a folder inside ANGULAR-APP:
    -to create parent files:
      write command in terminal: ng new second-angular-app

    -to create the web page: npm start

    -to refresh the browser: ng serve

    -to create a child component: ng g c componentname
    it will be created inside app folder.

    -to create a grand child component inside a child component:
     ng g c child component/grand-child component e.g 
     ng g c task/individual-task

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
You want to pass customized, configurable and re-usable values to the components by using @Input decorators and @Output decorators.
Both are defined in the child component.ts.

    -Child uses @Input decorator to receive data from its parent component.
        -How does this work?
        -@input works with property binding
        -if the parent component wants to pass data to the child comp, it binds the data to the property of the child comp.
        -the child comp receives the data and uses it accordingly.

        -app.component.html is passing 3 values to the child properties(id, avatar, name) using property binding in the child tag.
        How does the child receives these inputs?
        -in the child comp.ts you declare those properties with input decorator that you want to receive values from the parent component.
        What happens when the child.comp.ts uses these inputs?
        -it can use thsese input values in its html file, in our case, we used 'avatar' and 'name' inputs to display image and name respectively.
        Parent.html is re-using ChildComponent 4 times(for 4 users) with different input values without modifying child.html.

        
    -Child uses @Output decorator to send data to the parent component.
            How does this work?
            -@Output works with event emitter()
            -if the child component wants to communicate with the parent comp, it emits the event, which the parent can listen to 
            and respond accordingly.

        -use @output decorator to create eventEmitter in user.comp.ts, name it select
            -when the button(in user.comp.html)is clicked, the onSelectedUser() emits the event with the user's ID.
            -in parent.comp.html, onSelectEventHandler handles the event emitted by the child comp.ts
            -this event handler is defined (in parent comp.html) to log the selected user's ID.
            - in parent.comp.html bind select event with the event handler and pass ($event) in it. 
            -($event) contains the data emitted by the child component(user's ID).

Create another child component that outputs the name of the user whenever the button is clicked on the right side of the page.
    -name it task
    -copy the selector name in parent.html where it says "Tasks of the user"and replace it.
    -you want to receive names from parent comp, so declare input decorator on name in child.ts
    -bind it in task.html using {{}} and bind it in parent.html using []--> set its value to userName.
    -in the same file, update (select) event inside the app-user tag 
    -declare userName in parent.ts
    -everytime you click users button, you want to see the name of that user displayed on the screen. how will this happen?
        -when you click on a button, eventhandler function is called.
        -inside the function, userName is stored in a temporary variable (called n), so everytime a button is clicked, userName gets updated.

    how to make the code more dynamic and short?
    -take the help of id property to display the user name instead of name property.
     -nestle together these properties(name, id, avatar) in one output decorator in user component.ts
     -shorten the code in parent.html by introducing *for to reach out to every object in the DUMMY_USERS array.
     -within the parent.html, bind the name property to chineseUser.
     -define chineseUser in parent.ts.
        how?
        -declare userID
        -use event hadler function to update the user id when the button is clicked and use get function to retreive that updated value.
        -this get function is what you add in the parent html.

    Using if and else statement in parent.html:
        -if selectedUser is defined, display the name of the user when a button is clicked,
        else, display: 'select the user to see their tasks'
        -give them styles.

    Display a list of tasks under 'Tasks of user name:.....'
        -inside task.html, modify the code, 
        create a section, inside it create a header and a list
        inside the header, create heading and menu 
        inside the menu, create a button that adds tasks when you click it.
        -give it styles in its css

        -create a child component of task component, name it individual-task component.
        -add its selector inside the list inside the task.html. 
        -give it style in grandchild component.



            

    

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
