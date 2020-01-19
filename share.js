$('a[data-text]').each(function(){
  $(this).attr('data-text', "I want this to change");
});
$.getScript('http://platform.twitter.com/widgets.js');