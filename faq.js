//Please import child Question.js as well to run this along with style.css
//https://codesandbox.io/s/22hclm?file=/src/App.js   refernce for this 
import Question from "./Question";
import "./styles.css";

export default function App() {
  return (
    <>
      <h1>Project 2: FAQ/Accordion</h1>
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="questions">
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </div>
    </>
  );
}

const questions = [
  {
    id: 1,
    title: "Is this a good product?",
    info:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  },
  {
    id: 2,
    title: "How much does it cost?",
    info:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  },
  {
    id: 3,
    title: "When can I get it?",
    info:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  }
];


// //gENERATING Quotes example:
// import "./styles.css";
// import { useState, useEffect } from "react";

// function getRandomQuote(quotes) {
//   return quotes[Math.floor(Math.random() * quotes.length)];
// }

// export default function App() {
//   const [quotes, setQuotes] = useState([]);
//   const [quote, setQuote] = useState(null);

//   useEffect(() => {
//     fetch("https://type.fit/api/quotes")
//       .then((res) => res.json())
//       .then((json) => {
//         setQuotes(json);
//         setQuote(json[0]);
//       });
//   }, []);

//   function getNewQuote() {
//     setQuote(getRandomQuote(quotes));
//   }

//   return (
//     <main>
//       <h1>Project 3: Quote Generator</h1>
//       <section>
//         <button onClick={getNewQuote}>New Quote</button>
//         <h3>
//           <span>“</span>
//           {quote?.text}
//         </h3>
//         <i>- {quote?.author}</i>
//       </section>
//     </main>
//   );
// }

