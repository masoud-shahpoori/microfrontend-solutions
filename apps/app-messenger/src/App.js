import React, {Suspense} from "react";
const AuthenticationAppRemote = React.lazy(() => import("authentication/App"));

const isLoggedIn = !!window.localStorage.getItem("isLoggedInFake")

const App = () => {
    const AuthenticationRemoteApp = () => {
        return <Suspense fallback={"loading..."}>
            <AuthenticationAppRemote/>
        </Suspense>
    }
    return (
        <div style={{
            margin: "10px",
            padding:"10px",
            textAlign:"center",
            backgroundColor:"cyan"
        }}>
            You are Logged in ? {!isLoggedIn}

            {isLoggedIn ? <div>This is Messenger</div> : <AuthenticationRemoteApp/>}
        </div>
    )
}

export default App;

