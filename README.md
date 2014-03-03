#Developers Hangout: JavaScript Events
![Hangout](space.jpg)

###Example app with event-driven architecture
[App folder](https://github.com/msemenistyi/event-driven-js-webinar/blob/master/example-app)  
Given code is written with help of basic classes from backbone.js framework.
There are 2 main entities in the app: Boss and Employee. Boss has EmployeeCollection
as a property stored. He has limited budget and he distributes it between his 
Employees.

Each time Employee has worked 50 times, he asks Boss if his salary may be increased.
Boss checks if his budget is bigger than the salary Employee asks for and makes a
decision.

If Employee's salary reaches 800, he gets happy.

*Note: the code in app folder is not a working app but rather set of code snippets 
showing certain concept. The structural code is placed 
[here](https://github.com/msemenistyi/event-driven-js-webinar/blob/master/app-loader)* 

###Custom mediator object
[Source](https://github.com/msemenistyi/event-driven-js-webinar/blob/master/custom-mediator.js)  
A very simple mediator object implementation. Contains commentaries describing basics.  
Lacks events unbinding, callback execution priorities, context passing, once subscription.

###Modules worth looking at

####Capo
- [Capo npm module](https://github.com/msemenistyi/capo)
- [Grunt-capo task](https://github.com/msemenistyi/grunt-capo)
- [Sublime 3 capo plugin](https://github.com/confa/capo)

####Mediator / pubsub implementations
- [Mediator.js](https://github.com/ajacksified/Mediator.js)
- [Backbone.Events](https://github.com/jashkenas/backbone/blob/master/backbone.js#L68)

###Recommended reading list
- [Essential JS Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript) by Addy Osmani