// 
    // Random number to guess
    // Assign number to crystals (1-12) dynamic
    // Addition on click
    // Count win or lose
    // 
    // Crystal pictures
    // 



    // Bunch of variables
    var wins = 0
    var losses = 0
    var userScore = 0


    // To select random number
    var randomNumber = Math.floor(Math.random() * 120) + 19

    console.log("random number: ", randomNumber)

    // To assign values to each crystal
    var ruby = Math.floor(Math.random() * 12) + 1
    var diamond = Math.floor(Math.random() * 12) + 1
    var sapphire = Math.floor(Math.random() * 12) + 1
    var emerald = Math.floor(Math.random() * 12) + 1

    console.log("ruby value: ", ruby)

    // Values of crystals on click
    $(".ruby").on("click", function() {
        userScore = userScore + ruby;
        $("#totalScore").text(userScore); 
    })
    
    $(".diamond").on("click", function() {
        userScore = userScore + diamond;
        $("#totalScore").text(userScore); 
    })

    $(".sapphire").on("click", function() {
        userScore = userScore + sapphire;
        $("#totalScore").text(userScore); 
    })

    $(".emerald").on("click", function() {
        userScore = userScore + emerald;
        $("#totalScore").text(userScore); 
    })


    console.log("New Score = ", userScore);

    
    // Reset
    function reset(){
        randomNumber = Math.floor(Math.random() * 120) + 19;
        $('#random-number').text(randomNumber);
        ruby = Math.floor(Math.random() * 12) + 1;
        diamond = Math.floor(Math.random() * 12) + 1;
        sapphire = Math.floor(Math.random() * 12) + 1;
        emerald = Math.floor(Math.random() * 12) + 1;
        userScore = 0;
        $('#totalScore').text(userScore);
        } 











    $('#wins').text(wins);
    $('#losses').text(losses);

