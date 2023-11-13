$(document).ready(function(){
    // Show or hide the button based on the scroll position
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#back-to-top-btn').fadeIn();
        } else {
            $('#back-to-top-btn').fadeOut();
        }
    });

    // Scroll to the top when the button is clicked
    $('#back-to-top-btn').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});
function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

function logout() {
    // Add your logout logic here
    alert("Logout clicked. Perform logout actions.");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}
function toggleNotification() {
    var notificationCard = document.getElementById("notificationCard");
    if (notificationCard.style.display === "none" || notificationCard.style.display === "") {
        notificationCard.style.display = "block";
    } else {
        notificationCard.style.display = "none";
    }
}

function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }