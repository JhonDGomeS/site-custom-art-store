filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
 var x, i;
 x = document.getElementsByClassName("grid-item");
 if (c == "all") c = "";
 // Add the "invisible" class (display:none) to the filtered elements, and remove the "invisible" class from the elements that are not selected
 for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "invisible");
    if (x[i].className.indexOf(c) == -1) w3AddClass(x[i], "invisible");
 }
}

// Show filtered elements
function w3AddClass(element, name) {
 var i, arr1, arr2;
 arr1 = element.className.split(" ");
 arr2 = name.split(" ");
 for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
 }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
 var i, arr1, arr2;
 arr1 = element.className.split(" ");
 arr2 = name.split(" ");
 for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
 }
 element.className = arr1.join(" ");
}