import taglineLogo from './assets/tagline_logo.png'
import {useState} from 'react'
import {http} from './api'
import { LoadingSpinner } from './components/Spinner'
import { TagTooltip } from './components/Tooltip'

function App() {
  const [prompt, setPrompt] = useState('')
  const [tagline, setTagline] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    setPrompt(e.target.value)
    setError(false)
  }

  const generateTagline = () => {
    if(!prompt){
      setError(true)
      return
    } 
    generateTaglineRequest(prompt);
    
  }
  
  const generateTaglineRequest = async (prompt) => {
    
    try {
      setLoading(true)
      const tagline = {prompt: prompt}
      const response = await http.post('/openai/generatetagline', tagline)
      const taglineData = await response.data.data[0].text
      console.log(taglineData)
      setTagline(taglineData)
      setLoading(false)
    } catch {
      setLoading(false);
      throw new Error("Cannot Generate Tagline, I'm Sorry...")
    }
  }

  return (
    <div className="container text-center">
      <img src={taglineLogo} alt="tagline-logo" className="my-2" />
      <div className="d-flex flex-row justify-content-center">
        <p className="mt-1">Create your Tagline Instantly!</p>
        <TagTooltip />
      </div>
      <div className="input-group mb-3 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Write a tagline for..."
          onChange={handleChange}
          value={prompt}
        />
        <button
          className="btn btn-outline-danger"
          type="button"
          id="button-addon2"
          onClick={() => generateTagline()}
        >
          Give it to me!
        </button>
      </div>
      {error && <p className="text-danger">Dude! Where's your Tagline???</p>}
      <div>
        {tagline ? <p className="text-center">Here's your tagline...</p> : ""}
        {loading ? (
          <LoadingSpinner />
        ) : (
          <h3 className="text-center">{tagline}</h3>
        )}
      </div>

      <footer>
        <h6 className="text-center fixed-bottom">
          Tagline Express &copy; {new Date().getFullYear()} | Support my App <a href="https://paypal.me/saints0987" target="_blank" rel="noreferrer">here</a>
        </h6>
      </footer>
    </div>
  );
}

export default App;
