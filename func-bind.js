var person1 ={
    firtName: "Anto",
    lastName: "Antony",

    getPersonName: function(){
        return this.firtName + ' ' + this.lastName
    }
}

var person2 ={
    firtName: "Shyam",
    lastName: "Antony",

    getPersonName: function(){
        return this.firtName + ' ' + this.lastName
    }
}

var personName = function(snack, hobby) {
    console.log(this.getPersonName() + " loves " + snack + " does " + hobby)
}

var logPerson = personName.bind(person2) // call and apply

logPerson("Chips", "Reading")


personName.call(person1, "Chips", "Reading")
personName.apply(person1, ["Chips", "Reading"])