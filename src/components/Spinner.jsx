import Spinner from "react-bootstrap/Spinner";
// import {useState} from "react"

// const loadingPhrase = [
//   "Hmmm...",
//   "Let me think of something...",
//   "This one is good..."
// ]

// const getRandomPhrase = () => {
//   return loadingPhrase[Math.floor(Math.random) * loadingPhrase.length];
// }

export const LoadingSpinner = () => {
  // const [phrase, setPhrase] = useState()
  // const randomPhrase = getRandomPhrase()
  // setPhrase(randomPhrase)
  return (
    <div className="spinner">
      <Spinner animation="border" variant="danger" />
      <p>Hmmm...</p>
    </div>
  );
};

