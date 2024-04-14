/*$(function() {
 $('.slide').css({
   'height': (($(window).height()) -40)
  });
});*/

/*$(function(){
  setHeight(); 
});

$(window).resize(function() {
  setHeight(); 
});

function setHeight() {
  var Height = $(window).height();
  $('.slide').css('height', Height);
  
}
*/

  
function goToByScroll(id){     
   $('html,body').animate({
    scrollTop: $("."+id).offset().top +0
    },400);
    window.speechSynthesis.cancel();
    revealLetters(document.getElementById(id+"-text"));
    
  }
  
  function revealLetters(textElement) {
    
    var text = textElement.innerHTML;
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    textElement.innerHTML = '';
    var index = 0;
    function reveal() {
      if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(reveal, 50); // Adjust the delay (in milliseconds) between each letter reveal
      }
       
    }
    reveal();
    window.speechSynthesis.speak(msg);   
  }
  