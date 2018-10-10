var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Be part of the movement today!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Be part of the movement today!')
    .pauseFor(2500)
    .deleteChars(7)
    // .typeString('<strong>movement today!</strong>')
    .pauseFor(2500)
    .start();