$( document ).ready( function() {

  var turn = 0;

  var winner = '';

  var testForWin = function () {

    var num1 = $('#name1').text();
    var num2 = $('#name2').text();
    var num3 = $('#name3').text();
    var num4 = $('#name4').text();
    var num5 = $('#name5').text();
    var num6 = $('#name6').text();
    var num7 = $('#name7').text();
    var num8 = $('#name8').text();
    var num9 = $('#name9').text();

    if ((num1 && num1 === num2) && (num2 === num3)) {
    winner = num1;
  } else if ((num2 && num2 === num5) && (num5 === num8)) {
    winner = num2;
  } else if ((num3 && num3 === num6) && (num6 === num9)) {
    winner = num3;
  } else if ((num1 && num1 === num4) && (num4 === num7)) {
    winner = num1;
  } else if ((num1 && num1 === num5) && (num5 === num9)) {
    winner = num1;
  } else if ((num3 && num3 === num5) && (num5 === num7)) {
    winner = num3;
  }

  };

  var playMove = function (cell) {

      if ( $(cell).text().length === 1 ) {
        return;
      }

      if ( turn % 2 == 0 ) {
        $(cell).val('x');
        $(cell).text('x');

      } else {
        $(cell).val('o');
        $(cell).text('o');

     }

      if ( turn === 8 ) {
        console.log('No one has won! Start again.')
        reset();
      }


      turn++;

      testForWin();

  };  // end playMove()

  var reset = function () {
    turn = 0;
    $('td').text('click');
  };

  $('button').on('click', function() {
    reset();
  });

  $('td').on('click', function() {

    // play move function
    playMove(this);

    if ($(winner).text().length === 1) {
    $('#message').html('winner is ' + winner );
  };
  });

});
