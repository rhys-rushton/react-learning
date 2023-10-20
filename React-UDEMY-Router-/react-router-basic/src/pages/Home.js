import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
    // Gives components access to a navigate function.
    // Can be called to give us access to a navigation action.
    const navigate = useNavigate(); 

    const navigateHandler = () => {
        navigate('/products');
    }



    return <> 
    <h1>My Home Page</h1>
    <p>Go to <Link to="/products">the list of products</Link></p>
    <p>
        <button onClick={navigateHandler}>
            Navigate
        </button>
    </p>
    
    </>
}


export default HomePage;