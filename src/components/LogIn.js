import "./LogInStyles.css"

const logIn = () => {
    return(
        <div className="log-in">
            <h1>Přihlásit</h1>
            <label form="name">Jméno</label> <br />
            <input type="text" className="int-text" id="name" /><br />
            <label form="pass">Heslo</label><br />
            <input type="password" className="int-pass" id="pass"/><br />
            <button className="btn">Přihlásit</button>
        </div>
    )
}

export default logIn