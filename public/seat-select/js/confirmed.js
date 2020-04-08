const flightNum = document.getElementById("flight");
const seatNum = document.getElementById("seat");
const trvlrFn = document.getElementById("name");
const trvlrEmail = document.getElementById("email");
const transferedData = new URLSearchParams(window.location.search);

const data ={
    flight : transferedData.get('flight'),
    seat : transferedData.get('seat'),
    name : transferedData.get('name'),
    email : transferedData.get('email')
}

console.log(data)



console.log(transferedData)

const renderConfirmation = (req, res) =>{
    flightNum.innerHTML = data.flight;
    seatNum.innerHTML = data.seat;
    trvlrFn.innerHTML = data.name;
    trvlrEmail.innerHTML = data.email
}
