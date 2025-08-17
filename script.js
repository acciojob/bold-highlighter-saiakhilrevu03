function highlight() {
  const strongTags = document.querySelectorAll("strong");
  strongTags.forEach(tag => {
    tag.style.color = "green";
  });
}

function return_normal() {
  const strongTags = document.querySelectorAll("strong");
  strongTags.forEach(tag => {
    tag.style.color = "black";
  });
}

