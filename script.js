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

      if (operator === "plus") {
        result = firstNumber + secondNumber;
      }

      else if (operator === "minus") {
        result = firstNumber - secondNumber;
      }

      else if (operator === "times") {
        result = firstNumber * secondNumber;
      }

      else if (operator === "divide") {
        result = firstNumber / secondNumber;
      }

      else if (operator === "power") {
        result = Math.pow(firstNumber, secondNumber);
      }

      $("#result").text(result);

    });
    $(".clear").on("click", function() {
      initializeCalculator();
    });

    initializeCalculator();
  });