// Class 1: Vehicle
class Vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  displayInfo() {
    return `This is a ${this.year} ${this.color} ${this.make} ${this.model}.`;
  }

  start() {
    return `Starting the ${this.make} ${this.model}.`;
  }

  stop() {
    return `Stopping the ${this.make} ${this.model}.`;
  }

  accelerate() {
    return `Accelerating the ${this.make} ${this.model}.`;
  }
}

// Class 2: Smartwatch
class Smartwatch {
  constructor(brand, model, OS, batteryLife) {
    this.brand = brand;
    this.model = model;
    this.OS = OS;
    this.batteryLife = batteryLife;
  }

  getInfo() {
    return `This is a ${this.brand} ${this.model} running on ${this.OS} with a battery life of ${this.batteryLife} hours.`;
  }

  checkHeartRate() {
    return `Checking heart rate on the ${this.brand} ${this.model}.`;
  }

  receiveNotifications() {
    return `Receiving notifications on the ${this.brand} ${this.model}.`;
  }

  updateSoftware() {
    return `Updating software on the ${this.brand} ${this.model}.`;
  }
}

// Subclass AppleWatch
class AppleWatch extends Smartwatch {
  constructor(model, OS, batteryLife, cellular) {
    super("Apple", model, OS, batteryLife);
    this.cellular = cellular;
  }

  makeCall() {
    return `Making a call on the ${this.brand} ${this.model}.`;
  }
}

// Class 3: Recipe
class Recipe {
  constructor(name, chef, cuisine, prepTime) {
    this.name = name;
    this.chef = chef;
    this.cuisine = cuisine;
    this.prepTime = prepTime;
  }

  getDetails() {
    return `Recipe: ${this.name}\nChef: ${this.chef}\nCuisine: ${this.cuisine}\nPreparation Time: ${this.prepTime} minutes`;
  }

  cook() {
    return `Cooking the ${this.name} recipe...`;
  }

  share() {
    return `Sharing the ${this.name} recipe by ${this.chef}.`;
  }

  addIngredients(ingredients) {
    return `Adding ingredients to the ${this.name} recipe: ${ingredients.join(', ')}.`;
  }
}

// Class 4: Concert
class Concert {
  constructor(artist, venue, date, time, ticketPrice) {
    this.artist = artist;
    this.venue = venue;
    this.date = date;
    this.time = time;
    this.ticketPrice = ticketPrice;
  }

  getEventInfo() {
    return `Concert: ${this.artist}\nVenue: ${this.venue}\nDate: ${this.date}\nTime: ${this.time}\nTicket Price: $${this.ticketPrice}`;
  }

  attend() {
    return `Attending the concert of ${this.artist} at ${this.venue}.`;
  }

  buyTicket() {
    return `Purchasing a ticket for the ${this.artist} concert on ${this.date}.`;
  }
}

// Objects of the classes
const vehicle1 = new Vehicle("Toyota", "Camry", 2023, "Silver");
const smartwatch1 = new Smartwatch("Fitbit", "Versa 4", "FitbitOS", 48);
const appleWatch1 = new AppleWatch("Series 7", "watchOS 8", 72, true);
const recipe1 = new Recipe("Spaghetti ", "Gordon Ramsay", "Italian", 30);
const concert1 = new Concert("Coldplay", "Stadium Arena", "2023-11-10", "19:00", 75);

console.log(vehicle1.displayInfo());
console.log(smartwatch1.getInfo());
console.log(appleWatch1.makeCall());
console.log(recipe1.getDetails());
console.log(concert1.getEventInfo());
