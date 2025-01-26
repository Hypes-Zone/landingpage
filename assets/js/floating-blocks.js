const movingImagesContainer = document.getElementById('movingImages');

// Create 10 image boxes
const boxes = [];
for (let i = 0; i < 7; i++) {
  const imageBox = document.createElement('div');
  imageBox.className = 'image-box';

  let validPosition = false;
  while (!validPosition) {
    const left = Math.random() * 700;
    const top = Math.random() * 300;

    if (boxes.every(box => {
      const boxRect = box.getBoundingClientRect();
      const distance = Math.sqrt(
        Math.pow(boxRect.left - left, 2) + Math.pow(boxRect.top - top, 2)
      );
      return distance > 50;
    })) {
      imageBox.style.left = `${left}px`;
      imageBox.style.top = `${top}px`;
      validPosition = true;
    }
  }

  movingImagesContainer.appendChild(imageBox);
  boxes.push(imageBox);
}

const imageBoxes = document.querySelectorAll('.image-box');

document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;

  imageBoxes.forEach((box) => {
    const boxRect = box.getBoundingClientRect();
    const centerX = boxRect.left + boxRect.width / 2;
    const centerY = boxRect.top + boxRect.height / 2;

    const deltaX = Math.min(20, Math.max(-20, clientX - centerX));
    const deltaY = Math.min(20, Math.max(-20, clientY - centerY));

    box.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  });
});