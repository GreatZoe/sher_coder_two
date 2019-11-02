/*// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var diV = this.parentElement;
    diV.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var div = document.createElement("div");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  div.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementsByClassName("art").appendChild(div);
  }
  document.getElementsByClassName("art").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}*/

  var showNo = 0; //当前显示图片在数组中下标
  function showByIndex(dir){
    var imgShow = document.getElementById("imageShow");
    var images = imgShow.getElementsByTagName("div");
    if(dir==0){ //dir为0，显示当前图片前面的图片，否则显示当前图片后面的图片
      showNo=showNo+images.length-1;  //因为负数取余的逻辑是绝对值取余之后再取相反数。比如5%3=2；-5%3=-2，而实际上应该为1
    }else{
      showNo=showNo+1;
    }
    showNo=showNo%(images.length);
    for(var i=0;i<images.length;i++){
      if(showNo==i){
        images[i].style.display='block';
      }else{
        images[i].style.display='none';
      }
    }
  }
    function cl(){
      document.getElementById('s').style.display='block'
      document.getElementById('aa').style.display='none'
    }
    
