let body = document.querySelector("body");
let containerDiv = document.querySelector(".container");
let grouperDiv = document.querySelector(".group");
let standardDiv = document.querySelector(".standard");
//16 by 16 div is a total of 256 div
//Using Flex, you will need 16 flex-direction-row groups inside a flex-direction-column container


//Step 1 - Create container with flex direction column
let container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

//Step 2 - Create 16 sets of grouping-div with flex direction row
//For each grouping-div, create 16 div within them
function addGrouper () {
    for (let i = 0; i < 16; i++) {
        let grouper = document.createElement("div");
        grouper.classList.add("group");
        container.appendChild(grouper);
    }
}
addGrouper();



 

