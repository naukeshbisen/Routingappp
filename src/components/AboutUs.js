// import { useLinkClickHandler } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
    let navigate = useNavigate();


    let clickHandlerCEO = () => {
        console.log("clicked CEO");
        navigate('/ceo');
    }
    let clickHandlerCFO = () => {
        console.log("clicked CTO");
        navigate('/cto');
    }

    return ( 
        <div>
            <h1>This is About Us</h1>
            <p>About Us Page</p>
            <button onClick={clickHandlerCEO}>CEO</button> <br/>
            <button onClick={clickHandlerCFO}> CFO </button>
        </div>
     );
}
 
export default AboutUs;