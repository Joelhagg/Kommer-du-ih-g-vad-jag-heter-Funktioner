const savedInput = localStorage.getItem("namn");
console.log("savedInput:", savedInput);

if (savedInput) {
  document
    .getElementById("item")
    .appendChild(document.createElement("p")).innerHTML =
    savedInput +
    '<button id="removeButton" onclick="removeItem()">Remove</button>';
}

console.log("savedInput:", savedInput);

const getInputValue = () => {
  const input = document.getElementById("saveItem").value;
  console.log("input:", input);
  saveToLocalStorage(input);
};

const saveToLocalStorage = (input) => {
  localStorage.setItem("namn", input);
  location.reload();
};

const removeItem = () => {
  localStorage.removeItem("namn");
  location.reload();
};
