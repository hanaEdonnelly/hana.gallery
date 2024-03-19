//Script to make moving accordion for resources page
var accord = document.getElementsByClassName("accordion");
var i;

for(i=0;i<accord.length;i++) {
    accord[i].addEventListener("click", function() {
       
        //Make control button have active styling
        this.classList.toggle("active");

        //Show/hide active panel
        var panel=this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } 
        else {
            panel.style.display = "block";
        }
    }); 
}
