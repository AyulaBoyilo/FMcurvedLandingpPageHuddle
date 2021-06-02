# Frontend Mentor - Huddle landing page with curved sections

This is a solution to the [Huddle landing page with curved sections challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-curved-sections-5ca5ecd01e82137ec91a50f2). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [How I did it](#how-i-did-it)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for all interactive elements on the page
- Validate forms

### Screenshot

![](./design/active-states.jpg)

### Links

- Solution URL: [GitHub repository](https://github.com/AyulaBoyilo/FMcurvedLandingpPageHuddle/)
- Live Site URL: [GitHub Pages](https://ayulaboyilo.github.io/FMcurvedLandingpPageHuddle/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS and CSS3
- CSS Flexbox
- JavaScript

### How I did it

Since @import is bound to be phased out from Sass, I took the opportunity to reorganize the file structure I use with scss files. The @use has to precede all other rules, so the style.scss file contains only @use rules which call layout partials in proper order to maintain the cascade order for the media queries. The /base and /layouts folder contain \_index.scss files which use @forward rule to send all of the partials from that folder to the file calling that folder.

```scss
// Layouts _index.scss
@forward 'mobile';
@forward 'tablets';
@forward 'desktop';
```

```scss
// Import layouts to style.scss
@use './layouts';
```

### Useful resources

- [@use Sass rule](https://sass-lang.com/documentation/at-rules/use) - Sass documentation on @use rule that will phase out @import

## Author

- Ayula Boyilo
