import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [course, setCourse] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page-root">
      <header className="page-header">Student Registration</header>

      <main className="card">
        <h2 className="form-title">Registration Form</h2>

        <form className="reg-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-input"
          />
          <input
            type="text"
            placeholder="Enter Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="text-input"
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>

        <div className="details">
          <h3>Student Details</h3>
          <div className="detail-row">
            <span className="label">Name:</span>
            <span className="value">{submitted && name ? name : ''}</span>
          </div>
          <div className="detail-row">
            <span className="label">Course:</span>
            <span className="value">{submitted && course ? course : ''}</span>
          </div>
        </div>
      </main>

      <footer className="page-footer">React SPA Project</footer>
    </div>
  )
}

export default App
