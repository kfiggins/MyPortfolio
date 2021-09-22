---
title: React Native Push Notifications
date: "2021-09-21"
description: "How to setup push notifications for iOS and Android using Firebase."
featuredImage: "phone.jpeg"
---

In this article I will show you how to enable push notifciations for both android and iOS using Firebase and React Native. Here are the main steps that we will cover.

    1. Setup Firebase Console
    2. Install Firebase SDK
    3. Make iOS specific changes
    4. Make Android specific changes

# Step 1: Setup Firebase Console

Go to https://console.firebase.google.com/ under the google account you want tied to your project.

> Note: If you don't have a google account, you will need one.

![Firebase Home Page](./welcome_firebase.png)

Click on "Create a project"

- Enter your project name.
- Decide if you want Google Analytics. (Not needed for push notifications to work)

After completing those steps it will take a few minutes for your project to be created. Once finished you will land on a screen that looks like this.

![Firebase Initial Dashboard](./initial_dash.png)
