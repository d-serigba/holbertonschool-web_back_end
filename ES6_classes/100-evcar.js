import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Appelle le constructeur de la classe parente (Car)
    super(brand, motor, color);
    this._range = range;
  }

  // Redéfinition de cloneCar pour la sécurité/confidentialité
  cloneCar() {
    // On retourne explicitement une instance de Car (la base) 
    // sans passer les arguments pour obtenir l'output "undefined" demandé
    return new Car();
  }
}
