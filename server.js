"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const {
  handleSeats,
  handleConfirmSeat,
  handleFlightConfirm,
  handleFlights,
  handleViewConfirmation
} = require("./handlers");

const PORT = process.env.PORT || 8000;

express()
  .use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("dev"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints
  .get("/air-sling-shot/flights", handleFlights)
  .get("/air-sling-shot/flights/:flightNumber", handleSeats)
  .get("/air-sling-shot/confirmPage", handleFlightConfirm)
  .get("/air-sling-shot/view-reservation/:email", handleViewConfirmation)
  .post("/air-sling-shot/confirmSeat", handleConfirmSeat)

  .use((req, res) => res.send("Not Found"))
  .listen(PORT, () => console.log(`Listening on port ${PORT}`));
