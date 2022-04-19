![Image description](https://i1.faceprep.in/ProGrad/prograd-logo.png)

# ProGrad Lab | REACT - STARDOM

## Learning Goals

In this exercise, the goal is ProStar in react:

- props and state,
- event handlers

## Getting started

1. Fork this repo
2. Clone this repo

Whenever you create a first significant change, you should make your first commit.

3. Follow these [guidelines to add, commit and push changes](https://github.com/FACEPrep-ProGrad/general-guidelines-labs-project-builders.git).

In the end of this document, you will find guidelines on how to submit the exercise.

## Instructions

### PROGRESSION 1 | Display 5 Star Celebrities

Let's take a look at the starter code.

Inside `resource` folder, you can find `prostar.json`, a JSON file with the producer's contacts. Import this file and **create an array of the 5 first star celebrities** to use as your initial state.

Display that array of 5 prostar in a `<table>` and display the `picture`, `name`, and `popularity` of each contact.

To import `prostar.json` in `App.js`, you can simply use:

```js
import prostar from './prostar.json'
```

At the end of this iteration, your application should look like this:

![Screenshot](https://i1.faceprep.in/ProGrad/pro1.PNG)


### PROGRESSION 2 | Add New Random Prostars

In your application, create a "*Add Random Prostart* button so that every time you click on this button it adds a new random actor.

First randomly select a prostars from the larger `prostars` array. Then add that prostar the array of 5 in your state. Don't forget to `setState()` to cause React to re-render the app.

At the end of this iteration, your website will probably look like this:

![Screenshot](https://i1.faceprep.in/ProGrad/pro2.PNG)


### PROGRESSION 3 | Sort By Name

The producer asked you to add two new buttons to help them to sort their prostars. When you click on one of the buttons it should **sort the table by `name`** (alphabetically) and when click the other it should **sort by `popularity`** (highest first).

Don't forget to `setState()` after you sort!

This is what you may have at the end of this iteration:

![Screenshot](https://i1.faceprep.in/ProGrad/pro3.PNG)

### PROGRESSION 4 | Sort By Popularity

The producer asked you to add two new buttons to help them to sort their prostars. When you click on one of the buttons it should **sort by `popularity`** (highest first).

Don't forget to `setState()` after you sort!

This is what you may have at the end of this iteration:

![Screenshot](https://i1.faceprep.in/ProGrad/pro4.PNG)

### Bonus | Remove Prostars

The producer also would like to remove some of their prostars. Implement a "*Delete*" button on each row of your `<table>` that will let the user remove the contact they clicked.

When they click, you should get the index of the array of that actor and use it to remove the contact from the array. Don't forget to `setState()` after you remove the prostars!

At the end of this iteration, your web page may look like this after playing a little bit with the "*Delete*" buttons.

## Submission

If you didn't add, commit and push the changes you made, this is the last call. :smile:

please share your github links with your Mentors. Your Mentor's will check up your work and provide feedback. 

## Summary

If you managed to do it, good job! :trophy:

We are proud of you!

Happy Coding ProGrad ❤️!

