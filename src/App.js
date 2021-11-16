import Profile from "./Profile/Profile";
import img from "./imageInPublic.png";

function App({
  fullName = "Sherif Elshamaa",
  bio = "placeholder bio",
  profession = "fullstack web developer",
  handleName = (e)=>{
    e.preventDefault();
    alert(`${fullName}`)
  }
}) {
  return (
    <div className="App">
      <header className="App-header">
        <Profile fullName={fullName} bio={bio} profession={profession} handleName={handleName}>
          {img}
        </Profile>
      </header>
    </div>
  );
}

export default App;
