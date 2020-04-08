const { flights } = require("./test-data/flightSeating");

const { reservations } = require("./test-data/reservations");

const handleFlights = (req, res) => {
  let flightNum = Object.keys(flights);
  console.log(flightNum);
  res.send(flightNum);
};

//this is going to send back the list of available flights in the drop down menu

const handleSeats = (req, res) => {
  let flightDesired = req.params.flightNumber;
  const flightData = flights[flightDesired];
  console.log(flightData);
  res.send(flightData);
};

const handleConfirmSeat = (req, res) => {
  let travelerInfo = req.body;
  console.log(travelerInfo);
  reservations.forEach(traveler => {
    if (traveler.email !== travelerInfo.email) {
      reservations.push(travelerInfo);
      console.log("******************", reservations);
    }
  });
  res.send({ status: "Login or Sign-Up", error: "550" });
};

const handleFlightConfirm = (req, res) => {
  const getUserInfo = req.params;

  //let lastTrvlr =  reservations[reservations.length - 1];
  //console.log(lastTrvlr)
  //console.log(lastTrvlr)
  //(reservations) => {
  //return reservations.slice(Math.max(reservations.length - n, 0));
  //};
  res.send(getUserInfo);
};

const handleViewConfirmation = (req, res) => {
  let validationInput = req.params.email;
  console.log("**************", validationInput);
  let currentTraveler = {};
  reservations.forEach(traveler => {
    if (traveler.email === validationInput) {
      currentTraveler = traveler;
      console.log("****************", currentTraveler);
      return Object.values(currentTraveler);
    }
  });
  res.json({
    id: currentTraveler.id,
    flight: currentTraveler.flight,
    seat: currentTraveler.seat,
    givenName: currentTraveler.givenName,
    surname: currentTraveler.surname,
    email: currentTraveler.email
  });

  //res.send(validationInput)
};

module.exports = {
  handleSeats,
  handleConfirmSeat,
  handleFlightConfirm,
  handleFlights,
  handleViewConfirmation
};
