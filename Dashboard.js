var container = document.querySelector(".container");
var slots = document.querySelectorAll(".row .slot:not(.sold)");
var count = document.getElementById("count");
var total = document.getElementById("total");
var slotSelect = document.getElementById("slot");

populateUI();

let ticketPrice = +slotSelect.value;

// Save selected slot index and price
function setSlotData(slotIndex, slotPrice) {
  localStorage.setItem("selectedSlotIndex", slotIndex);
  localStorage.setItem("selectedSlotPrice", slotPrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSlots = document.querySelectorAll(".row .slot.selected");

  const slotsIndex = [...selectedSlots].map((slot) => [...slots].indexOf(slot));

  localStorage.setItem("selectedslots", JSON.stringify(slotsIndex));

  const selectedSlotsCount = selectedSlots.length;

  count.innerText = selectedSlotsCount;
  total.innerText = selectedSlotsCount * ticketPrice;

  setSlotData(slotSelect.selectedIndex, slotSelect.value);
}


// Get data from localstorage and populate UI
function populateUI() {
  const selectedSlots = JSON.parse(localStorage.getItem("selectedSlots"));

  if (selectedSlots !== null && selectedSlots.length > 0) {
    slots.forEach((slot, index) => {
      if (selectedSlots.indexOf(index) > -1) {
        slot.classList.add("selected");
      }
    });
  }

  const selectedSlotIndex = localStorage.getItem("selectedSlotIndex");

  if (selectedSlotIndex !== null) {
    slotSelect.selectedIndex = selectedSlotIndex;
  }
}

// Slot select event
slotSelect.addEventListener("change", e => {
  ticketPrice = +e.target.value;
  setSlotData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Slot click event
container.addEventListener("click", e => {
  if (
    e.target.classList.contains("slot") &&
    !e.target.classList.contains("sold")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});

// Initial count and total set
updateSelectedCount();

function connection() {
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Project2OOPs!",
        database: "PBSC_Parking_DB"
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("connected");
    });

    var slot = document.getElementById("slot").innerText;
    var date = document.getElementById("date").innerText;
    var check_in_time = document.getElementById("check_in_time").innerText;
    var check_out_time = document.getElementById("check_out_time").innerText;
    var phone_no = document.getElementById("phone_no").innerText;
    var total = document.getElementById("total").innerText;

    if (total == 0) {
        alert("Select at least one slot");
    }

    alert(slot + "', '" + date + "','" + check_in_time + "','" + check_out_time + "','" + phone_no + "','" + total);

    var sql = "INSERT INTO accounts (slot, date, chech_in_time, check_out_time, phone_no, total) VALUES ('" + slot + "', '" + date + "','" + check_in_time + "','" + check_out_time + "','" + phone_no + "','" + total + "')";
    con.query(sql, function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result.affectedRows + " record(s) updated");
    });

    con.end();
}
