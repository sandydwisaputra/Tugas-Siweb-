let selectedType = "";
let selectedColor = "";
const bgPreview = document.getElementById("bgPreview");
const textPreview = document.getElementById("textPreview");
const modal = new bootstrap.Modal(document.getElementById('colorModal'));

bgPreview.addEventListener("click", function() {
  selectedType = "background";
  modal.show();
});

textPreview.addEventListener("click", function() {
  selectedType = "text";
  modal.show();
});

function selectPalette(color) {
  selectedColor = color;
  document.getElementById("colorPicker").value = color;
}

function saveColor() {
  const pickerColor = document.getElementById("colorPicker").value;
  selectedColor = selectedColor || pickerColor;

  if (selectedType === "background") {
    bgPreview.style.background = selectedColor;
  } else {
    textPreview.style.background = selectedColor;
  }

  selectedColor = "";
  modal.hide();
}

function applyColor() {
  document.body.style.backgroundColor = bgPreview.style.background;
  document.body.style.color = textPreview.style.background;
}