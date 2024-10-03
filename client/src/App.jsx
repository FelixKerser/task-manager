import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch('http://localhost:3000/check');
        const data = await response.json();
        setMessage(data.tables);
      } catch (error) {
        console.error('Error fetching message:', error);
      }
    };

    fetchMessage();
  }, []);

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">{message}</h1>
    </>
  );
}

export default App;
