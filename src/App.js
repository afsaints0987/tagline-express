import taglineLogo from './assets/tagline_logo.png'
import {useState} from 'react'
import {http} from './api'
import { LoadingSpinner } from './components/Spinner'
import { TagTooltip } from './components/Tooltip'
import * as FaIcons from 'react-icons/fa'

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
    if(!prompt || !prompt.match('tagline')){
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
      setPrompt('')
    } catch {
      setLoading(false);
      throw new Error("Cannot Generate Tagline, I'm Sorry...")
    }
  }

  return (
    <div className="text-center">
      <header className="bg-dark text-lg-end text-center text-light ">
        <div className="py-2 px-4 rounded-2 mx-4 badge">
          <strong>Support:</strong>
          <a
            href="https://paypal.me/saints0987"
            target="_blank"
            rel="noreferrer"
          >
            <FaIcons.FaPaypal size={30} className="text-primary mx-2" />
          </a>
          <a
            href="https://www.buymeacoffee.com/afsaints0987"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png"
              alt="Buy Me A Coffee"
              style={{ height: "30px" }}
            />
          </a>
        </div>
      </header>
      <div className="container" id="tagline_container">
        <img src={taglineLogo} alt="tagline-logo" className="my-2" />
        <div className="d-flex flex-row justify-content-center">
          <p className="mt-1">
            <strong>Create your Tagline</strong>
          </p>
          <TagTooltip />
        </div>
        <div className="input-group mb-3 mx-auto shadow-sm">
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
        {error && (
          <p className="text-danger">Dude! I can't see your tagline request</p>
        )}
        <div>
          {loading ? (
            <LoadingSpinner />
          ) : (
            tagline && (
              <div className="bg-danger text-light py-3 px-2 rounded-4 shadow mt-4">
                <p className="text-center">Here's your tagline...</p>
                <h3 className="text-center" id="tagline-text">{tagline}</h3>
              </div>
            )
          )}
        </div>
      </div>

      <footer>
        <h6 className="text-center fixed-bottom text-muted">
          Tagline Express &copy; {new Date().getFullYear()}
        </h6>
      </footer>
    </div>
  );
}

export default App;
