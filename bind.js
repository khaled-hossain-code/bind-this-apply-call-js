// bind helps us to borrow methods from an object
var user = {
    data:[
        {firstName:"mahtab", lastName:"kamal", age:27},
        {firstName:"sakib", lastName:"vai", age: 28}
    ],
    showData:function(){
        //console.log(Math.random()* 3|0); //gives random number between 0 , 1, 2        
        let randomNum = (Math.random()* 2|0); //gives random number between 0 , 1
        console.log(this.data[randomNum].firstName + " " + this.data[randomNum].lastName);
    }
}

var tweeterUser = {
    data:[
        {firstName:"lady", lastName:"gaga", age:27},
        {firstName:"jacqline", lastName:"fernandes", age: 28}
    ]
};

//user.showData(); //this method will call the local variable data

var showDataVar = user.showData.bind(user); //bind is binding the this keyword with user object
 tweeterUser.showTweeterUser =  user.showData.bind(tweeterUser); // here binding the tweeterUser object with showData method, so that this keyword referes to tweeterUser object

showDataVar();
tweeterUser.showTweeterUser();



