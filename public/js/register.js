$(document).ready(function(){

  $('.msg-success').hide();

  let app = {};

  $('.btn_send').click(function(){
    let uri = 'http://localhost:3000/v1/professionals'
    let data = $('.form').serialize();

    $.post(uri, data, function(){
      $('input[type=text], textarea').val("");
      $('.msg-success').show();
    });

  });

});
