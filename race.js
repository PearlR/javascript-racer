
/* global prompt */

// Woohoo, let's get racing!
// Loads page before you can start using JavaScript

document.addEventListener('DOMContentLoaded', function () {
  // Let's get our dance trance cats party started! Let's grab our kittens and race tracks from HTML

  var cat1TR = document.getElementById('cat1TR')
  var cat2TR = document.getElementById('cat2TR')

  // Ask how long the track should be? Let's build stuff...

  var trackLength = prompt('Please pick a number between 4 and 8.')

  // Build the track

  for (var i = 0; i < trackLength - 1; i++) {
    cat1TR.appendChild(document.createElement('td'))
    cat2TR.appendChild(document.createElement('td'))
  }

  // Need to add limitations so people can't enter outside the specified track length

  // Add kittens to track

  var cat1TD = cat1TR.querySelectorAll('td')
  var cat2TD = cat2TR.querySelectorAll('td')

  // Where is the start?

  var cat1position = 0
  var cat2position = 0

  // Finish line is in sight!

  cat1TD[trackLength - 1].className = 'finish'
  cat2TD[trackLength - 1].className = 'finish'

  cat1TD[trackLength - 1].innerHTML = '<img src="http://4.bp.blogspot.com/-37i16PE-MCk/Ta4TimYsDyI/AAAAAAAAB74/UgcuVcuv1x8/s1600/petshop_catnip.png" alt="winner" width="50px">'
  cat2TD[trackLength - 1].innerHTML = '<img src="http://4.bp.blogspot.com/-37i16PE-MCk/Ta4TimYsDyI/AAAAAAAAB74/UgcuVcuv1x8/s1600/petshop_catnip.png" alt="winner" width="50px">'

  // Forward ho! We have some key pressing business to attend to...
  // Assigns key to key press
  // A key = 65, L key = 76

  document.addEventListener('keyup', function (event) {
    if (event.which === 65) {
      if (cat1position === trackLength - 1) {
        catWins()
        return
      }

      forwardHoKitten(cat1TR, cat1position++)
    } else if (event.which === 76) {
      if (cat2position === trackLength - 1) {
        catWins()
        return
      }

      forwardHoKitten(cat2TR, cat2position++)
    }
  })

// Makes the cats move when key is pressed

  function forwardHoKitten (track, position) {
    track.children[position + 1].innerHTML = track.children[position].innerHTML
    track.children[position].innerHTML = ''
  }

  // Winner winner chicken dinner
  function catWins() {
    document.getElementById('winner').setAttribute('class', 'finish')
  }

  // Start all over again! Because who wouldn't want to do this 10x over?!

  var startAgain = function () {
    // arrgh gotta finish this!
  }

// closing the document loader-thingy
})
