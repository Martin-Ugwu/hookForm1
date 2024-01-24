import './App.css';
import Form from './components/Form';

function App() {
  const personArray = [
    {username:'', email: '', password},
  ]

const [person,] = personArray

console.log(person);

  return (
    <div className="App">
      {personArray.map( (person) => {
        return<Form username= {person.username} email= {person.email} password= {person.password} />
      })}
    </div>
  );
}

export default App;
