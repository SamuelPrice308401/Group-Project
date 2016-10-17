


  

            



$(window).scroll(function() {
  // Darken the top navbar when scrolling down
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $(".top-navbar").addClass("dark");
  } else {
    $(".top-navbar").removeClass("dark");
  }
});

$(document).ready(function() {
 
 /*
  // Fade through slideshow on main page
  $("#slideshow > div:gt(0)").hide();
  setInterval(function() {
    $('#slideshow > div:first')
      .fadeOut(2000)
      .next()
      .fadeIn(2000)
      .end()
      .appendTo('#slideshow');
  }, 4000);

*/


});





       
       
 function myFunction() {
    
  
  
}
  
  
  function getUserMedia(options, successCallback, failureCallback) {
  var api = navigator.getUserMedia || navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia || navigator.msGetUserMedia;
  if (api) {
    return api.bind(navigator)(options, successCallback, failureCallback);
  }
  alert('User Media API not supported.');
}

function getStream(type) {
  var constraints = {};
  constraints[type] = true;
  getUserMedia(constraints, function(stream) {
    var mediaControl = document.querySelector(type);
    if (navigator.mozGetUserMedia) {
      mediaControl.mozSrcObject = stream;
    } else {
      mediaControl.srcObject = stream;
      mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
    }
  }, function(err) {
    alert('Error: ' + err);
  });
}
  
        
        
                

// Function that adds product to localstorage and navigates to cart page
function addCart(id, title, price) {
  localStorage.setItem(id, JSON.stringify({title: title, price: price}))
  location.href = 'http://www.haydencoe.co.uk/cart.html';
}


