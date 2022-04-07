const avatar = document.getElementById("avatarImgScr");

function onSubmit() {
    let gender = document.getElementById("selectText").innerHTML;
    let name = document.getElementById("name").value;

    if (name && gender !== "Gender") {
        if (gender == "Male") {
            avatar.setAttribute("src", `https://joeschmoe.io/api/v1/male/${name}`);
        } else if (gender == "Female") {
            avatar.setAttribute("src", `https://joeschmoe.io/api/v1/female/${name}`);
        } else {
            console.log("other = " + gender);
            avatar.setAttribute("src", `https://joeschmoe.io/api/v1/${name}`);
        }
    } else {
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