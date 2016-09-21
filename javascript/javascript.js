$( document ).ready( function() {

  var turn = 0;

  function reset() {
    turn = 0;
    $('td').text('click').val('');
   };

  $('button').on('click', function() {
    reset();
  });

  $('td').on('click', function() {


  var num1 = $('#name1').val();
  var num2 = $('#name2').val();
  var num3 = $('#name3').val();
  var num4 = $('#name4').val();
  var num5 = $('#name5').val();
  var num6 = $('#name6').val();
  var num7 = $('#name7').val();
  var num8 = $('#name8').val();
  var num9 = $('#name9').val();



  if ( $(this).text().length === 1 ) {
    return;
  }

  if ( turn % 2 == 0 ) {
    $(this).val('x');
    $(this).text('x');

  } else {
    $(this).val('o');
    $(this).text('o');

 }
  if ( turn === 8 ) {
    reset();
  }

  turn ++;
  });

});
