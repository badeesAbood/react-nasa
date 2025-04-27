import { useEffect, useState } from 'react';
import Footer from './components/Footer'
import Main from './components/Main'
import SideBar from './components/SideBar'

interface NasaData {
  explanation: string;
  title: string; } 
function App() {
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
  const [showModal, setShowModal] = useState<boolean>(false);
  const [data, setData] = useState<NasaData>();
  const [loading, setLoading] = useState<boolean>(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  } 

  useEffect(() => {
    async function fetchApiData()  {
      setLoading(true);
      try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`);
        const data = await response.json();
        console.log(data);
        setLoading(false);
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
      
    }
    fetchApiData();
  }, []);

  return (
    <>
    {data ?   (<Main/>) : (<div className='loadingState'>
      <i className="fa-solid fa-gear"></i>
    </div>)}
    {showModal && data &&  
      <SideBar data={data} handleToggleModal={handleToggleModal} /> }
   {data && ( <Footer data={data}  handleToggleModal={handleToggleModal}/>  ) }



    </>
  )
}

export default App
