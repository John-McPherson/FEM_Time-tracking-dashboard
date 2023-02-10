# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![screenshot of webstie](/assets/images/screenshot.png)

### Links

- Solution URL: [ solution URL ](https://www.frontendmentor.io/solutions/responsive-time-tracking-dashboard-built-with-grid-81AgguTJqX)
- Live Site URL: [ live site URL](https://john-mcpherson.github.io/Time-tracking-dashboard/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Less 

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

On of the main learning objectives was to get a better grip of grid something which I feel I have succedeed in doing. I was able to make the card section  of the site fully responsive with only three media queries. 

While the side bar section was built mainly with flex, I was able to learn how the two properties can work together to create a layout quickly, and effectivly. 


```less

        &__profile {
                    display: flex;
                    flex-flow: row wrap;
                    min-height: 325px;

                    background-color: @blue ;
                    border-radius: 1em;
                    padding: 35px;
                    flex-basis: 1;
                    position: relative;

                    @media screen and (max-width: 826px) {
                        grid-column: span 2;
                        min-height: unset;
                    }

                    @media screen and (max-width: 544px) {
                        grid-column: span 1;
                    }

      &__cards {
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                grid-column: span 3;

                @media screen and (max-width: 1104px) {
                    grid-column: span 2;
                }
            }


```
While the focus wasn't on writing good javascript I was happy with the functions I wrote. I have worked with local json in other projects but historically I have used jquery to handle getting the data. Learning to get the data with plain javascript was something I have been meaning to look into. 

```js

const myRequest = new Request('./assets/json/data.json');
fetch(myRequest)
    .then((response) => response.json())
    .then((data) => {
        cards = data
        populateCards(cards);
    })
    .catch(console.error);

```

I was also happy with my function I designed to populate the cards. It saved me manually writing out the html and and gave me more experiance working with JSON. 

```js

function populateCards(cards) {
    let html = '';
    cards.map((card) => {
        if (card) {
            html += `<div class="grid__item timetracker__card ${card.title.toLowerCase().replace(' ', "-")}">
            <div class="timetracker__card__header">
            <h2>${card.title} <span class="timetracker__card__header__dots">...</span></h2>
            <h3>${card.timeframes[selection].current}hrs</h3>
            <p>${selectionText[selection]} - ${card.timeframes[selection].previous}hrs</p>
            </div>
            </div>`
        }
    })
    document.getElementById('timetracker__cards').innerHTML = html

}

```


### Continued development

In the future I would like to solidify my grid knowledge, and hopefully work on a fully responsive design that uses even fewer media queries.



### Useful resources

- Kevin Powell's [Learn CSS Grid the easy way](https://www.youtube.com/watch?v=rg7Fvvl3taU) - helped me with getting to grips with grid. I still feel there's a lot to learn here if I was to be able use grids with the same confidence 
- [Kevin Powell's ](https://www.youtube.com/watch?v=3elGSZSWTbM) - this also helped me solidify my grid learning.


## Author


- Frontend Mentor - [@John-McPherson](https://www.frontendmentor.io/profile/John-McPherson)
-  [Github](https://github.com/John-McPherson)

