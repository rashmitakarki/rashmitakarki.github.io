// Get the first list item of the first ordered list.
const firstListItem = document.querySelector("#list1 li:first-child");
// Get the second item of the first ordered list.
const secondListItem = document.querySelector("#list1 li:nth-child(even)");
// Get the third item of the first ordered list.
const thirdListItem = document.querySelector("#list1 li:last-child");

// Add a mouseover event listener to the first list item.
firstListItem.addEventListener("mouseover", function() {
  // Add the hover class to the first list item of all ordered lists.
  const listFirstItems = document.querySelectorAll(".ordered-list li:first-child");
  listFirstItems.forEach(function(item) {
    item.classList.add("hover");
  });
});

// Add a mouseout event listener to the first list item.
firstListItem.addEventListener("mouseout", function() {
  // Remove the hover class from the first list item of all ordered lists.
  const listFirstItems = document.querySelectorAll(".ordered-list li:first-child");
  listFirstItems.forEach(function(item) {
    item.classList.remove("hover");
  });
});

// Add a mouseover event listener to the second list item.
secondListItem.addEventListener('mouseover', function(){
    // Add the hover class to the second list item of all ordered list.
    const listItems = document.querySelectorAll(".ordered-list li:nth-child(even)");
    listItems.forEach(function(item){
        item.classList.add('hover');
    });
});

// Add a mouseout event listener to the second list item.
secondListItem.addEventListener('mouseout', function(){
    // Remove the hover class from the second list item of all ordered lists.
    const listItems = document.querySelectorAll(".ordered-list li:nth-child(even)");
    listItems.forEach(function(item){
        item.classList.remove('hover');
    });
});

// Add a mouseover event listener to the third list item.
thirdListItem.addEventListener("mouseover", function(){
    // Add the hover class to the third list item of all ordered lists.
    const listItems = document.querySelectorAll(".ordered-list li:last-child");
    listItems.forEach(function(item){
        item.classList.add("hover");
    });
});

// Add a mouseout event listener to the third list item.
thirdListItem.addEventListener("mouseout", function(){
    // Remove a hover class from the third list item of all ordered lists.
    const listItems = document.querySelectorAll(".ordered-list li:last-child");
    listItems.forEach(function(item){
        item.classList.remove("hover");
    });
});

// Adding open and close menu in small screen size
var navmenu = document.getElementById('menu');
function opennav(){
    navmenu.style.right = "0";
}

function closenav(){
    navmenu.style.right="-200px";
}
