# Requirements


### Deployment

### Version Control

### Documentation

1.  [ ] List technologies used
1.  [ ] Document your planning and tell a story about your development process and problem-solving strategy.
1.  [ ] List unsolved problems which would be fixed in future iterations.
1.  [ ] Link to wireframes and user stories.

As a user, I can sign up.
As a user, if I am not logged in, I should not see elements that shouldn't be available to me.
As a user, I can log in.
As a user, when I am logged in, I can start a new game.
As a user, when I start a new game, I see an empty game board.
As a user, when I start a new game, I should be player 'X'.
As a user, after I click an empty square, it should display my 'mark'.
As a user, after I click an empty square, I should switch to the next player.
As a user, after 3 marks in a row, the player should win.
As a user, after no empty squares and no winners, I should tie.


### Technical Specifications

1.  [ ] Use a custom game engine written by you.
1.  [ ] Be a single-page application, no browser refresh.
1.  [ ] Render a game board in the browser.
1.  [ ] Switch turns between X and O (or whichever markers you select).  Tip:  Assume player X is the first player to start the game.
1.  [ ] Visually display which side won if a player gets three in a row or show a draw if neither wins.
1.  [ ] Support playing multiple games, one at a time.
1.  [ ] Use jQuery for DOM manipulation and event handling.
1.  [ ] Use AJAX for interacting with a provided API.

### API Specifications

1.  [ ] Create new games on the server. (CREATE)
1.  [ ] Update a game by storing new moves. (UPDATE)
1.  [ ] Visually display the results of retrieving game statistics, such as total games won by a user. (READ)
1.  [ ] Give feedback to the user after each action.

### Auth Specifications

1.  [ ] Signup with email, password, and password confirmation.
1.  [ ] Login with email and password.
1.  [ ] Logout when logged in.
1.  [ ] Change password with current and new password.
1.  [ ] Signup and Signin must only be available to not signed in users.
1.  [ ] Logout and Change password must only be available to signed in users.
1.  [ ] Give feedback to the user after each action's success or failure.
1.  [ ] All forms must clear after submit success or failure

### DO NOT!!

Your app **must not**:
1.  [ ] Delete your repository at any time or start over.
1.  [ ] Rely on refreshing the page for any functionality.
1.  [ ] Have any user-facing bugs.
    -  [ ] Display non-functional buttons, nor buttons that do not successfully complete a task.
    -  [ ] Show actions at inappropriate times (example: sign out button when not signed in).
    -  [ ] Forms not clearing at appropriate times (example: sign up form not clearing after success).
1.  [ ] Allow the same game to be played after a player has won or tied.
1.  [ ] Allow players to move in the same square more than once.
1.  [ ] Change players when an invalid move is made.
1.  [ ] Use alerts for anything.
1.  [ ] Display errors or warnings in the console.
1.  [ ] Display debugging messages in the console.
