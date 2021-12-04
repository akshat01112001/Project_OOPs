var container = document.querySelector(".container");
var slots = document.querySelectorAll(".row .slot:not(.sold)");
var count = document.getElementById("count");
var total = document.getElementById("total");
var slotSelect = document.getElementById("slot");
var check_in_time = document.getElementById("check_in_time");
var check_out_time = document.getElementById("check_out_time");

populateUI();

let ticketPrice = 25;

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

// Time difference
function diff(start, end) {
  start = start.split(":");
  end = end.split(":");
  var startDate = new Date(0, 0, 0, start[0], start[1], 0);
  var endDate = new Date(0, 0, 0, end[0], end[1], 0);
  var diff = endDate.getTime() - startDate.getTime();
  var hours = Math.floor(diff / 1000 / 60 / 60);
  diff -= hours * (1000 * 60 * 60);
  var minutes = Math.floor(diff / 1000 / 60);
  diff -= minutes * (1000 * 60);
  var seconds = Math.floor(diff / 1000);
  var sec = hours * 3600 + minutes * 60 + seconds;
  // If using time pickers with 24 hours format, add the below line get exact hours
  if (hours < 0)
      hours += + 24;

  return sec;
}

// Initial count and total set
if (diff(check_in_time, check_out_time) < 6 * 3600){
  alert(diff(check_in_time, check_out_time));
  updateSelectedCount();
}
else
  alert("You can book a slot for no more than six hours.");
