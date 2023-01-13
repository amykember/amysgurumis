+++
title = "Pattern Maker"

# Don't change the lines below, run "Fix Stuff" in VS Code. Refer to README.md.
path = "/pattern-maker"
weight = 2

[extra]
styles = [ "pattern-maker.css" ]
scripts = [ "pattern-maker.js" ]
+++

This page helps you write basic amigurumi patterns. Enter the information requested in each field. 
<ul>
<li>Section: The part of the amigurumi (e.g., head, body, arms, legs).</li>
<li>Number: The number of items to make (e.g., for the body enter 1, for arms enter 2).</li>
<li>Colour: The colour of yarn to use for the section.</li>
<li>Start with: The number of stitches to start with in the magic ring (e.g., 6).</li>
<li>Increase to: The number of stitches between the increases in the final increase round.</li>
<li>Plain rounds: The number of rounds to single crochet between increasing and decreasing.</li>
<li>Decrease to: The number of stitches between the decreases in the final decrease round.</li>
<li>Crochet terms: US or UK crochet terminology.</li>
<li>Format: Basic is condensed for readability; Detailed spells out each step for clarity</li>
</ul>

Click _Submit_ to generate instructions. Copy to your clipboard so you can easily paste this text into a document. Then click _Refresh_, repeat for each section, and your pattern is ready to go! Note that once you click _Submit_, making changes to the fields and clicking _Submit_ again won't accurately update the pattern. You'll need to click _Refresh_ and start again to make changes.

<div class="pattern">
  <div class="pattern-input">
    <form id="pattern-form">
      <p>
        <label for="title">Section</label>
        <input type="text" id="title" name="title" autocomplete="off"></input>
      </p>
      <p>
        <label for="limb-count">Number</label>
        <input type="number" id="limb-count" name="limb-count"></input>
      </p>
      <p>
        <label for="colour">Colour</label>
        <input type="text" id="colour" name="colour" autocomplete="off"></input>
      </p>
      <p>
        <label for="start-st">Start with</label>
        <input type="number" id="start-st" name="start-st"></input>
      </p>
      <p>
        <label for="inc">Increase to</label>
        <input type="number" id="inc" name="inc"></input>
      </p>
      <p>
        <label for="plain">Plain rounds</label>
        <input type="number" id="plain" name="plain"></input>
      </p>
      <p>
        <label for="dec">Decrease to</label>
        <input type="number" id="dec" name="dec"></input>
      </p>
    </form>
    <div class="radio-buttons-container">
      <div class="radio-buttons">
        <p>Crochet terms</p>
        <input type="radio" id="region-us" name="region"></input>
        <label for="region-us"><img src="/assets/us.svg" width="35";></label>
        <input type="radio" id="region-uk" name="region"></input>
        <label for="region-uk"><img src="/assets/uk.svg" width="35";></label>
      </div>
      <div class="radio-buttons">
        <p>Format</p>
        <input type="radio" id="format-basic" name="format"></input>
        <label for="format-basic">Basic</label>
        <input type="radio" id="format-detailed" name="format"></input>
        <label for="format-detailed">Detailed</label>
      </div>
    </div>
    <div class=controls>
      <button class="button" id="submit" onClick = "writePattern()">Submit</button>
      <button class="button" id="copy" onClick = "copyPattern()">Copy</button>
      <button class="button" id="refresh" onClick = "clearPattern()">Refresh</button>
    </div>
  </div>
  <div class="pattern-output">
    <div id="pattern-title"></div>
    <div id="pattern-details"></div>
    <div id="round-one"></div>
    <div id="round-two"></div>
    <div id="increase-rounds"></div>
    <div id="plain-rounds"></div>
    <div id="decrease-rounds"></div>
    <div id="fasten-off"></div>
  </div>
</div>
