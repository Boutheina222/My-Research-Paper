const button1 = document.getElementById("Next");
const image = document.getElementById("image1");
const description = document.getElementById("description");
const section = document.getElementById("section1");
const buttons = document.getElementById("buttons");

const research_paper = document.createElement("div");
const research_images = document.createElement("img");
const button2 = document.createElement("button");

let index = 0;
const sources = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

research_images.className = "research-images";
research_paper.className = "research-paper";

button1.addEventListener('click', function () {
    image.remove();
    description.remove();
    section.appendChild(research_paper);
    research_paper.appendChild(research_images);
    research_images.src = sources[index];
    buttons.appendChild(button2);
    button2.innerHTML = "Previous Page";
    button1.innerHTML = "Next Page";
    index = (index + 1) % sources.length;  // Using sources.length to make the code more adaptable
});

button2.addEventListener('click', function () {
    index = (index - 1 + sources.length) % sources.length;  // Adjusted the decrement logic
    research_images.src = sources[index];
});
