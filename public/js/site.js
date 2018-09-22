$(document).ready(function() {
  var roundOneUserPicks = {
      choiceOne: "",
      choiceTwo: "",
      choiceThree: "",
      choiceFour: ""
  };

  var roundTwoUserPicks = {
    choiceOne: "",
    choiceTwo: "",
    };

var roundThreeUserPicks = {
    choiceOne: "",
    };

  

  //Voting button onclick handler that grabs user choices
  $('.votingbutton').on('click', function () {
      console.log(this);

      var match = $(this).data("match");
      

      console.log("Match: " + match);
      console.log(roundOneUserPicks.choiceOne);
      console.log(roundOneUserPicks.choiceTwo);
      console.log(roundOneUserPicks.choiceThree);
      console.log(roundOneUserPicks.choiceFour);
      

      var id = $(this).data("id");
      var movieTitle = $(this).data("movie")

      console.log("Movie id: " + id);
      console.log("Movie Title: " + movieTitle);

      if (match == "1") {
          roundOneUserPicks.choiceOne = movieTitle;
      }
      else if (match == "2") {
          roundOneUserPicks.choiceTwo = movieTitle;
      }
      else if (match == "3") {
          roundOneUserPicks.choiceThree = movieTitle;
      }
      else if (match == "4") {
          roundOneUserPicks.choiceFour = movieTitle;
      }
      else if (match == "5") {
          console.log(this)
        roundTwoUserPicks.choiceOne = movieTitle;
      }
      else if (match == "6") {
        roundTwoUserPicks.choiceTwo = movieTitle;
    }
    else if (match == "7") {
        roundThreeUserPicks.choiceOne = movieTitle;
    }
      
  });

  //Submit Button onclick handler with post request to database
  $(".submitButton").on('click', function () {
      console.log(roundOneUserPicks);
      // Ajax post request to post roundOneUserPicks to the RoundOne database
      $.ajax({
          headers: {
            "Content-Type": "application/json"
              },
          type: "POST",
          url: "../rd2",
          data: JSON.stringify(roundOneUserPicks)
      //.then redirect them to next page v
      }).then(function(res) {
        
      console.log(res);
      });
    console.log("this is the end");
    });

    $(".submitButton2").on('click', function () {
        console.log(roundTwoUserPicks);
        // Ajax post request to post roundOneUserPicks to the RoundOne database
        $.ajax({
            headers: {
              "Content-Type": "application/json"
                },
            type: "POST",
            url: "../rd3",
            data: JSON.stringify(roundTwoUserPicks)
        //.then redirect them to next page v
        }).then(function(res) {
          
        console.log(res);
        });
      console.log("this is the end");
      });
});
