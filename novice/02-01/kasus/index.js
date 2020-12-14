class myKitty {
    constructor(tiredness, hunger, lonliness,  happiness){
        this.tiredness = tiredness
        this.hunger = hunger
        this.lonliness = lonliness
        this.happiness = happiness
    }
        
    feed() {
        this.hunger--
        this.happiness++
        return 
    }

    sleep(){
        this.tiredness--
        this.happiness++
        return
    }

    pet(){
        if (this.happiness < 5){
            this.lonliness--
            this.happiness++
        }else{
            console.log("Happiness: " + myCat.happiness)  
            console.log("The cat doesnt wanna to be petted");
        }
        return
    }

    spray(){
        this.lonliness++
        this.happiness--
        return 
    }

    catStatus(){
        console.log("Kitty status:")
        console.log("Tiredness: " + myCat.tiredness)
        console.log("Hunger: " + myCat.hunger)
        console.log("Lonliness: " + myCat.lonliness)
        console.log("Happiness: " + myCat.happiness)   
        //check hunger
        if (this.hunger > 3){
            console.log("The cat is really hungry!")
        }else{
            console.log("The cat is not hungry!!")  
        }
        //check tiredness
        if (this.tiredness < 2){
            console.log("The cat is not tired!")
        }else{
            console.log("The cat is really tired!")  
        }
        //check lonliness
        if (this.lonliness > 3){
            console.log("The cat feels lonely!")
        }else{
            console.log("The cat is not lonely!!")  
        }
        //check happiness
        if (this.happiness > 3){
            console.log("The cat is really happy!")
        }else{
            console.log("The cat is unhappy!")  
        }
        console.log("");
    }
}

let myCat = new myKitty(5,5,5,5)
myCat.catStatus()
//action
//myCat.sleep()
// myCat.pet()