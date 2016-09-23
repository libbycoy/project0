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

  if ((num1.length === 1 && num1 === num2) && (num2 === num3)) {
      winner = num1;
  } else if ((num2.length === 1 && num2 === num5) && (num5 === num8)) {
      winner = num2;
  } else if ((num3.length === 1 && num3 === num6) && (num6 === num9)) {
    winner = num3;
  } else if ((num1.length === 1 && num1 === num4) && (num4 === num7)) {
    winner = num1;
  } else if ((num1.length === 1 && num1 === num5) && (num5 === num9)) {
      winner = num1;
  } else if ((num3.length === 1 && num3 === num5) && (num5 === num7)) {
      winner = num3;
  } else if ((num4.length === 1 && num4 === num5) && (num5 === num6)) {
      winner = num4;
  } else if ((num7.length === 1 && num7 === num8) && (num8 === num9)) {
      winner = num3;
  }
  if (winner.length === 1) {
  $('#message').html('winner is ' + winner + '!' );
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

     } if ( turn === 8 && $('#message').html('') ) {
        $('#message').html( 'No one has one! Start again!' );
      }

      turn++;

      testForWin();

  };  // end playMove()

  var reset = function () {
    turn = 0;
    winner = '';
    $('td').text('click');
    $('#message').html('');
    $('td').removeClass('selected');
    $('td').addClass('fade');
    $('td').addClass('grow');
  };

  $('button').on('click', function() {
    reset();
  });

  $('td').on('click', function() {

    $(this).addClass('selected');
    $(this).removeClass('fade');
    $(this).removeClass('grow');


    if (winner.length === 1) {
      return;
    }

    playMove(this);

  });

});
