var fields = ["name", "email", "phone", "dob", "gender", "position", "experience", "coverLetter"];
var submitBtn = document.getElementById("submitBtn");
var form = document.getElementById("applicationForm");

submitBtn.onclick = function() {
    var valid = true;

    for(var id of fields) {
      var field = document.getElementById(id);
      var error = field.nextElementSibling;
      
      if (field.value === "") {
        error.style.display = "block"; valid = false;
      } else if (id === "email" && (field.value.indexOf("@") === -1 || field.value.indexOf(".") === -1)) {
        error.style.display = "block"; valid = false;
      } else if (id === "phone" && field.value.length < 7) {
        error.style.display = "block"; valid = false;
      } else if (id === "experience" && field.value < 0) {
        error.style.display = "block"; valid = false;
      } else {
        error.style.display = "none";
      }
    }

    if (valid) {
        alert("✅ Application submitted successfully!");
        form.reset();
    }
}