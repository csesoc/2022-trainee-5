function revealSelfie () {
  const selfie = document.getElementById('selfie')

  if (selfie.style.display === 'none') {
    selfie.style.display = 'block'
    console.log('Selfie is now visible! 😸')

    const selfieBounds = document
      .getElementById('selfie')
      .getBoundingClientRect()

    emojisplosion({
      position: {
        x: selfieBounds.left - window.innerWidth / 2 + 100,
        y: selfieBounds.top - 100
      }
    })
  } else {
    selfie.style.display = 'none'
    console.log('Selfie is hidden! 😿')
  }

  console.log(selfieBounds.top)
}
