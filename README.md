# React
## the commands to setup a react env in vs code
- npm create vite@latest //then u gotta name your project and choose react and javascript
- cd "your proj-name"
- npm install
- npm run dev

### overview of what is what
so in main.jsx is our main file where we import and call our application but our main code goes in app.jsx and these both files are in src folder , src folder is where we will do our most coding , now we will jump right into coding 

## Points to remember
- our component function inside app.jsx cant return two divs at same level , so two parents div at same level cant be returned
- if u want todo that, enclose them inside "<></>" it is called fragment
- make the component inside a new file and import it into the main file , its more readable
- add the components in the src folder

  ### Components
  - its just a function which returns a single parent tag
  - u can pass values to functions aka props i.e function Text ({var1,var2}) and call them in ur code dynamically
  - remember if are passing varaible do (var) but if u r passing a object do ({var})
  -  ### conditioning rendering
    there are two ways its basically if else kinda thing if a true do this else do that
  - {var===1 ? (<></>):(<></>)}
  - {var===1 && (<></>)} this is also known as short circuiting
### .map()
- it is used in js to iterate through a array and to convert or transoform that array into jsx, like a list of movies [{"johnWick","2000"},{"johnWick2","2001"}] will be display as the grid
### useState
the main concept is this it has a value/variable and a setfunction which updates the value of the current state or updates it ,
- const[var,setVar]=useState("")
- here it is used in home page in search bar so when we search some movie it matches and show the relevant result simultaneously.
- it renders the whole function/component in which it is used however in const[var,setVar]=useState("") react remembers the state of latest value .
### Page Routing 
- it just the way how to routes between pages in browser if u have multiple pages,
  1) run npm install react-router-dom
  2) import BrowserRouter in your main.jsx
  3) then finally come to the app.jsx and write code for routing in it import Routes,Route ... sample code is in the file name pageRouting.jsx

### NavBar
Nothing too much talk about it , just made a component and add it to App.jsx as we want to remain constant for every page on our web, if u wanna check code see NavBar.jsx




