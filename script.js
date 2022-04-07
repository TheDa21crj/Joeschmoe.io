function onSubmit() {
    let gender = document.getElementById("selectText").innerHTML;
    let name = document.getElementById("name").value;

    if (name && gender !== "Gender") {
        if (gender == "Male") {
            console.log("Male = " + gender);
        } else if (gender == "Female") {
            console.log("Female = " + gender);
        } else {
            console.log("other = " + gender);
        }
    } else {
        console.log("alert");
    }
}