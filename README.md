### Description
This app (You In?) was built as a team project over the course of a Human-Computer Interaction class.

Preceding the code implementation, we executed user analysis, task analysis, and several prototype iterations and evaluations.

During the prototype and code implementations, we focused on integrating the most appropriate UI design principles, UI patterns, and interaction styles to ensure users could quickly and easily navigate the app.

A summary of the design and development process can be found here: https://kimclar.github.io/you-in.html

*The app currently has no backend and, instead, works on dummy data.

### Collaborators
- Arielle Bishop (https://github.com/ArielleBishop)
- Clara Kim (https://github.com/kimclar)
- Shravya Raj (https://github.com/shravyaraj)
- Sunny Lee (https://github.com/sunnylee19)

### You In?

You In? is an app that aims to make it easier for friends to plan meetups.

Basically, it works by:
1. Users sharing their available free times (“events”) along with details they might want to do during that time (e.g., meals, drinks, study buddy). 
2. Users seeing and joining their friend’s “events” if they’re available.

![You In? Screenshot](https://github.com/kimclar/you-in-app/blob/master/You-In-Explore-Screenshot.png)

###### Explore
- Lists events that the user's friends have posted.
- The user can click on and join/leave events in this tab.
- Events the user has joined are highlighted in blue.
###### Hosting
- Lists events that the user has posted.
- The user can click and edit/delete events in this tab.
###### Friends
- Lists the user's friends.
- The user can send/accept friend requests and edit/delete friends in this tab.
###### Circles
- Lists the user's circles, which are groups the user organizes his/her friends into.
- The user can edit circles in this tab.

### To Run
*Run on Android for an optimal experience.*
1. Install Node.js.
2. In the terminal, install the Nativescript CLI with the command `npm install -g nativescript`.
3. On your phone, download the NativeScript Playground and NativeScript Preview apps from the Play Store.
4. In the terminal (in the you-in directory), run `tns preview`.
5. Scan the QR code generated in the terminal with the NativeScript Playground app.
6. The app preview will automatically open in the NativeScript Preview app.

For more information, see https://docs.nativescript.org/tooling/docs-cli/project/testing/preview.
