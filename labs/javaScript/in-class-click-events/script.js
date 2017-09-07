window.onload = function () {

    const buttonOne = document.getElementById("button1");
    const buttonTwo = document.getElementById("button2");
    const buttonThree = document.getElementById("button3");


    //reference the button I'm chaning, .addE
    buttonOne.addEventListener("click", function () {

        //
        alert("You have clicked button one");
    });

    buttonTwo.addEventListener("click", function () {
        // create variables for new paragraph and what's doing in it. 
        const newParagraph = document.createElement("p");
        const newContent = document.createTextNode("A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).");
        newParagraph.appendChild(newContent);
        //takes this new paragraph and appends it to the body
        document.querySelector("div").appendChild(newParagraph);

    })

    //removing the P

    buttonThree.addEventListener("click", function () {
        // you can use .removeChild to remove child from the div
        document.querySelector("div").removeChild(document.getElementsByTagName("p")[0]);

    });


    const info = document.querySelector("information")
    const child = info.firstChild

    info.removeChild(child)



}
