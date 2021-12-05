document.getElementById("submitBtn").addEventListener("click", function(e) {
    const name = document.getElementById("nameid").value;
    document
        .getElementById("newImg")
        .setAttribute("src", `https://joeschmoe.io/api/v1/${name}`);
});