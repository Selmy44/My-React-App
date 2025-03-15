import Card from './Card.jsx'
import './index.css'
import Button from './Button/Button.jsx';
import Student  from './Props/Student.jsx';
import UserGreeting from './Props/Conditional/UserGreeting.jsx';
import List from './Render/List.jsx'

function App() {

  return (
    <>
    <Card /><hr/>
    <Button/><hr/>

    <Student name = "Nshuti" age = {26} isStudent = {true}/>
    <Student name = "Selmy" age = {40} isStudent = {false}/>
    <Student name = "Sandy" age = {22} isStudent = {false}/>
    <Student name = "Naomi" age = {50} isStudent = {true}/>
    <Student name = "Keilla" /><hr />

    <UserGreeting isLoggedIn = {true} username = "Nshuti" /><hr />
    {/* <UserGreeting isLoggedIn = {false} username = "Nshuti" /> */}
    {/* if the loggedIn is false then the outpu will be "Please log in to continue" */}
    
    <List />
    </>
  );
}

export default App