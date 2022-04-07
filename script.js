function onSubmit() {
    let gender = document.getElementById("selectText");
    let name = document.getElementById("name").value;

    // console.log(name);
    if (name === "" || gender !== "Gender") {
        console.log("return");
    } else {
        console.log("send data");
    }
}