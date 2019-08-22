$('#numIn').keyup(function(){
  let numConv = $(this).val();
  var numOutTen = numConv/23.77;
  var numTenTotal = Math.ceil(numOutTen);
  var numOutPool = numConv/1250;
  var numPoolTotal = Math.ceil(numOutPool);
  var numOutFoot = numConv/7140;
  var numFootTotal = Math.ceil(numOutFoot);
  $('#tennis').text(numTenTotal);
  $('#pool').text(numPoolTotal);
  $('#football').text(numFootTotal);
})
.keyup();

$('#numInK').keyup(function(){
  let numConv = $(this).val();
  if (numConv > 8683){
    $('#cityOut').text('bigger than New York city.');
  } else if (numConv > 6993 && numConv < 8683) {
    $('#cityOut').text('bigger than Toyko.');
  } else if (numConv > 4320 && numConv < 6993) {
    $('#cityOut').text('bigger than Los Angeles.');
  } else if (numConv > 2723 && numConv < 4320){
    $('#cityOut').text('bigger than Paris.');
  } else if (numConv > 1623 && numConv < 2723){
    $('#cityOut').text('bigger than London.');
  }
})
.keyup();