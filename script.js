const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

createBtn.addEventListener("click", () => {
  // Create input box (editable paragraph)
  const inputBox = document.createElement("div");
  inputBox.className = "input-box";

  const text = document.createElement("p");
  text.setAttribute("contenteditable", "true");
  text.setAttribute("data-gramm", "false"); // disable grammarly if needed
  text.setAttribute("data-gramm_editor", "false");
  text.setAttribute("data-enable-grammarly", "false");

  const img = document.createElement("img");
  img.src = "images/bin.png";
  img.alt = "Delete note";

  // Append text and image to inputBox
  inputBox.appendChild(text);
  inputBox.appendChild(img);

  // Append inputBox to container
  notesContainer.appendChild(inputBox);
});

// Deleting note on bin icon click
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG" && e.target.closest(".input-box")) {
    e.target.closest(".input-box").remove();
  }
});
