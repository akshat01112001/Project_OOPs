const container = document.querySelector(".container");
const slots = document.querySelectorAll(".row .slot:not(.sold)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const slotSelect = document.getElementById("slot");

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

//alert(date + ' ' + check_in_time + ' ' + check_out_time + ' ' + phone_no);