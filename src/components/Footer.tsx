import { NasaData } from "../interfaces/nasaData";


export default function Footer(props: {  handleToggleModal: () => void , data: NasaData }) {
  const {handleToggleModal  , data } = props;
  return (
    <footer>
            <div className="bgGradient"></div>
            <div>
              <h2>{data.title}</h2>
                <h1>APOD PROJECT</h1>
            </div>
            <button onClick={handleToggleModal} >
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
   
  )
}
