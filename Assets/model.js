// Get the modal
var modal = document.getElementById("zeldaModal");

// Get the button that opens the modal
var resumeButton = document.getElementById("resumeButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the "Resume" button, open the modal
resumeButton.onclick = function (event) {
    event.preventDefault(); // Prevent the default behavior of the link
    modal.style.display = "block";
    document.body.classList.add('blackout');
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    document.body.classList.remove('blackout');
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove('blackout');
    }
};

// Additional code for triggering the modal when the mouse leaves the window
const exitEvent = e => {
    if (!e.toElement && !e.relatedTarget) {
        document.removeEventListener('mouseout', exitEvent);
        modal.style.display = "block";
        document.body.classList.add('blackout');
    }
};

document.addEventListener('mouseout', exitEvent);