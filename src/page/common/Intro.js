import { googleSignIn, database } from "firebase_config/firebase";

const Intro = () => {

    async function handleSignup() {
        await googleSignIn()
    }

    const writeUserData = () => {
        const db = database;
    }

    return (
        <div>
            Intro
            <div>
            <button onClick={handleSignup}>Google</button>
        </div>
        </div>
    );
}

export default Intro;