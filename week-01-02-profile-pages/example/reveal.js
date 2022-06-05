function revealSelfie () {
  const selfie = document.getElementById('selfie')

  // Explanation: Gets active value of display property of element
  // 'selfie', then checks if it's 'none'.
  // WHY NOT x.style.display? It's empty initially - accessing
  // this property checks for values that have been set
  // programatically.
  if (window.getComputedStyle(selfie).display === 'none') {
    selfie.style.display = 'block'
    console.log('Selfie is now visible! 😸')

    // Explanation: Get coordinates of element 'selfie' relative
    // to viewport.
    const selfieBounds = document
      .getElementById('selfie')
      .getBoundingClientRect()

    emojisplosion({
      position: {
        // Adjust position to center of image
        x: selfieBounds.left - window.innerWidth / 2 + 110,
        y: selfieBounds.top - 100
      }
    })
  } else {
    selfie.style.display = 'none'
    console.log('Selfie is not visible! 😿')
  }
}
