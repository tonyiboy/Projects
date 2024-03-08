let boxes = document.querySelectorAll(".box")
let image = document.querySelector(".image")

boxes.forEach(box => {
    box.addEventListener("dragover",(e) => {
        e.preventDefault()
    });

    box.addEventListener("drop", () => {
        box.appendChild(image)
    })
})