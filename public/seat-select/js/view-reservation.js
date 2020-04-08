const emailInput = document.getElementById("email");

const viewReservation = event => {
  event.preventDefault();
  console.log(event.target);
  let email = event.target.email.value;
  console.log(email);
  fetch(`/air-sling-shot/view-reservation/${email}`)
    .then(res => {
      console.log(res);
      return res.json();
    })

    .then(data => {
      console.log("DATA:", data);

      window.location.href = `/seat-select/confirmed.html?flight=${data.flight}&seat=${data.seat}&name=${data.givenName}%20${data.surname}&email=${data.email}`;
      //window.location.href = `/seat-select/confirmed.html?flight=${flightNumber.value}&seat=${selection}&name=${travelerFn.value}%20${travelerLn.value}&email=${travelerEmail.value}`;
    });
};
