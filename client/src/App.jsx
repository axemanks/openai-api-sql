import styles from './index.module.css'
import sqlLogo from './assets/sql-logo.png'


import { useState } from 'react';




function App() {
  // track the value of the state
  const [queryDescription, setQueryDescription] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", queryDescription);
  }

  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt="" className={styles.icon} />
      <h3>Generate SQL with AI</h3>
      
      {/* input form */}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="query-description"
          placeholder='Describe your query here'
          onChange={(e) => setQueryDescription(e.target.value)}

        />
        <input type="submit" value="Generate query"/>
      </form>
    </main>
  )
}

export default App
