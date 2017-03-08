# ClandesDine

Organizing private/pop-up dinner events is a pain in the ass. You probably have the location locked down, a team of capable chefs, and all the equipment you need. Organizing your hip guests who probably don't use Facebook anymore is significantly harder.

### Project Status

This project is currently in development. Users can login via Google OAuth, view upcoming events, add events, delete events, submit a contact form, and peruse the about page/FAQs page/photo grid on the media page. There are numerous features I would still like to implement, all of which can be found in the issues section.

### Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Run Test Suite:

`npm test`

To Start Server:

`npm start`

To Visit App:

localhost:8080

### Reflection

This was a two-week-long project built during the Mr. Toad's Wild Ride that was the last two weeks of module 3 at Turing. To be fair, everyone loves Mr. Toad's Wild Ride, but it proved to be quite a challenge to get this far in the timeframe while juggling an incredibly long list of the other deliverables/assessments/evaluations/portfolio work. My project goals of using numerous technologies I was unfamiliar with were a bit lofty, and resulted in some rather sloppy, hard-to-test code. I learned a ton though, and was not upset that I didn't make it to any of my reach goals.

##### The reach goal was an events management portal for private dining events with the following features:

* Event-specific invite code input on landing page which would lead to...
* Google OAuth login leading to...
* The event page for that specific event with event details and RSVP form (as well as access to About, FAQs, Media, and Contact) unless you were listed as an admin, in which case you would also be presented with...
	* The ability to add/edit/delete events
	* All events listed on the site
	* The ability to upload media to the media page

I kicked the project off w/ a weekend building from scratch w/o a boilerplate using the following technologies:

##### Coding it:

* React (Redux + Router 3)
* Firebase (don't ask)
* React-redux-firebase for managing store between Redux and Firebase
* Redux Thunk
* MaterialUI b/c Google is so hot right now
* ES7 stage 0 via Babel for wrapping FB components
* Webpack

##### Making sure it works:

* Mocha Chai
* Enzyme
* Jest
* Redux-mock-store
* ESlint (Air BnB + custom exceptions)
* Webpack dashboard
* Redux-devtools
* Redux-logger

Not using a boilerplate when implementing so much technology I was unfamiliar with was a challenge, but now my package/webpack/node/babel files aren't just a bunch of black magic I sometimes tinker with. I had never used any React middleware, and creating a store connecting Firebase with React using react-redux-firebase while still applying all the middleware took some serious deep-doc-diving. There's still some black going on w/ the r-r-f package for me, but it works :)

Next I got to work on setting up the admin side of things. Buttons! Input fields! Put their values in boxes! Delete the boxes! CRUD stuff! I definitely handled this in a much different fashion than I normally would, and am still not pleased w/ how "smart" most of my components are. Keeping redux and firebase in sync was a bit of a nightmare, and I'm still regretting following *someone's* advice that I should use both in my project to focus on front end tech. I would've loved to have built my own backend in node/express, but Firebase (at the time) seemed like a much simpler option so I could dive deeper into some new front end tech. Luckily module 4 is all about backend tech, so in future iterations of this project I could scrap Firebase.

The next hurdle came when setting up authentication. Google OAuth wasn't too difficult, although getting components to conditionally mount based on whether a user was logged in at all took awhile. The hardest part was figuring out how to implement the invite code. This is one feature I'm still working on. Conditionally rendering components based on whether the user is an admin or not will be a project for whatever spare time I have between now and the end of Turing.

Testing was the final hurdle since TDD would've been essentially impossible for me on a project like this. I tried my best to create a detailed gameplan, but no amount of prep would allow me to implement TDD when using this much unfamiliar technology. Note to self: don't use Firebase and Redux together if you want to test anything, or figure out how the hell to pull everything apart into more compartmentalized pieces w/ basic functions. Almost every component in this app is a firebase-wrapped class component, and I still have yet to figure out how to pull everything I can out into stateless functional components as I would usually. I did end up getting a small handful of tests passing, but that's also a work in progress. Finding examples of people who wrote tests for projects using similar build setups was impossible. I think there's a reason for that :)

Overall I'm pleased w/ the progress I made in the little time I had to make it happen. There's still plenty of work to be done here, but that will have to be saved for another time. This was a fun experiment in using a bunch of foreign technology, and somehow creating a functional app despite the code being wonky-as-hell and absurdly difficult to test. Sometimes you just want to get weird, and I took advantage of that when I was presented w/ creating my own project for school :)
