---
title: Continuous Mobile User Authentication Using Combined Biometric Traits
description: Exploring how touch gestures and phone motion can verify who is using an Android device after it has been unlocked.
authors: [Dominik Reichinger, Erik Sonnleitner, Marc Kurz]
date: 2021-12-10
journal: Applied Sciences
volume: 11
issue: 24
article: 11756
doi: 10.3390/app112411756
url: https://www.mdpi.com/2076-3417/11/24/11756
code: https://github.com/dominik013/continuous-mobile-user-authentication
---
Unlocking a phone verifies its user at a single moment. This paper explores how authentication can continue during use by combining **touch gestures and accelerometer data**. We implemented an Android system that records these signals and uses a **Hidden Markov Model** to distinguish the authenticated user from others. The research connects mobile application development, behavioural biometrics, and machine learning.

## From research to software

The supporting repository includes an Android data recorder, Python model-training notebooks, and an Android verification application. It allows the implementation to be explored alongside the publication.

## Citation

Reichinger, D.; Sonnleitner, E.; Kurz, M. Continuous Mobile User Authentication Using Combined Biometric Traits. *Applied Sciences* **2021**, *11*(24), 11756. [https://doi.org/10.3390/app112411756](https://doi.org/10.3390/app112411756).
