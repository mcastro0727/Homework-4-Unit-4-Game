// 
    // Random number to guess
    // Assign number to crystals (1-12)
    // Addition on click
    // Count win or lose
    // 
    // Crystal pictures
    // 



$(document).ready(function() {

    // Bunch of variables
    var wins = 0
    var losses = 0
    var userScore = 0


    // Computer select random number
    var randomNumber = Math.floor(Math.random() * 120) + 19

    console.log("random number: ", randomNumber)

    // Display random number
    $("#random-number").html(randomNumber);

    // To assign values to each crystal
    var ruby = Math.floor(Math.random() * 12) + 1
    var diamond = Math.floor(Math.random() * 12) + 1
    var sapphire = Math.floor(Math.random() * 12) + 1
    var emerald = Math.floor(Math.random() * 12) + 1

    console.log("ruby value: ", ruby)

    // Values of crystals on click
    $(".ruby").on("click", function() {
        userScore = userScore + ruby;
        $("#totalScore").html(userScore); 
        if (userScore == randomNumber){
            win();
          }
          else if (userScore > randomNumber){
            lose();
          }  
        
        console.log("New Score = ", userScore)
    })
    
    $(".diamond").on("click", function() {
        userScore = userScore + diamond;
        $("#totalScore").html(userScore); 
        if (userScore == randomNumber) {
            win();
          }
          else if (userScore > randomNumber) {
            lose();
          }   
    })

    $(".sapphire").on("click", function() {
        userScore = userScore + sapphire;
        $("#totalScore").html(userScore); 
        if (userScore == randomNumber) {
            win();
          }
          else if (userScore > randomNumber) {
            lose();
          }   
    })

    $(".emerald").on("click", function() {
        userScore = userScore + emerald;
        $("#totalScore").html(userScore); 
        if (userScore == randomNumber) {
            win();
          }
          else if (userScore > randomNumber) {
            lose();
          }   
    })



    // Win
    function win() {
        wins++;
        $("#wins").html(wins);
        reset();
    }

    // Lose
    function lose() {
        losses++;
        $("#losses").html(losses);
        reset();
    }

    // Reset
    function reset() {
        randomNumber = Math.floor(Math.random() * 120) + 19;
        $('#random-number').html(randomNumber);
        ruby = Math.floor(Math.random() * 12) + 1;
        diamond = Math.floor(Math.random() * 12) + 1;
        sapphire = Math.floor(Math.random() * 12) + 1;
        emerald = Math.floor(Math.random() * 12) + 1;
        userScore = 0;
        $('#totalScore').html(userScore);
    } 




    $("#wins").html(wins);
    $("#losses").html(losses);

})