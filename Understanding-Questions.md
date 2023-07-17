# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* 
-The onClick value calls the onClick function in App.js
-the onClick function dispatches the addOne function 
-the addOne function returns the dispatch action type of ADD_ONE
-the reducer function receives that action type and returns a new object comprised
of the current state and the total with 1 added to it
-since the state has been updated, the component re-renders with the new total value visible


* TotalDisplay shows the total plus 1.
