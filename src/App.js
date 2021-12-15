import React from 'react';
import { googleSignIn } from "firebase_config/firebase";

const App = () => {
    async function handleSignup() {
        await googleSignIn()
    }

    return (
        <div>
            <button onClick={handleSignup}>Google</button>
        </div>
    );
}

export default App;
