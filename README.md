# Tic-Tac-Toe

## Planning and development process

My plan consisted of developing all the api requests first and create scripts to test the layout of the `JSON` data that was being received/sent. From there I would create a very rudimentary `html` layout to attach event listeners to. I started with the authentication process first because the game itself would require the tokens linked to the user to function so it was important to tackle first. This would provide the structure to implement my UI to have real interactivity for the user. After finishing that would come the game handlers. This means creating the all the visuals as well as the interactivity of the game, but without any of the game logic. Once this would be done I could then tackle the game logic and address all the requirements to make it a functional Tic-Tac-Toe game. For the last measure I ensured that all the elements were only shown when they should be shown. Lastly would come the `CSS`; it is important to have a functional game, however the styling for it was not at the forefront of my development and thus came last. I am also not very artistically inclined and isn't a requirement to have a functioning game so it came last on the todo list.

For the most part my plan was executed according to plan, however there was some slight variance in the order of specific items like instead of handling all API requests at once, I, instead, did one at a time and linked it to the respective game element that would require and test its functionality and debug any bugs that might appear. This was vital for my problem solving as any issues that arose I could specifically target the known issue because it was a linear set of progression I was doing. For example, if my Get data button was throwing an error, I knew that previous state of the client was functional so I could immediately look at the API code or the event requesting the API.

## Technologies used

html, css, bootstrap, javascript, jQuery, JSON

Ajax, GruntJS, npm



## Unsolved Problems & Future Iterations

There are no specific unsolved problems, however a list of upgrades that can be made to the game that would see fit for future iterations below:

1. [ ] Automatic sign in after signing up
2. [ ] Allowing custom markers rather than the traditional 'X's and 'O's
3. [ ] Allowing users to see and select an unfinished game and pick back up where they left off
4. [ ] Multiplayer functionality where different users can compete from different devices
5. [ ] Improve code readability and stucture
6. [ ] Improve user visual experience

## User Stories and wireframes

<details>
  <summary>Click to expand</summary>

  ## User Stories

  As a user, I can sign up.
  As a user, if I am not logged in, I should not see elements that shouldn't be available to me.
  As a user, I can log in.
  As a user, when I am logged in, I can start a new game.
  As a user, when I start a new game, I see an empty game board.
  As a user, when I start a new game, I should be player 'X'.
  As a user, after I click an empty square, it should display my 'mark'.
  As a user, after I click an empty square, I should switch to the next player.
  As a user, after 3 marks in a row, the player should win and receive prompt.
  As a user, after no empty squares and no winners, I should tie.
  As a user, I should be able to play with no interruptions in the page.
  As a user, I should be able to retreive game history.
  As a user, I should be able to log out.
  As a user, I should be able to change my password.
  As a user, after the game is over I should not be able to keep clicking.

  ## Wireframes

</details>
