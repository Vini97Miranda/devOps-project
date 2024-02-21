import './css/style.css';
import user from './img/user-logo.png';

function ChangePassword() {
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
                        <input type="password" name="password" className="form_input" placeholder="E-mail adress" required/>
                    </div>

                    <div className="form_field">
                        <button className="submitButton" type="submit">Continue</button>
                    </div>
                    <p>Don't have an account ? <a className="forgot-password" href="/login">Sign in</a></p>
                </form>
            </div>
            </body>
        </>
    );
}

export default ChangePassword;
