const images = document.querySelectorAll(".product--img");
const previewBox = document.querySelector(".product__box--preview");
// const upArrow = document.querySelector(".up");
// const downArrow = document.querySelector(".down");
// const cart = document.querySelector(".quantity--value");

//generate large preview
function generatePreviewImage(URL) {
  const img = `
  <img
  src=${URL}
  alt="product preview"
  width="400px"
  height="300px"
  class="preview--img"
/>
  `;
  previewBox.innerHTML = "";
  previewBox.insertAdjacentHTML("beforeend", img);
}

//get all the images
images.forEach((img) => {
  const href = img.src;
  img.addEventListener("click", () => generatePreviewImage(href));
});

//calculate position of mouse so we can zoom
previewBox.addEventListener("mousemove", function (e) {
  const rect = e.currentTarget.getBoundingClientRect();
  const scaleX = e.clientX - rect.left;
  const scaleY = e.clientY - rect.top;

  e.currentTarget.querySelector(
    ".preview--img"
  ).style.transformOrigin = `${scaleX}px ${scaleY}px`;
});

//IF USING A DIV INSTEAD OF AN INPUT
// const cartValue = () => {
//   let value = 1;

//   upArrow.addEventListener("click", () => {
//     if (value === 100) return;
//     value += 1;
//     cart.textContent = value;
//   });

//   downArrow.addEventListener("click", () => {
//     if (value === 1) return;
//     value -= 1;
//     cart.textContent = value;
//   });
// };

// //call the cart function
// cartValue();
