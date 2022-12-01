const initGallery = ({ container, images }) => {
  const $container = document.querySelector(container);

  const $img = document.createElement("img");
  $img.src = images[0];
  $img.classList = "picture animate__animated animate__bounce";

  $container.appendChild($img);

  let i = 1;

  setTimeout(() => {
    $img.classList.remove("animate__animated");
    $img.classList.remove("animate__bounce");
  }, 1000)

  $img.addEventListener("click", () => {
    $img.classList.add("animate__animated");
    $img.classList.add("animate__bounce");

    $img.src = images[i];
    i += 1;

    if (i === images.length) {
      i = 0;
    }    

    setTimeout(() => {
      $img.classList.remove("animate__animated");
      $img.classList.remove("animate__bounce");
    }, 1000)
  })
}