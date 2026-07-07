import { useNavigate } from "react-router-dom"
export const About = () => {
    const navigate = useNavigate();
    return(
        <div>
            <h1>Hey!! we are in About Page 💡</h1>
            <button onClick={()=>navigate('/')}> Go back to home 🏡</button>
        </div>

    )
}