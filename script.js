
function myFunction() {
  var x = document.getElementById("links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myDropdown() {
            var links = document.getElementById("dropdown-content");
 
            if (links.style.display == "block") {
                links.style.display = "none";
            } else {
                links.style.display = "block";
            }
        }
        window.onclick = function (event) {
            if (!event.target.matches('.drpbtn')) {
                document.getElementById('dropdown-content')
                    .style.display = "none";
            }
        }    

function myDropdown2() {
            var links = document.getElementById("dropdown-content2");
 
            if (links.style.display == "block") {
                links.style.display = "none";
            } else {
                links.style.display = "block";
            }
        }
        window.onclick = function (event) {
            if (!event.target.matches('.drpbtn2')) {
                document.getElementById('dropdown-content2')
                    .style.display = "none";
            }
        }    


// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName('my-img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var showModal = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

for (var i = 0; i < img.length; i++) {
    img[i].addEventListener('click', showModal);
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

