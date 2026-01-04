// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.
function addElementToDOM(containerId, text) {
  const container = document.getElementById(containerId);
  const element = document.createElement("div");
  element.textContent = text;
  container.appendChild(element);
}

function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId);
  if (element) element.remove();
}

function simulateClick(containerId, message) {
  const container = document.getElementById(containerId);
  container.textContent = message;
}

function handleFormSubmit(formId, outputId) {
  const form = document.getElementById(formId);
  const input = form.querySelector("input");
  const output = document.getElementById(outputId);
  const errorMessage = document.getElementById("error-message");

  
  errorMessage.textContent = "";
  errorMessage.classList.add("hidden");

  if (!input.value.trim()) {
    errorMessage.textContent = "Input cannot be empty";
    errorMessage.classList.remove("hidden");
    return;
  }

  output.textContent = input.value;
  input.value = "";
}


module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
};