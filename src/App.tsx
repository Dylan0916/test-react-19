import './App.css'

function App() {
  const onClick = () => {
    console.log('== on click ==')
  }

  console.log('== App re-render ==')

  return (
    <div>
      <button onClick={onClick}>Click</button>
    </div>
  )
}

export default App
