function dropNav() {
    var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function openModal(id) {
  var modal = document.getElementById("myModal");
  var content = document.getElementById(id+"-content");
  var title = document.getElementById(id+"-modalTitle");

  document.getElementById("modal-text").innerHTML = content.innerHTML;
  document.getElementById("modal-title").innerHTML = title.innerHTML;
  modal.style.display = "block";

  var span = document.getElementsByClassName("close")[0];

// When the user clicks on (x), can close the popUp
span.onclick = function() {
  modal.style.display = "none";
}
}

// When the user clicks anywhere outside of the modal so can close it either
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function morePoem() {
  var seeMoreBtn = document.getElementById("button-poem");
  var cardContainer = document.getElementById('box');
  
  if (cardContainer.style.height === "340px") {
    cardContainer.style.height = "auto";
    seeMoreBtn.innerHTML = 'Küçült';

  } 
  else {
    cardContainer.style.height = "340px";
    seeMoreBtn.innerHTML = 'Devamını Gör';
  }
}


