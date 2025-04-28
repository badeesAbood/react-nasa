import { NasaData } from "../interfaces/nasaData";


export default function Main(props: {data: NasaData}) {

    const { data } = props;
    return (
       <div className="imgContainer">
        <img src={data.hdurl ? data.hdurl : "mars.png"} alt={data.title} className="bgImage"/>
       </div>
    )
    }