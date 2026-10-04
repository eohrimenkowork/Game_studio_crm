import { useState } from "react";

function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <h1>Вход в CRM</h1>

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />

            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />

            <button>
                Войти
            </button>
        </div>
    );
}

export default App;