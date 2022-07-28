# Note Keeper App with React

## Table of contents

- [Overview](#overview)
  - [The Project](#the-project)
  - [Preview](#preview)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Project

Users should be able to:

- Add and Delete notes
- See hover states for all interactive elements on the page
- See more informations and features of a note by clicking on the note
- See appealing animations on most interactive elements
- See the Zoom in animation on the add button when Take Note is clicked
- See layout animation when a note is clicked

### Preview


https://user-images.githubusercontent.com/66377818/181598091-4ab14476-82df-42b2-a27c-e78461069dba.mp4


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- React Hook
- [React](https://reactjs.org/) - JS library
- [Framer Motion](https://framer.com/motion/) - For Animations
- [Material UI icons](https://mui.com/material-ui/material-icons/) - For Icons

### What I learned

I learnt how to handle complex states in react, using useState hook.
I also learnt how to use the animation library "Framer-Motion" to make shared layout animation, tbh it took me more time to get around this than it took to actually make the whole App.
Some code i'm proud of:

```js
<AnimateSharedLayout>
  {isNoteExpanded ? (
    <>
      <Backdrop handleClose={collapseNote} />
      <ExpandedNote
        collapse={collapseNote}
        deleteNote={deleteNote}
        identity={identity}
      >
        <NoteContent title={title} note={note} />
      </ExpandedNote>
    </>
  ) : (
    <CompactedNote expand={expandNote}>
      <NoteContent title={title} note={note} />
    </CompactedNote>
  )}
</AnimateSharedLayout>
```

That helped me to create shared animations between two components

## Author

- LinkedIn - [Peter Ogbonna](https://www.linkedin.com/in/peter-ogbonna-9889721b2/)
- Twitter - [@peterintech](https://www.twitter.com/Peterintech)

## Acknowledgments

All thanks to [Dr. Angela Yu](https://www.twitter.com/yu_angela) from [The-App-Brewery](https://www.appbrewery.co/) whose course i went through, that helped me build a solid foundation in React and Web development in general, and to Fireship, whose Modal tutorial helped me create mine which was added in the project, and to the awesome team at [Framer](https://framer.com/) for awesome animation library to help bootstrap animations
