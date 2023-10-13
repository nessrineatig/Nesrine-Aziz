/*class*/
function Campingcenter(name) {
  var a =  {
    // name,
    // list: [],
    // addCenter: addCenter,
    // displayCenters:displayCenters
  };
  a.displayCenters = displayCenters
  a.name=name
  a.addCenter = addCenter 
  a.list = []
  return a 
}
/*id generator*/
function generateID() {
  var count = 0;
  return function () {
    return count++;
  };
}

var id = generateID();

/** factory function */
function addCenter(name,city, description, images,price,rating) {
  var Center = {
    name,
    city,
    description,
    images,
    rating,
    price,
    id: id(),
  };
  this.list.push(Center);
  return Center;
}
/**initiating the class */
var YouCamp = Campingcenter("You Camp");

/**creating data using our factory function */
 YouCamp.addCenter("Il Sogno Camp", 'Sousse', "At the Ecological Camping Center Il Sogno in Sidi Bou Ali, you can stay in wooden cabins nestled in the heart of nature within a camping area that respects nature and the environment",[
  "./images/sidi bou sousse.jpg",
  "./images/sidi om 2.jpg"],60,4.5);

YouCamp.addCenter("Bouhertma",'Jendouba','"The Bouhertma Outdoors Ecological Center is located on the shores of the Bouhertma Dam in Fernana, Jendouba Governorate. The center features a restaurant offering full-board Tunisian specialties. For entertainment, it offers various amenities, including a pergola, kayaks, a volleyball and tennis court, archery, a childrens playground, and other personalized activities."', [
  "./images/Bouhertma.jpg",
  "./images/omhertma2.jpg"],50,4.5);
  
  YouCamp.addCenter("Bni Mtir", 'Ain Drahem', "The center is located on the shore of the Beni Mtir Dam, which gives it exceptional charm. It's a 2-hour and 20-minute drive from the capital. Its location is in a region abundant with natural beauty, including rivers, waterfalls, and the dam, making it one of the most visited places in Tunisia. So, if you haven't visited it yet, what are you waiting for?", [
    "./images/bni mtir outdoor.jpg",
    "./images/Bni mtir 2.jpg"],35,5);
    YouCamp.addCenter("Zen Camp",'Ain Drahem', "Located in Ain Drahem, Zain Camp is a camping center with multiple facilities, featuring charming wooden houses set amidst beech trees. Visitors come here seeking peace and tranquility, far from the city is hustle and bustle. The camp offers a range of wooden cabins for accommodation, connected by stone pathways. Nighttime activities and events, including BBQ nights and quiet musical celebrations, make it an ideal getaway.", [
      "./images/camping zen.jpg",
      "./images/zen camp.jpg"],40,4);
      YouCamp.addCenter('Ain Soltan','Jendouba','The Ain Soltan Camping Center is the ideal place for those looking to escape city life. It is a destination perfectly suited for hiking and exploration.',["./images/ainsoltan2.jpg","./images/Ain soltan.jpg"],55 ,5)
      
      function generateStarRating(rating) {
        var stars = '';
        for (var i = 1; i <= 5; i++) {
          if (i <= rating) {
            stars += '<span class="star">&#9733;</span>'; // Unicode character for a solid star
          } else {
            stars += '<span class="star">&#9734;</span>'; // Unicode character for an outlined star
          }
        }
        return stars;
      }


/** displaying one center*/
 function display(center) {
  var id = center.id;
  var starRating = generateStarRating(center.rating);
  console.log(starRating)
  $("#CENTERS").append(`
  <div class = 'center' id = 'center${id}'>
  <h2 class = 'name' id = 'name${id}'>${center.name}</h2>
  <div class = "img-container"><img class = "image" id = 'image${id}' src='${center.images[0]}' alt = '${center.images[1]}' /> </div>
  <p class="city" id = "city${id}">${center.city}</p>
  <p class = "descr" id = "descr${id}">${center.description}</p>
  <p class ='price' id='price${id}'>${center.price} Dt</p>
  <p class = "rating" id = "rating${id}" >${starRating}<small class = "joke">3lik amen allah</small></p>
  <p class="comments" id="comments${id}"></p>
  <input placeholder="add comment" id="commentInput${id}">
  <button class="add-comment" id="addComment${id}">Submit</button>
</div>
 `);
}


/** displaying all of the centers through iteration */
function displayCenters() {
  $("#CENTERS").empty();
  for (var i = 0; i < this.list.length; i++) {
    display(this.list[i]);
  }
}

YouCamp.displayCenters();





/** Image toggle */
// this was why it didnt want to toggle when we searched !! big mistake 
// $(".image").on('click',function () {
//   var id = this.id;
//   var src = this.src;
//   var alt = this.alt;
//   $(`#${id}`).attr("src", alt);
//   $(`#${id}`).attr("class", "image");
//   $(`#${id}`).attr("alt", src);
// });
$("#CENTERS").on('click', '.image', function () {
  var id = this.id;
  var src = this.src;
  var alt = this.alt;
  $(`#${id}`).attr("src", alt);
  $(`#${id}`).attr("class", "image");
  $(`#${id}`).attr("alt", src);
});
 


// add comment function
// $(".add-comment").on('click', function () {
//   var id = this.id.replace('addComment', ''); 
//   var commentInput = $("#commentInput" + id);
//   var commentText = commentInput.val();

//   if (commentText) {
//     var commentContainer = $("#comments" + id);
//     commentContainer.append('<p>' + 'iyed:' + " " + commentText + '</p>');
//     commentInput.val(''); 
//   }
// });
$("#CENTERS").on('click', '.add-comment', function () {
  var id = this.id.replace('addComment', ''); 
  var commentInput = $("#commentInput" + id);
  var commentText = commentInput.val();

  if (commentText) {
    var commentContainer = $("#comments" + id);
    commentContainer.append('<p>' + 'iyed:' + " " + commentText + '</p>');
    commentInput.val(''); 
  }
});




$("#cts").on("click", function () {
  var value = $("#search").val();
  
  var filtered = YouCamp.list.filter(function (center) {
    return center.name.toLowerCase().includes(value.toLowerCase())|| center.city.toLowerCase().includes(value.toLowerCase());
  })
  $("#CENTERS").empty();
  filtered.forEach(function (center) {
   display(center);
  });
})


$("#book").on('click', function () {
  window.location.href = "/Nesrine-Aziz/formulaire/formulaire.html";
});