# SlingAir Contract 

## Frontend Development

- Implement HTML/CSS for the app.
- Use JS to render the seats based on the data, as provided by the BE.
    - If a seat is marked as `isAvailable: false`, it shouldn't be selectable.
    - I have the the barebones of this setup already. Just need to pipe in the test-data and hope it doesn't break!

### Pages

Create 2 pages to allow users to book a flight.

### `/seat-select`

Where users select their seats from a ui and enter their info.

### `/confirmed`

Upon successful submission, the user is sent to this page.

### `/view-reservation`

_They've added another page! Obviously the deadline hasn't changed._

Where users can view their reservation. _They didn't even provide me with a proper design. They want me to do it!_ **This is definitely a stretch goal!**

### `/admin`

_There is now some talk of adding an admin page that would allow the chief asshat see all of the reservations for a selected flight._

**WTF?!** This is not what I signed up for. 

## Backend (Middleware) Development

I have also been tasked with developing the Node server that will connect with the FE to the database.

This middleware should have all the requisite endpoints accept requests from the FE. 

I am sorry that I can't provide much more than that. I am basically a Frontend developer and haven't written any Node since my bootcamp days!


## I Quit

If you're my replacement, please consider getting the hell out of Dodge ASAP. I get that you probably can't. I wouldn't be surprised if they locked you in before showing you all of the project details...

Before totally losing it, I had the time to create most of the FE pages, but there is no functionality yet. I didn't even have a chance to start on the Backend.

And this is where I would recommend you start.

 Get the server working. It should communicate with database server, but I am told that their backend dev just up and quit. They have someone else, but the endpoints not ready yet!

 What follows is what information that I have been given related to the backend (database).

 ## Backend / Database

 The url of the REST API that stores the data is located at `TBD`.

 List of endpoints that the BE/Database person was supposed to deliver. _As far as I know, they are not yet functional..._

I have been assured that someone is on this and that you _should_ have access to the database anytime now.

...
