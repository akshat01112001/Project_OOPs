var input = document.getElementById("number").value;

function removeElement(elementId) {
    var element = document.getElementsByClass(elementId);
    element.parentNode.removeChild("slot");
}

for (let i = 0; i < input; i++) {
    removeElement("slot");
}