var plant = {
  status: "seed",
  height: 0,
  numbwater: 0,
  numbfeed: 0,
  watering: function(numb) {
    for (var i = 0; i < numb; i ++) {
      this.status = "plant";
      if (this.height < 12) {
      this.height += 2;
      this.numbwater += 1;
      console.log(this.height + " inches tall");
      } else if (this.numbwater > 3 && this.numbfeed > 3) {
        this.status = "dead plant"
        console.log(this.status);
      } else {
        this.numbwater += 1;
      }
    }
  },
  feeding: function(food, numb) {
    if (food.toLowerCase() === "anti-freeze") {
      this.status = "dead plant"
      console.log(this.status)
    } else {
      for (var i = 0; i < numb; i ++) {
        if (this.height < 12) {
          this.height += 1;
          this.numbfeed += 1;
          console.log(this.height + " inches tall");
        } else if (this.numbwater > 3 && this.numbfeed > 3) {
          this.status = "dead plant"
          console.log(this.status);
        } else {
          this.numbfeed += 1;
        }
      }
    }
  },
  flower: false,
  changeloc: function(loca) {
    if (loca === "sun" && this.status !== "dead plant") {
      this.flower = true;
      console.log(this.flower + " has flowers");
    } else if (this.status !== "dead plant") {
      this.flower = false;
      console.log(this.flower + " has no flowers");
    } else {
      console.log("This plant is dead, why are you moving it?");
    }
  }

}

console.log(plant.watering(5))
console.log(plant.changeloc("sun"))
