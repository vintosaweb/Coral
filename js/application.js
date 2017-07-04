$(document).ready(function() {
  $('.opinions .opinion .all a').click(function() {
    $(this).parent().prev().prev().hide();
    $(this).parent().prev().show();
    $(this).parent().remove();
    yaCounter14059762.reachGoal('show_full_comment');
    return false;
  });
  $('.b-infofield a.ajax').click(function() {
    $(this).parent().prevAll().removeClass('hide');
    $(this).parent().remove();
    return false;
  });
  $('form#send').submit(function() {
    var err = false;
    
    // Name 
    if ($(this).find('input.name').val().length < 2) {
      err = true;
      alert('Введите корректное имя');
      $(this).find('input.name').focus();
      return false;
    }
    // Phone
    if (!isValidPhone($(this).find('input.phone').val())) {
      err = true;
      alert('Введите корректный телефон: +7 926 123 45 67, 8 926 123 45 67');
      $(this).find('input.phone').focus();
      return false;
    }
    // Mail
    if (!isValidEmail($(this).find('input.mail').val())) {
      err = true;
      alert('Введите корректный Email');
      $(this).find('input.mail').focus();
    }
    
    if (!err) {
      $.post(
        $(this).attr('action'), 
        $(this).serialize(), 
        function(data, textStatus, xhr) {
          if (data == "ok") {
            $('.find_tour .form').remove();
            $('.find_tour .data').html('Спасибо. Ваша заявка отправлена.');
            yaCounter14059762.reachGoal('send_request');
          };
        });
    } else {
      yaCounter14059762.reachGoal('form_error'); 
    };

    return false;
  });
  
  function isValidEmail (email) {
    return (/^([a-z0-9_\-]+\.)*[a-z0-9_\-]+@([a-z0-9][a-z0-9\-]*[a-z0-9]\.)+[a-z]{2,4}$/i).test(email);
  }
  function isValidPhone (phone) {
    return (/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/).test(phone);
  }
});