// import logo from './logo.svg';
import './App.css';
import Hero from './Hero';
import Navbar from './Navbar';
import Card from './Card';
import Heading from './CardSectionHeading';
import student from './images/student-iocn.svg'
import creditCard from './images/credit-card-icon.svg'
import books from './images/books-icon.svg'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero imgUrl='https://ineuron.ai/images/landing-page/hero/slide-3.png'/>
      <Heading />
      <div className ="flex flex-col lg:flex-row items-center justify-around gap-10 lg:gap-20 xl:gap-24 2xl:gap-52">
        <Card img={books} desc= "Different Courses" figure = "400"/>
        <Card img={student} desc = "Student Enrolled" figure = "400000"/>
        <Card img={creditCard} desc = "Successful Transition" figure = "10000"/>
        
      </div>
      
    </div>
  );
}

export default App;
