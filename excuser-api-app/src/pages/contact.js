import { useNavigate } from "react-router-dom"
export const Contact = () => {
    const navigate = useNavigate()
    return(
        <div>
            <h1>Hey!! we are in contact Page 📲</h1>
            <button onClick={() => navigate('/')}>Go back to Home 🏡</button>
        </div>
    )
}