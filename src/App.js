import "./App.css"
import Card from "./Card"

function App() {
   return (
      <div className="App">
         <Card title="Call Us">
            <h2>Phone Details</h2>
            <p>
               Phone: <a href="tel:+19175555555">+1 (917) 555-5555</a>
            </p>
            <p>Location: New York, USA</p>
            <p>Hours of Operation: M - F, 9 - 5 ET</p>
         </Card>

         <Card title="Mail Us">
            <h2>Email Details</h2>
            <p>
               Email:
               <a href="mailto:example@example.com">example@example.com</a>
            </p>
            <p>
               <strong>Location: London, UK</strong>
            </p>
         </Card>

         <Card title="I am a card" description="and I believe in you"/>
      </div>
   )
}

export default App
