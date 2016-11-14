

            



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
//function addCart(id, title, price) {
  //localStorage.setItem(id, JSON.stringify({title: title, price: price}))
  //location.href = 'http://www.haydencoe.co.uk/cart.html';
//}


//TRIAL STUFF***************************************************************************************************






function myFunction() {  //button click "Scan Now!"
    
    
       // alert("Hello! I am an alert box!!");
       
        var localStream;

        var sound = new Audio("barcode.wav");

        var video = document.querySelector('video');
        var canvas = document.querySelector('canvas');
        var ctx = canvas.getContext('2d');
        var localMediaStream = null;
        var list = document.querySelector('ul#decoded');
        
        var lists = document.querySelector('ul#decodeders');
        
        
        
        
        //When a barcode has been scanned 
        
        var worker = new Worker('zbar-processor.js');
        worker.onmessage = function(event) {
            if (event.data.length == 0) return;
            var d = event.data[0];
            var entry = document.createElement('li');
            entry.appendChild(document.createTextNode(d[2] + ' (' + d[0] + ')'));
            list.appendChild(entry);
            sound.play(); //Plays 'beep' noise
        

            localStream.getTracks().forEach(function(track) { track.stop() }) //Stops the camera stream
            
           
            
            // Statement to work who has been scanned
            if (event.data == "CODE-39,,309219")  
            {
	        
	           var name = "Hayden Coe";
               var entrys = document.createElement('li');
               entrys.appendChild(document.createTextNode(name));
               lists.appendChild(entrys);

                //Part to unhide the right timetable HNC2Timetable
                var item = document.getElementById('HNC2Timetable');
                if (item) 
                {
                  item.className=(item.className=='hidden')?'unhidden':'hidden';
                }
            
                //Hides the empty time table holder
                var item = document.getElementById('emptyTimetable');
                if (item) 
                {
                  item.className=(item.className=='hidden')?'unhidden':'hidden';
                }
            
            
            
            }//end of if statement 
           
           
           
           // Statement to work who has been scanned
            if (event.data == "CODE-39,,271592")  
            {
	        
	           var name = "Kieran Brown";
               var entrys = document.createElement('li');
               entrys.appendChild(document.createTextNode(name));
               lists.appendChild(entrys);

                //Part to unhide the right timetable HNC2Timetable
                var item = document.getElementById('HND2Timetable');
                if (item) 
                {
                  item.className=(item.className=='hidden')?'unhidden':'hidden';
                }
            
                var item = document.getElementById('emptyTimetable');
                if (item) 
                {
                  item.className=(item.className=='hidden')?'unhidden':'hidden';
                }
            
            
            }//end of if statement 

           
             // Statement to work who has been scanned
            if (event.data == "CODE-39,,308401")  
            {
	        
	           var name = "Sam Price";
               var entrys = document.createElement('li');
               entrys.appendChild(document.createTextNode(name));
               lists.appendChild(entrys);

                //Part to unhide the right timetable HNC2Timetable
                var item = document.getElementById('HND2Timetable');
                if (item) 
                {
                  item.className=(item.className=='hidden')?'unhidden':'hidden';
                }
            
                var item = document.getElementById('emptyTimetable');
                if (item) 
                {
                  item.className=(item.className=='hidden')?'unhidden':'hidden';
                }
            
            
            }//end of if statement 

              // Statement to work who has been scanned
            if (event.data == "CODE-39,,312825")  
            {
	        
	           var name = "Steven Trevor ";
               var entrys = document.createElement('li');
               entrys.appendChild(document.createTextNode(name));
               lists.appendChild(entrys);

                //Part to unhide the right timetable HNC2Timetable
                var item = document.getElementById('HND2Timetable');
                if (item) 
                {
                  item.className=(item.className=='hidden')?'unhidden':'hidden';
                }
            
                var item = document.getElementById('emptyTimetable');
                if (item) 
                {
                  item.className=(item.className=='hidden')?'unhidden':'hidden';
                }
            
            
            }//end of if statement 

           
           
           // Statement to work out who has been scanned 
            if (event.data == "CODE-39,,273051")  
            {
	        
	            var name = "Patrick Scott";
                var entrys = document.createElement('li');
                entrys.appendChild(document.createTextNode(name));
                lists.appendChild(entrys);

                //Part to unhide the right timetable HND2Timetable      
                var item = document.getElementById('HND2Timetable');
                if (item) 
                {
                  item.className=(item.className=='hidden')?'unhidden':'hidden';
                }
           
                var item = document.getElementById('emptyTimetable');
                if (item) 
                {
                  item.className=(item.className=='hidden')?'unhidden':'hidden';
                }

	            
            }//end of if statement 

           
          
            }; //End of "Worker" 
            
            

           // window.open("https://www.haydencoe.co.uk/popUp.html"); 
            
           

        function snapshot() {
            if (localMediaStream === null) return;
            var k = (320 + 240) / (video.videoWidth + video.videoHeight);
            canvas.width = Math.ceil(video.videoWidth * k);
            canvas.height = Math.ceil(video.videoHeight * k);
            var ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight,
                          0, 0, canvas.width, canvas.height);

            var data = ctx.getImageData(0, 0, canvas.width, canvas.height);
            worker.postMessage(data);
        }

        setInterval(snapshot, 500);

        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
        window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

        if (navigator.getUserMedia) {
            navigator.getUserMedia({video: true},
                                   
                                   function(stream) { // success callback
                                       
                                       
                                       localStream = stream;
                                       
                                       
                                       if (video.mozSrcObject !== undefined) 
                                       
                                       {
                                           video.mozSrcObject = stream;
                                       
        
                                       } 
                                       
                                       else 
                                       {
                                           video.src = (window.URL && window.URL.createObjectURL(stream)) || stream;
                                       }
                                       
                                       localMediaStream = true;
                                   },
                                   
                                   function(error) {
                                       console.error(error);
                                   });
        }
        else {
       
       
       
        }
        
        
        

        } //end of myFunction
