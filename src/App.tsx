import './App.css'
import Keyboard from './components/Keyboard/KeyboardContainer'
import TextToType from './components/textToType';

import { KeyboardProvider } from './contexts/KeyboardProvider';

function App() {

  return (
    <>
      <KeyboardProvider>
        <div className="bg-gray-200 h-screen mx-auto flex justify-center items-center flex-col">
          <TextToType />
          <Keyboard />
        </div> 
      </KeyboardProvider>
    </>
  )
}

export default App
