$(document).ready(function() {

    var firstNumber = 0;
    var secondNumber = 0;
    var operator = "";
    var result = 0;
    var isOperatorChosen = false;
    var isCalculated = false;

    function initializeCalculator() {
      firstNumber = "";
      secondNumber = "";
      operator = "";
      isOperatorChosen = false;
      isCalculated = false;

      $("#first-number, #second-number, #operator, #result").empty();
    }

    $(".number").click(function() {

      if (isCalculated) {
        return false;
      }

      if (isOperatorChosen) {
        secondNumber += $(this).val();
        $("#second-number").text(secondNumber);

      }
      else {
        firstNumber += $(this).val();
        $("#first-number").text(firstNumber);
      }

    });
    $(".operator").on("click", function() {

      if (!firstNumber || isCalculated) {
        return false;
      }

      isOperatorChosen = true;
      operator = $(this).val();

      $("#operator").text($(this).text());

    });
    $(".equal").on("click", function() {
      if (isCalculated) {
        return false;
      }

      isCalculated = true;

      firstNumber = parseInt(firstNumber);
      secondNumber = parseInt(secondNumber);

      if (operator === "+") {
        result = firstNumber + secondNumber;
      }

      else if (operator === "-") {
        result = firstNumber - secondNumber;
      }

      else if (operator === "x") {
        result = firstNumber * secondNumber;
      }

      else if (operator === "÷") {
        result = firstNumber / secondNumber;
      }

      else if (operator === "^") {
        result = Math.pow(firstNumber, secondNumber);
      }

      const calculation = `${firstNumber} ${operator} ${secondNumber}=${result}`

      sendCalculation(calculation);

      $("#result").text(result);

    });
    $(".clear").on("click", function() {
      initializeCalculator();
    });

    initializeCalculator();

function sendCalculation(calculation) {
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:3001/calculations/add",
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify({ "calculation" : calculation})
      });
}

function getPreviousTen() {
    var items = [];
    $.getJSON( "http://127.0.0.1:3001/calculations", function( data ) {
        $.each( data, function( key, val ) {
            items.push( "<li class='list-group-item'>" + val.calculation + "</li>" );
        });

        $( "<ul/>", { html: items.join( "" )}).appendTo( "#previous" );
        // $("#previous").replaceWith({ html: items.join(" ")})
    })

}

getPreviousTen();

function updateCalculations() {
  setInterval(function() {
    $("#previous").empty();
    getPreviousTen();
  }, 5000)
};

updateCalculations();

  });