$("#arrow-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 1000);
});

//resume button
document.getElementById("resume").onclick = function () {
    location.href = "/assets/pdf/Profile.pdf";
};

// function animateCSS(element, animationName, callback) {
//     const node = document.querySelector(element)
//     node.classList.add('animated', animationName)
  
//     function handleAnimationEnd() {
//         node.classList.remove('animated', animationName)
//         node.removeEventListener('animationend', handleAnimationEnd)
  
//         if (typeof callback === 'function') callback()
//     }
  
//     node.addEventListener('animationend', handleAnimationEnd)
//   }

//     $('#scroll-div').scroll(function() {
//     animateCSS('#scroll-div', 'fadeOut')
//   });