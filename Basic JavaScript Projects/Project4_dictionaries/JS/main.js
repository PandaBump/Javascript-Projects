function my_Dictionary() { //setting function and parameters//
    var Animal = {  //dictionary variable that utilizes KVPs//
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound; //deleting "Animal.Sound" KVP entry before it is displayed//
    document.getElementById("Dictionary").innerHTML = Animal.Sound
}