// BUSINESS LOGIC
function Place(location, landmarks, season, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}

Place.prototype.getDetails = function () {
  return `
    <strong>Location:</strong> ${this.location}<br>
    <strong>Landmarks:</strong> ${this.landmarks}<br>
    <strong>Best Time:</strong> ${this.season}<br>
    <strong>Notes:</strong> ${this.notes}
  `;
};

// UI LOGIC
let places = [];

document.getElementById("place-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const location = document.getElementById("location").value;
  const landmarks = document.getElementById("landmarks").value;
  const season = document.getElementById("season").value;
  const notes = document.getElementById("notes").value;

  const newPlace = new Place(location, landmarks, season, notes);
  places.push(newPlace);

  displayPlaces();
  this.reset();
});

function displayPlaces() {
  const placeList = document.getElementById("place-list");
  placeList.innerHTML = "";

  places.forEach(function (place, index) {
    const li = document.createElement("li");
    li.textContent = place.location;

    li.addEventListener("click", function () {
      document.getElementById("place-details").innerHTML =
        place.getDetails();
    });

    placeList.appendChild(li);
  });
}
