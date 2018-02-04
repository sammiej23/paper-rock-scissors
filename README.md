# Paper/scissors/rock game

Focus is on simplicity.

- I chose Jasmine as a test framework, and tests are run at the command line.
- The UI is very simple, narrowing the focus for MVP.
- There is minimal CSS and I've used js 1.5. No transpilation from ES6 to ES5 is needed.
- Being simple, it should work across many browsers. The target browser is Chrome.
- More could be done to make it responsive across a range of devices.
- There's no validation on the human input to the game, this could be added.
- If I had more time I'd add a watcher to the js files so tests are run automatically when changes are made.

The game logic then is abstracted away from the UI, and testable separately. Tests were written first. I refactored
the game logic which determines who a winner is towards the end, away from many if/else statements to a loop
based on a simple nested array. The tests gave me confidence that I'd not broken anything!

The game is aimed at the more mature game player :) again, with a focus on simplicity.

### Prerequisites

Node and npm installed

### Installing

npm install


## Running the tests

npm test

## Authors

* **Sam Jones**

## Acknowledgments

* Lily the cat for getting in the way when I'm concentrating
