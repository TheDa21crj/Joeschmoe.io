document.getElementById("submitBtn").addEventListener("click", function(e) {
    shortcut();
});

function shortcut() {
    const name = document.getElementById("nameid").value;
    if (name) {
        document
            .getElementById("newImg")
            .setAttribute("src", `https://joeschmoe.io/api/v1/${name}`);
    }
}