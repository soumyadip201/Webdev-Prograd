
![Image description](https://i1.faceprep.in/ProGrad/prograd-logo.png)

# ProGrad PROJECT BUILDER | REACT - QUIZ STAGE II - DYNAMIC RENDER

## Learning Goals

In this exercise, the goal is to learn building a complete quiz app on a stage by stage basis:

- props and state,
- how to work with event handlers.
- work with maps and filters
- work with json object.

## Getting started

1. Fork this repo
2. Clone this repo

Whenever you create a first significant change, you should make your first commit.

3. Follow these [guidelines to add, commit and push changes](https://github.com/FACEPrep-ProGrad/general-guidelines-labs-project-builders.git).

In the end of this document, you will find guidelines on how to submit the exercise.

### Introduction

We will continue to improve our code from where we left previously. We will work on the Quiz component today. We will render the data from the json file rather than keeping it 
static and we will complete the event handlers for previous, next and quit. 

**Note: use rcc to generate the code template. Please keep everything as a static output on the stage - 1. We will make it dynamic over the course**.  

So let's get started!
Check below to see the overall output: You will be trying to replicate this

![Image description](https://i1.faceprep.in/ProGrad/q2.PNG)

### PROGRESSION 1 | KEEP IT IN AN ARRAY
Remove the static component and create a json file called as questions. Make an array of 15 questions with options an answers.Keep your questions.json inside resources folder inside the src folder.

```
[
 {
        "question": "Which is the only mammal that can’t jump?",
        "optionA": "Dog",
        "optionB": "Elephant",
        "optionC": "Goat",
        "optionD": "Lion",
        "answer": "Elephant"
    }
]
```
### PROGRESSION 2 | GO TO PREVIOUS
Complete the event handler for previous button such that you should dynamically go back to the previous question in the array.

### PROGRESSION 3 | JUMP TO NEXT
Complete the event handler for next button such that you should dynamically go to the next question in the array.

### PROGRESSION 4 | I WANT TO QUIT
When the user clicks the quit button, the question should stop getting displayed.

## Submission

If you didn't add, commit and push the changes you made, this is the last call. :smile:

please share your github links with your Mentors. Your Mentor's will check up your work and provide feedback. 

## Summary

If you managed to do it, good job! :trophy:

We are proud of you!

Happy Coding ProGrad ❤️!

