'use strict';

function fancySchmancy(){
  return $('#bacon').addClass('iAmFancy');
}

function addText(str){
  return $('p:nth-child(2)').append(str);
}

function showDolphin(){
  $('#hidden').show();
}

function hideImage(){
  $('img[alt="pie in face"]').hide();
}

function fadeIt(){
  $('#favorite-snacks').fadeIn();
}

function fadeItOut(){
  $('p:nth-child(2)').fadeOut(0);
}

function findItByClass(selector){
  return $(selector).hasClass('flatironLink');
}

function formValue(){
  return $('input:last').val();
}
