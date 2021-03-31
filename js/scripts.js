
  let scrollpos = window.scrollY
  const header = document.querySelector("header")
  const header_height = 80

  const add_class_on_scroll = () => header.classList.add("fade")
  const remove_class_on_scroll = () => header.classList.remove("fade")

  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos >= header_height) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

    console.log(scrollpos)
  })

var hamburger = document.getElementById("hamburger")
// var linksList = document.getElementsByClassName("links_list")

myFunction = function() {
  var linksList = document.getElementById("linksList")
  linksList.classList.toggle("show")
};

hamburger.addEventListener("click", myFunction )
