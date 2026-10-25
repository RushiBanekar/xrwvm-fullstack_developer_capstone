from .models import CarMake, CarModel


def initiate():
    car_make_data = [
        {"name": "NissanMotor", "description": "Great cars. Japan based"},
        {"name": "Toyota", "description": "Reliable cars. Japan based"},
        {"name": "Ford", "description": "American manufacturer, lots of models"},
        {"name": "BMW", "description": "Luxury German cars"},
        {"name": "Chevrolet", "description": "American popular cars, lots of models"},
    ]

    car_make_instances = []
    for data in car_make_data:
        car_make = CarMake.objects.create(
            name=data["name"], description=data["description"])
        car_make_instances.append(car_make)

    car_model_data = [
        {"name": "Pathfinder", "type": "SUV", "year": 2023, "car_make": car_make_instances[0]},
        {"name": "Qashqai", "type": "SUV", "year": 2023, "car_make": car_make_instances[0]},
        {"name": "XTRAIL", "type": "SUV", "year": 2023, "car_make": car_make_instances[0]},
        {"name": "Corolla", "type": "SEDAN", "year": 2023, "car_make": car_make_instances[1]},
        {"name": "Camry", "type": "SEDAN", "year": 2023, "car_make": car_make_instances[1]},
        {"name": "Mustang", "type": "COUPE", "year": 2023, "car_make": car_make_instances[2]},
        {"name": "Explorer", "type": "SUV", "year": 2022, "car_make": car_make_instances[2]},
        {"name": "X5", "type": "SUV", "year": 2023, "car_make": car_make_instances[3]},
        {"name": "3 Series", "type": "SEDAN", "year": 2022, "car_make": car_make_instances[3]},
        {"name": "Malibu", "type": "SEDAN", "year": 2023, "car_make": car_make_instances[4]},
    ]

    for data in car_model_data:
        CarModel.objects.create(
            name=data["name"], type=data["type"], year=data["year"],
            car_make=data["car_make"])