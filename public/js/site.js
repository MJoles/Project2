var roundOneUserPicks = {
    choiceOne: "",
    choiceTwo: "",
    choiceThree: "",
    choiceFour: "",

}


$('.votingbutton').on('click', function () {
    console.log(this);
    var match = $(this).data("match");
    console.log(match);
    console.log(roundOneUserPicks.choiceOne);
    console.log(roundOneUserPicks.choiceTwo);
    console.log(roundOneUserPicks.choiceThree);
    console.log(roundOneUserPicks.choiceFour);
    var id = $(this).data("id");

    //figure out which match you're in
    //then get id that they clicked
    //update the userPicks vars 
    if (match === "1") {
        roundOneUserPicks.choiceOne = id;
    }
    else if (match === "2") {
        roundOneUserPicks.choiceTwo = id;
    }
    else if (match === "3") {
        roundOneUserPicks.choiceThree = id;
    }
    else if (match === "4") {
        roundOneUserPicks.choiceFour = id;
    }

});

//on click handle for the submit button
$(".submitButton").on('click', function () {

    // ensure strings arent empty
    if (userPicks.choiceOne === "" || userPicks.choiceTwo === "" || userPicks.choiceThree === "" || userPicks.choiceFour === "") {
        return false
        //need to add error message later
    }
    else {
        //make ajax post request
        //.then redirect them to next page 
    }


});

//   $.ajax({
    // headers: {
    //       "Content-Type": "application/json"
    //     },
    //     type: "POST",
    //     url: "/rd2",
    //     data: JSON.stringify(example)
//   });
