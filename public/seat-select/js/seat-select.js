const flightInput = document.getElementById("flight");
const seatsDiv = document.getElementById("seats-section");
const confirmButton = document.getElementById("confirm-button");
const flightNumber = document.getElementById("flight");
const travelerFn = document.getElementById("givenName");
const travelerLn = document.getElementById("surname");
const travelerEmail = document.getElementById("email");
const seatNumber = document.getElementById("seat-number");
const errorMsg = document.getElementById("error");
const listOfFlights = document.getElementById("flight");

//const errorMessages = {
// "quack-quack": "Out of luck, we don't have a Sign-Up or Log-In page ",
//};

let selection = "";

const renderSeats = data => {
  console.log(data);
  document.querySelector(".form-container").style.display = "block";

  const alpha = ["A", "B", "C", "D", "E", "F"];
  for (let r = 1; r < 11; r++) {
    const row = document.createElement("ol");
    row.classList.add("row");
    row.classList.add("fuselage");
    seatsDiv.appendChild(row);
    for (let s = 1; s < 7; s++) {
      const seatNumber = `${r}${alpha[s - 1]}`;
      const seat = document.createElement("li");
      let findSeat = data.find(seat => seat.id === seatNumber);
      console.log(findSeat);
      const seatOccupied = `<li><label class="seat"><span id="${seatNumber}" class="occupied">${seatNumber}</span></label></li>`;
      const seatAvailable = `<li><label class="seat"><input type="radio" name="seat" value="${seatNumber}" /><span id="${seatNumber}" class="avail">${seatNumber}</span></label></li>`;

      if (findSeat.isAvailable === false) {
        seat.innerHTML = seatOccupied;
      } else {
        seat.innerHTML = seatAvailable;
      }
      row.appendChild(seat);
    }
  }

  let seatMap = document.forms["seats"].elements["seat"];
  seatMap.forEach(seat => {
    seat.onclick = () => {
      selection = seat.value;
      seatMap.forEach(x => {
        if (x.value !== seat.value) {
          document.getElementById(x.value).classList.remove("selected");
        }
      });
      document.getElementById(seat.value).classList.add("selected");
      document.getElementById("seat-number").innerText = `(${selection})`;
      confirmButton.disabled = false;
    };
  });
};

const renderFlightNum = data => {
  console.log(data)

  data.forEach(flight => {
    let showFlightNum = document.createElement("option");
    listOfFlights.appendChild(showFlightNum);
    showFlightNum.innerHTML = flight;
  })
}


const getFlightIds = () => {
  fetch("/air-sling-shot/flights", )
    .then(res => res.json())
    .then(data => renderFlightNum(data));
};

const toggleFormContent = event => {
  event.preventDefault();
  let flightNumber = event.target.value;
  console.log(flightNumber)
  //const flightNumber = flightNumber.value;
  //console.log("toggleFormContent: ", flightNumber);
  //let validate = "SA";
  //if (flightNumber.indexOf(validate) === 0 ){
  //  console.log('*******************');
  // console.log(flightNumber);
  fetch(`/air-sling-shot/flights/${flightNumber}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => renderSeats(data));
  //}
  //else{
  //  console.log('(Please enter a valid flight number ')
  //};
};

const confirmSeat = event => {
  event.preventDefault();

  let data = {
    //id: '88a33c23-3332-4ef2-bd71-be7a6430485f',
    flight: flightNumber.value,
    seat: selection,
    givenName: travelerFn.value,
    surname: travelerLn.value,
    email: travelerEmail.value
  };
  console.log(seatNumber);
  console.log(data);

  fetch("/air-sling-shot/confirmSeat", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => {
      window.location.href = `/seat-select/confirmed.html?flight=${flightNumber.value}&seat=${selection}&name=${travelerFn.value}%20${travelerLn.value}&email=${travelerEmail.value}`;
      //const {success, error} = data
      //if(success === 'success'){
      // }
      // else if(error){
      // }
    });
};
listOfFlights.addEventListener("change", toggleFormContent);
//flightInput.addEventListener("blur", toggleFormContent);
