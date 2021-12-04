var input = document.getElementById("number").value;

function addElement(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.appendChild(element);
}

for (let i = 0; i < input; i++) {
    addElement("slot");
}
