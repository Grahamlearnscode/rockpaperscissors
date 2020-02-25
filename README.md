# rockpaperscissors
Play rounds of a 'rock, paper, scissors' game against the computer

Part of The Odin Project full stack js track: https://www.theodinproject.com/courses/web-development-101/lessons/rock-paper-scissors

Create a r/p/s game that can be played from the console. 
Do this using 3 functions: Computer should choose a random entry; player should choose an entry; compare player's entry to computer's choice and then declare a winner with specifics e.g. 'You lose! Paper beats Rock'.
Make the inputs case-insensitive.
Return the results.
Create a fourth function that handles 5 rounds of gameplay and declares an overall winner.

I went a little further than the spec and added a rudimentary UI to it. It's working fine in testing and I can't spot any major issues. It validates entries and logs invalid ones to the console; ultimately I'd want it to re-run from the prompt for the player's choice when that happens, but couldn't figure out a way to do that. Definitely one to revisit when I know more, for that and also to make the loop of 5 rounds happen automatically.