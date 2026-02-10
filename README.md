# Places You've Been

## Description
A JavaScript application that keeps track of places a user has visited using objects, constructors, and prototypes.

---

## Tests (Business Logic)

### Describe: Place()

Test: "It should create a Place object with location, landmarks, season, and notes"

Code:
const place = new Place("Nairobi", "National Park", "Dry", "Beautiful city");

Expected Output:
place.location === "Nairobi"
place.landmarks === "National Park"
place.season === "Dry"
place.notes === "Beautiful city"

---

### Describe: Place.prototype.getDetails()

Test: "It should return a string containing all place details"

Code:
place.getDetails();

Expected Output:
"Location: Nairobi
 Landmarks: National Park
 Best Season: Dry
 Notes: Beautiful city"
# visited-place
