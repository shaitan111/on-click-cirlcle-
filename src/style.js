const playground = document.querySelector(".playground")

playground.onclick= (e) =>{
const circle = document.createElement("div")
circle.classList.add("circle")


circle.style.left =e.clintx + "px"

circle.style.top =e.clintx + "px"
document.body.append(circle)

}
