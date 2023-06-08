$(document).ready(function(){
  $("header#header").load("../components/header.txt");
  $("footer#footer").load("../components/footer.txt", function() {
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").innerHTML = currentYear;
  });

});
const options = { 
  month: 'short',
  day: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true
};

var currentDatetime = new Date().toLocaleString('en-IN',options);
document.querySelector('input[name="Submitted_On"]').value = currentDatetime;
console.log(currentDatetime)
const scriptURL = "https://script.google.com/macros/s/AKfycbwMzFQSj8zdoo7XQiGCuRaqQ4yMkNzRssfzyB6G-V2LVL1z70hPcNIThzlHxk3kbDS2dg/exec" // enter your public ('access' - 'anyone') deployment URL (NOT test deployment!)
const form = document.forms['google-sheet'];
// console.log('0')
form.addEventListener('submit', e => {
  // console.log('1');
    e.preventDefault();
    // console.log('2');
    var formData = new FormData(e.target);
    var username = formData.get('Name');

    // console.log('3');
    fetch(scriptURL, {method: 'POST', body: new FormData(form)}).then(Response => 
      console.log('4'),
      document.getElementById('popup-greeting').innerHTML = 'Hello, ' + username,
      document.getElementById('popup1').style.cssText = 'visibility: visible; opacity: 1;',
      // console.log('5')

      ).catch(error => console.error('Error!', error.message))
      // console.log('6');
    form.reset();
    // console.log('7')
})

// Fancybox Config
$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close"
  ],
  loop: false,
  protect: true
});


