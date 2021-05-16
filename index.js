
//  Audio Section
const hitSound = new Audio("sounds/swish.m4a");
const win = new Audio("sounds/win.mp3");
const loose = new Audio("sounds/aww.mp3");
const deal = new Audio("sounds/cash.mp3");

// database search querry

function database(card_no){
    let In_data = {
        "1":"A",
        "2":2,
        "3":3,
        "4":4,
        "5":5,
        "6":6,
        "7":7,
        "8":8,
        "9":9,
        "10":10,
        "11":"J",
        "12":"K",
        "13":"Q"

    };
    
    return In_data[card_no];

}

function randomCard(){
    let num = (Math.floor(Math.random()*13));
    if(num==0){
        return 3;
    }
    return num;
}



function user_play(){
    showCard("user");
}

function computer_play(){
    for(let i=0;i<3;i++){
        setTimeout(() => showCard("opponent"), 1000*i)
        
    }
    
    setTimeout(()=> score(),3000);
    
}


let game_wins = 0;
let game_looses = 0;
let game_draws = 0;

function reset(){
    computer_score = 0;
    user_score = 0;
    document.querySelector("#user").innerHTML = "";
    document.querySelector("#opponent").innerHTML = "";
    document.querySelector("#result-display").innerText = "";


    document.querySelector("#wins").innerText = game_wins;
    document.querySelector("#looses").innerText = game_looses;
    document.querySelector("#draws").innerText = game_draws;
    deal.play();
}




// score and play sound section


let computer_score =0;
let user_score =0;




function score(){
    const result = document.querySelector("#result-display");
    
    if(user_score>computer_score){
        result.innerText = "Win";
        result.style.color = "green";
        win.play(); // playing win sound
        game_wins++;
    }

    else if(user_score<computer_score){
        result.innerText = "Loose";
        result.style.color = "red";
        game_looses++;
        loose.play();  //playing lossing audio 
    }

    else if(user_score==computer_score){
        result.innerText = "Draw";
        result.style.color = "Blue";
        game_draws++;
    }
}


// main function

function showCard(turn){

    let card_count = document.getElementById(`${turn}`).childElementCount;

    


    if(card_count<3&&card_count>=0){
    //    getting random number and cards
        let random_card_no = randomCard();
        let random_card = database(random_card_no);
        
        // adding score to respective player
        if(turn=="opponent"){
            computer_score+=random_card_no;
            
        }
        else if(turn=="user"){
            user_score+=random_card_no;

        }

        const card = document.createElement("img");
        
        
        card.className = "card";
        card.id = String(random_card_no);
        card.src = `images/${random_card}.png`;
        document.querySelector(`#${turn}`).appendChild(card);
        hitSound.play(); // playing swishg sound
        
    }


}