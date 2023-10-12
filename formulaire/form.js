let button = document.getElementsByClassName("button")[0]
let items = document.getElementsByClassName("items")[0]
button.addEventListener("click", e => {
    items.classList.toggle("active")
})


var tentQuantityInput = document.getElementById("tent-quantity")
var sleepingBagQuantityInput = document.getElementById("sleepingBag-quantity")
var mattressQuantityInput = document.getElementById("mattress-quantity")

var tentPrice = 15
var sleepingBagPrice = 10
var mattressPrice = 5
var totalPrice = document.getElementById("total-price")

function updateTotalPrice() {
    var tentQuantity = parseFloat(tentQuantityInput.value) || 0
    var sleepingBagQuantity = parseFloat(sleepingBagQuantityInput.value) || 0;
    var mattressQuantity = parseFloat(mattressQuantityInput.value) || 0;
    var total = (tentPrice * tentQuantity) + (sleepingBagPrice * sleepingBagQuantity) + (mattressPrice * mattressQuantity)
    totalPrice.textContent = "Your Total: " + total + "DT"
}

tentQuantityInput.addEventListener("input", updateTotalPrice)
sleepingBagQuantityInput.addEventListener("input", updateTotalPrice)
mattressQuantityInput.addEventListener("input", updateTotalPrice)

$("#Home").on('click', function () {

    window.location.href = "/Nesrine-Aziz/mainpage/youcamp.html";
  });
//  popupfunction
$(".btn").on("click",function () {
    console.log("clicked")
    $(".popup").css("display","block")
    $(".inputs").hide()
    setTimeout(function () {
        window.location.href = "/Nesrine-Aziz/mainpage/youcamp.html";
      },7000)})



