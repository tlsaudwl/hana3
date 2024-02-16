import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { Hello } from './components/Hello';

// {ss: 'FirstComponent' }
// function H5(prop: { ss: string}) {
function H5({ ss }: { ss: string }) {
  return <h5>H555555566-{ss}</h5>;
}

function App() {
  const [count, setCount] = useState(0);

  const plusCount = () => setCount((prevCount) => prevCount + 1);

  return (
    <>
      <h1 style={{ color: 'white', backgroundColor: 'red' }}>Vite + React </h1>
      <H5 ss={`First-Component ${count}`} />
      <Hello name='홍길동' age={30} plusCount={plusCount} />
      <div className='card'>
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
