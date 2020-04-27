$('#button1').click(() => {
    console.log('Yeah, you clicked me');
  })

  $('#button2').click(() => {
    $('#button1').text('Oh yeah! You did it!');
  })

  $('#button3').click(() => {
    var colors = $( "#color" ).val();
    $('button').css('background', colors);
  })