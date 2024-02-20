# Progress bar with React

- Displaying percentage value in the middle 
- Green progress fill Animation - #00c251
- Add Accessibility (For visually impaired people)
- Scalable component 

## Short Explanation

`App.jsx` : 
- Setting an interval of 100ms to increment the value state using useEffect. 
- Passing that value as a prop to `ProgressBar` component.

`ProgressBar.jsx` :
- Percent state is used to set the percentage between 0 to 100 in useEffect whenever the value prop changes. 
- Passing that percent in the progress bar along with style to increment the width accordingly.  
