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
        // }, 1000);

        setTimeout(() => {
            let alert = document.getElementById("alertSelect");
            setTimeout(() => {
                alert.className = alert.className.replace("h", "alertShow").trim();
                setTimeout(() => {
                    alert.className = alert.className.replace("alertShow", "h").trim();
                }, 1000);
            });
        });
    }
}