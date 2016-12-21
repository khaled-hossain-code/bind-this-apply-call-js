var person = {
    firstName: "khaled",
    lastName: "Hossain",
    fullName: function(){
        console.log(`${this.firstName} ${this.lastName}`);
    },
    job: {
            office: `${this.firstName} ${this.lastName}'s office is NewsCreed`
         }
    }

var person1 = {
    firstName: "Rohed",
    lastName: "khan"
};


person.fullName();
person.fullName.apply(person1); // using the method for one time just passing the this context values
