# Sunnyside Agency Landing Page Solution👨‍💻

This is a solution to the [Sunnyside Agency Landing Page Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Useful Resources](#useful-resources)


## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size.
- See hover states for all interactive elements on the page.
- Use animations for smooth transitions between sections, powered by Framer Motion.

### Screenshot

![Sunnyside Landing Page]![image]![image](https://github.com/user-attachments/assets/8e6040cc-4cf3-42df-a76c-08c3d0e0f920)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My Process

### Built With

- React
- JavaScript
- Vite
- Framer Motion
- Tailwind CSS (for styling)
- Mobile-first workflow
- Responsive design with flexbox and grid

### What I Learned

While building this project, I learned how to integrate **Framer Motion** for animations and transitions, and how to structure a project using **Vite** for fast builds. Here's a snippet demonstrating Framer Motion for animation:

```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <h1>Welcome to Sunnyside</h1>
</motion.div>

This was my first time working with Framer Motion, and it significantly enhanced the user experience with smooth animations between sections.
```

### Continued Development
- I plan to explore more complex animation techniques with Framer Motion.
- I would like to improve accessibility (a11y) and ensure all interactive elements are fully keyboard accessible.

### Useful Resources
- Framer Motion Documentation - Helped me implement smooth animations throughout the page.
- Vite Documentation - Guide for setting up the project with Vite.
