    let verlauf = anime.timeline({
	autoplay: false,
	loop: true,
	});

    let pos = 0,
	dist = 1000;


    document.getElementById('ButtonForward').addEventListener('click', function() {
	    pos = pos + dist;
	    verlauf.seek(pos);
	});
    document.getElementById('ButtonBack').addEventListener('click', function() {
	    if (pos > 0) {
		    pos = pos - dist
		}
	    verlauf.seek(pos);
	});

    verlauf.add({
	targets: '#layer1',
	opacity: [0, 1],
	duration: 1000,
	}).add({
	targets: '#layer4',
	opacity: [0, 1],
	duration: 1000,
	}).add({
	targets: '#layer3',
	opacity: [0, 1],
	duration: 1000,
	}).add({
	targets: '#layer2',
	opacity: [0, 1],
	duration: 1000,
	}).add({
	targets: '#layer9',
	opacity: [0, 1],
	duration: 1000,
	}).add({
	targets: '#layer10',
	opacity: [0, 1],
	duration: 1000,
	}).add({
	targets: '#layer7',
	opacity: [0, 1],
	duration: 1000,
	}).add({
	targets: '#layer8',
	opacity: [0, 1],
	duration: 1000,
	}).add({
	targets: '#layer5',
	opacity: [0, 1],
	duration: 1000,
	}).add({
	targets: '#layer6',
	opacity: [0, 1],
	duration: 1000,
	}).add({
	targets: '#layer5',
	opacity: [1, 0],
	duration: 1000,
	}).add({
	targets: '#layer7',
	opacity: [1, 0],
	duration: 1000,
	}).add({
	targets: '#layer9',
	opacity: [1, 0],
	duration: 1000,
	})
