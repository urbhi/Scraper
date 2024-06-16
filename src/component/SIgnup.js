import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AllContext from '../context/notes/Context'
import '../css/login.css'
import { Cross, Mail } from '../images/image'
import TypeWritter from './typeWriter'
import { Loaderr } from './loader'


const SignUp = (props) => {

    const navigate = useNavigate();
    const context = useContext(AllContext)
    const [loader, setLoader] = useState(false);
    const { SignUp } = context;

    const gobacktoHome = () => {
        navigate('/login');
    }

    const [credentials, setCredentials] = useState({ email: "", password: "", name: "" })

    const labels = ["Never miss a sale again and save money effortlessly with our price tracking and reminder site. Because every penny saved is a penny earned.",
        "Shop smarter and stay on budget with our easy-to-use price tracking and reminder site. Start saving on your favorite products today.",
        "Take the guesswork out of online shopping with our price tracking and reminder site. Get the best deals and save time and money.",
        "Get the most bang for your buck with our price tracking and reminder site. Shop smart and never overpay again for your desired products.",
        "Maximize your savings potential with our price tracking and reminder site. It's like having a personal shopping assistant in your pocket."]
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true);

        const json = await SignUp(credentials)
        if (json.Success) {
            alert("succcessfully Loged In success")
            navigate('/login')
        }
        else {
            alert(" danger")
        }
        setLoader(false);

    }

    const change = (e) => {
        setCredentials({
            ...credentials, [e.target.name]: [e.target.value]
        })
        // console.log(credentials)
    }
    return (
        <div className='loginpage'>
            <div className={"session"}>



                <form onSubmit={handleSubmit} action="" className="log-in" >
                    <div className='logo_part'>
                        <img src="/logo/logo2.png" alt="" srcset="" />
                    </div>
                    {/* <div className="cross" onClick={gobacktoHome}>
                        <Cross />
                    </div> */}
                    <h4> Hi We are <span>Scraper</span></h4>
                    <p>We welcome you to our communitie</p>
                    <div className="floating-label">
                        <input placeholder="Email" type="email" name="email" id="email" onChange={change} />
                        <label htmlFor="email">Email:</label>

                        <div className="icon">
                            <Mail />
                        </div>

                    </div>
                    <div className="floating-label">
                        <input placeholder="Username" type="text" name="name" id="name" onChange={change} />
                        <label htmlFor="email">UserName</label>

                        <div className="icon">
                            <Mail />
                        </div>

                    </div>
                    <div className="floating-label">
                        <input placeholder="Password" type="password" name="password" id="password" onChange={change} />
                        <label htmlFor="password">Password:</label>
                        <div className="icon">

                            <Cross />
                        </div>

                    </div>
                    <button className='button' type="submit" >
                        {loader ? <span className='loader-dive'><Loaderr /></span> : "Create"}
                    </button>
                    {/* <Link to='/login' >
            <p className="dont-have-acnt">Create one ?</p>
          </Link> */}
                </form>
            </div>
            <div className="sidepart">
                <div className="blinker1">
                    <TypeWritter word={labels} />
                </div>
                <div class="ocean">
                    <div class="wave"></div>
                    <div class="wave"></div>
                    <div class="wave"></div>
                </div>
            </div>
        </div>
    )
}

export default SignUp