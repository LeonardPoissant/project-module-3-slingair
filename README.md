# Module 3 - Node - Mini project

<img src='public\seat-select\images\screenshots\header.png' style='width:100%' />

You just accepted a web developer position at Slingshot Airlines!

They were really impressed with the work you did at Concordia Bootcamps. After a conversation with the CEO at the job fair, they hired you on the spot! They have project that they need to ship asap and are confident that you can deliver.

They have a new seat-booking app that is set to be released next week. You were told that _most_ of the work is already done. And that all that remains is just to connect the different pieces to get it working. Because you worked on similar functionality during your bootcamp, you're confident that you can pull it off.

You have been provided with a GitHub repo and little else.

You ask if it is possible to speak to the dev that worked on the project thus far. Nope. Not possible. He left without notice and on bad terms.

Looks like you're on your own...

---

## The App

### Screenshots

<img src='public\seat-select\images\screenshots\seat-select.png' style='float:left;width:48%;margin-right:4%;' />
<img src='public\seat-select\images\screenshots\confirmed.png' style='float:left;width:48%' />

### Functionality

- When a user navigates to `/seat-select` he/she is presented with an input to enter the flight number.
- With the flight number, make a request to the server for the seating availability on that flight.
- When a response with seating is received, display the seating input as well as the form requesting user's information.
- User selects a seat, enters information and clicks 'Confirm'.
- Contact the server with the data, and wait for a success response to redirect to the `/confirmed.html` page.
- The confirmed page should display a confirmation message to the user with the info that they entered on the previous screen.

## Project Setup

```
yarn install
```

This will start the server and make the static pages accessible via their endpoint.

## Developer Notes

There is a folder called `notes` that contains possible hints on what to do next...