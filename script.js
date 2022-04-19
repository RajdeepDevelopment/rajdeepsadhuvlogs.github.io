 const menuIcon = document.querySelector(".menu-icon");
 const sidebar = document.querySelector(".sidebar");
 const container = document.querySelector(".container");
 const like = document.getElementById ('like')

//  const container = document.querySelecter (".container");
  menuIcon.onclick = function (){
    sidebar.classList.toggle ("small-sidebar");
    container.classList.toggle ("large-container");
  }
  