import { useState } from 'react'

function App() {
	const [message, setMessage] = useState('')
	return (
		<main>
			<h1>{message}</h1>
			<button data-testid="button__show-message" onClick={() => setMessage('Hello World')} />
		</main>
	)
}

export default App
