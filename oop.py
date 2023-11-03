# Class 1: Vehicle
class Vehicle:
    def __init__(self, make, model, year, color):
        self.make = make
        self.model = model
        self.year = year
        self.color = color

    def display_info(self):
        return f"This is a {self.year} {self.color} {self.make} {self.model}."

    def start_engine(self):
        return f"Starting the {self.make} {self.model}."

    def stop_engine(self):
        return f"Stopping the {self.make} {self.model}."

    def accelerate(self):
        return f"Accelerating the {self.make} {self.model}."


# Class 2: Smartwatch
class Smartwatch:
    def __init__(self, brand, model, os, battery_life):
        self.brand = brand
        self.model = model
        self.os = os
        self.battery_life = battery_life

    def get_info(self):
        return f"This is a {self.brand} {self.model} running on {self.os} with a battery life of {self.battery_life} hours."

    def check_heart_rate(self):
        return f"Checking heart rate on the {self.brand} {self.model}."

    def receive_notifications(self):
        return f"Receiving notifications on the {self.brand} {self.model}."

    def update_software(self):
        return f"Updating software on the {self.brand} {self.model}."


# Subclass AppleWatch
class AppleWatch(Smartwatch):
    def __init__(self, model, os, battery_life, cellular):
        super().__init__("Apple", model, os, battery_life)
        self.cellular = cellular

    def make_call(self):
        return f"Making a call on the {self.brand} {self.model}."


# Class 3: Recipe
class Recipe:
    def __init__(self, name, chef, cuisine, prep_time):
        self.name = name
        self.chef = chef
        self.cuisine = cuisine
        self.prep_time = prep_time

    def get_details(self):
        return f"Recipe: {self.name}\nChef: {self.chef}\nCuisine: {self.cuisine}\nPreparation Time: {self.prep_time} minutes."

    def cook(self):
        return f"Cooking the {self.name} recipe..."

    def share(self):
        return f"Sharing the {self.name} recipe by {self.chef}."

    def add_ingredients(self, ingredients):
        return f"Adding ingredients to the {self.name} recipe: {', '.join(ingredients)}."


# Class 4: Concert
class Concert:
    def __init__(self, artist, venue, date, time, ticket_price):
        self.artist = artist
        self.venue = venue
        self.date = date
        self.time = time
        self.ticket_price = ticket_price

    def get_event_info(self):
        return f"Concert: {self.artist}\nVenue: {self.venue}\nDate: {self.date}\nTime: {self.time}\nTicket Price: ${self.ticket_price}."

    def attend(self):
        return f"Attending the concert of {self.artist} at {self.venue}."

    def buy_ticket(self):
        return f"Purchasing a ticket for the {self.artist} concert on {self.date}."


# Objects of the classes
vehicle1 = Vehicle("Toyota", "Camry", 2023, "Silver")
smartwatch1 = Smartwatch("Fitbit", "Versa 4", "FitbitOS", 48)
apple_watch1 = AppleWatch("Series 7", "watchOS 8", 72, True)
recipe1 = Recipe("Spaghetti ", "Gordon Ramsay", "Italian", 30)
concert1 = Concert("Coldplay", "Stadium Arena", "2023-11-10", "19:00", 75)

print(vehicle1.display_info())
print(smartwatch1.get_info())
print(apple_watch1.make_call())
print(recipe1.get_details())
print(concert1.get_event_info())
