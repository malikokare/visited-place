// Business Logic

function Place(location, landmarks, season, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}

// Prototype method
Place.prototype.getDetails = function () {
  return (
    "Location: " + this.location + "\n" +
    "Landmarks: " + this.landmarks + "\n" +
    "Best Season: " + this.season + "\n" +
    "Notes: " + this.notes
  );
};
