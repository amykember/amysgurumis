// Details input
var title = document.getElementById('title');
var limbCount = document.getElementById('limb-count');
var colour = document.getElementById('colour');

// Instruction input
var startStitch = document.getElementById('start-st');
var increaseEnd = document.getElementById('inc');
var plain = document.getElementById('plain');
var decrease = document.getElementById('dec');

// Region Input
var usRegion = document.getElementById('region-us');
var ukRegion = document.getElementById('region-uk');
var heightOne;

// Format input
var formatBasic = document.getElementById('format-basic');
var formatDetailed = document.getElementById('format-detailed');

// Pattern Output
var patternOutput = document.querySelector('.pattern-output')

// Increased through functions
var count = 0;
var increaseStart = 0;
var roundNumber = 0;

// =============================================================================
function writePattern() {
    if (ukRegion.checked) {
        heightOne = 'dc'
    } else {
        heightOne = 'sc'
    }
    document.getElementById('pattern-title').innerHTML = (title.value);
    document.getElementById('pattern-details').innerHTML = ('Using ' + colour.value + ', make ' + limbCount.value);
    function magicLoop() {
        roundNumber++
        count++;
        var stitchCount = startStitch.value * count;
        document.getElementById('round-one').innerHTML = ('R' + roundNumber + ':' + ' make a magic loop with ' + startStitch.value + ' ' + heightOne + ' (' + stitchCount + ')');
        roundNumber++;
        count++;
        var stitchCount = startStitch.value * count;
        if (formatDetailed.checked) {
            document.getElementById('round-two').innerHTML = ('R' + roundNumber + ':' + ' 2 ' + heightOne + ' in each ' + heightOne + ' (' + stitchCount + ')');
        } else {
            document.getElementById('round-two').innerHTML = ('R' + roundNumber + ':' + ' [inc 1] rep. ' + startStitch.value + ' times (' + stitchCount + ')');
        }
        while (increaseStart < increaseEnd.value) {
            roundNumber++;
            count++;
            var stitchCount = startStitch.value * count;
            increaseStart++;
            var printIncBasic = ('R' + roundNumber + ': [' + heightOne + ' ' + increaseStart + ', inc 1] rep. ' + startStitch.value + ' times (' + stitchCount + ') <br/>');
            var printIncDetailed = ('R' + roundNumber + ': *1 ' + heightOne + ' in the next ' + increaseStart + ' ' + heightOne + ', 2 ' + heightOne + ' in the next ' + heightOne + '* rep. from * ' + startStitch.value + ' times (' + stitchCount + ') <br/>');
            if (formatDetailed.checked) {
                document.getElementById('increase-rounds').innerHTML += printIncDetailed;
            } else {
                document.getElementById('increase-rounds').innerHTML += printIncBasic;
            }
        }


    }

    magicLoop()

    function allAround() {
        roundNumber++;
        var stitchCount = startStitch.value * count;
        var plainNumber = roundNumber + parseInt(plain.value) - 1;
        if (formatDetailed.checked) {
            document.getElementById('plain-rounds').innerHTML = ('R' + roundNumber + '-' + plainNumber + ': 1 ' + heightOne + ' in each ' + heightOne + ' (' + plain.value + ' rnds of ' + stitchCount + ')');

        } else {
            document.getElementById('plain-rounds').innerHTML = ('R' + roundNumber + '-' + plainNumber + ': ' + heightOne + ' all around (' + plain.value + ' rnds of ' + stitchCount + ')');
        }
        roundNumber = plainNumber;
        increaseEnd = parseInt(increaseEnd.value) + 1;
        while (decrease.value < increaseEnd) {
            roundNumber++
            count--;
            var stitchCount = startStitch.value * count;
            increaseEnd--;
            var printDecBasic = ('R' + roundNumber + ': [' + heightOne + ' ' + increaseEnd + ', dec 1] rep. ' + startStitch.value + ' times (' + stitchCount + ') <br/>');
            var printDecDetailed = ('R' + roundNumber + ': *1 ' + heightOne + ' in the next ' + increaseEnd + ' ' + heightOne + ', ' + heightOne + '2tog in the next 2 ' + heightOne + '* rep. from * ' + startStitch.value + ' times (' + stitchCount + ') <br/>');
            if (formatDetailed.checked) {
                document.getElementById('decrease-rounds').innerHTML += printDecDetailed;
            } else {
                document.getElementById('decrease-rounds').innerHTML += printDecBasic;
            }
        }
    }

    allAround()

    document.getElementById('fasten-off').innerHTML = ('Fasten off')
}

// Copy the pattern text
function copyPattern() {
    var str = patternOutput.innerText
    var el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
}

// Refresh the page
function clearPattern() {
    location.reload();
}
