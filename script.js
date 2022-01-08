document.getElementById("submitBtn").addEventListener("click", function(e) {
    shortcut();
});

function shortcut() {
    const name = document.getElementById("nameid").value;
    if (name) {
        document
            .getElementById("newImg")
            .setAttribute("src", `https://joeschmoe.io/api/v1/${name}`);
        document.getElementById("newImg").style.display = "flex";
        document.getElementById("svgTag").style.display = "none";
    } else {
        setTimeout(() => {
            document.getElementById("alert").style.opacity = "1";
            document.getElementById("alert").style.visibility = "visible";
            setTimeout(() => {
                document.getElementById("alert").style.opacity = "0";
                document.getElementById("alert").style.visibility = "hidden";
            }, 1000);
        });
    }
}