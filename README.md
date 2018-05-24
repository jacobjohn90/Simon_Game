Welcome to the Simon game Readme! The basic gist of the game is:
    Once the user presses/clicks the start button, the Computer generates a random number that correlates with one of the colored buttons (Red, Green, Blue, Yellow). The user is then allowed to click any button they would like. The object of the game is copy the computer's sequence. If the user clicks on the wrong button at the wrong time, the user will get an error chime as well as an alert indicating that the previous button clicked was incorrect. As the user gets the sequence correct, a "correct chime" will play, the level indicator will increase by one, and the next round will begin. The computer will replicate the previous sequence and add an another random selection at the very end. Wash and repeat until the user cannot replicate the computer sequence correctly. If the current level indicator is greater than the highest level indicator, congratulations, you set a new highest level!
    There are also 3 difficulty levels, which changes the speed in which the computer seqence will be displayed. It is currently set at 1 second per button for easy, 0.7 seconds per button for medium, and 0.4 seconds per button for hard.

The game: http://simon-game-jacobjohn.bitballoon.com/ <br />
Trello board: https://trello.com/b/zufgSrnk/wdi-project-1-simon <br />
Wireframe: https://imgur.com/a/ad806vt <br />


Technologies, Libraries, and/or Frameworks used:
    - bootstrap
    - jQuery
    - Popper.js


Things to change/implement in V2:
    I would love to be able to have the highest level remain even after a browser refresh. I think this goes along to the side of back end development, so hopefully one day this will be implemented! Also, while the game is active, you're able to change the difficulty level. I would like it to remain the same difficulty level until the game is over.