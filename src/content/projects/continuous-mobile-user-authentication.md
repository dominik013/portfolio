---
title: Continuous mobile authentication
description: Android applications and Python model training for recognising a user through touch and motion.
category: Research
order: 2
year: 2021
stack: [Android, Python, Jupyter, Hidden Markov models]
repo: https://github.com/dominik013/continuous-mobile-user-authentication
---
Research software accompanying **Continuous Mobile User Authentication Using Combined Biometric Traits**, developed from my master's thesis at the University of Applied Sciences Upper Austria, Campus Hagenberg.

Instead of only checking identity when a phone is unlocked, this work explores whether touch gestures and accelerometer readings can help verify the user throughout a session.

## Three parts of the system

1. An Android recorder gathers touch and accelerometer data.
2. Python notebooks extract features and train a Hidden Markov Model using `hmmlearn`.
3. An Android verifier imports the trained model and evaluates new input.

The repository includes the publication's supporting code and data. [Read the paper summary and citation](/papers/continuous-mobile-user-authentication/).
