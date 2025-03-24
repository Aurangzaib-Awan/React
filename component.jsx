import './App.css'

function App() {

  return (
    <>  {/*this is fragment which is used to return two tags at same level*/}
      <div>hello world</div>  
      <div>hello world</div> {/*we cant return two parents or two tags at same level */}
      <Text display={"Whats up"}/>
      <Text display={"u know i mean"}></Text>  {/*U can also close a component like that*/}
    </>
  );
}

{/*props aka property is used to pass values to our components to make them kinda dynamic*/}
{/*Make the first letter of the component capital */}

function Text({display}){   {/*We can use this to avoid writing a bunch of html again and again*/}
  return(
    <div>{display}</div>  
  );

}

export default App

