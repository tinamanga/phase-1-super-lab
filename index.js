// Define the Tree class (parent class)
class Tree {
    constructor(species) {
      this.species = species;  // Assign species to the species property
    }
  
    static definition() {
      // Static method to provide the general definition of trees
      return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
    }
  }
  
  // Define the Deciduous class (child class of Tree)
  class Deciduous extends Tree {
    constructor(species, name) {
      super(species);  
      this.name = name; 
    }
  
    static definition() {
      // Use super() to call the parent class definition and add specific details for Deciduous trees
      return super.definition() + " Deciduous trees shed their leaves annually.";
    }
  }
  
  // Define the Evergreen class (child class of Tree)
  class Evergreen extends Tree {
    constructor(species, name) {
      super(species);  
      this.name = name; 
    }
  
    static definition() {
      // Use super() to call the parent class definition and add specific details for Evergreen trees
      return super.definition() + " Evergreens keep their leaves all year round.";
    }
  }
  





