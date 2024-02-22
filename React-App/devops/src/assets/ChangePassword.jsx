import './css/style.css';
import user from './img/user-logo.png';
import sha256 from "crypto-js/sha256";

function ChangePassword() {
    const handleSubmitPassword = async (event) => {
        event.preventDefault();

        const user = sha256(document.getElementById('mail').value).toString();

        const data = {
            username: user,
            password:"",
            bool:""
        };
        try {
            const response = await fetch('http://localhost:8000/password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log('Login successful');
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };
    return (
        <>
            <body className="align">
            <div className="grid">
                <form method="POST" className="form login">
                    <p>Enter the e-mail adress associated with your account and we will send you a link to reset your
                        password </p>
                    <img className="user" src={user} alt="User Logo"/>

                    <div className="form_field">
                        <label className="label-form"><i className="fa fa-lock" style={{ color: '#606468' }}></i></label>
                        <input type="text" id="mail" className="form_input" placeholder="E-mail adress" required/>
                    </div>

                    <div className="form_field">
                        <button className="submitButton" type="submit" onClick={handleSubmitPassword}>Continue</button>
                    </div>
                    <p>Don't have an account ? <a className="forgot-password" href="/login">Sign in</a></p>
                </form>
            </div>
            </body>
        </>
    );
}

export default ChangePassword;
