"use client"

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";


export default function SignInPage() {

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main>
            <header>Firebase Auth</header>
            { user ? (
                //user is logged in
                <div>
                    <p>Welcome {user.displayName}</p>
                    <Link href="/week8/shopping-list/page">Protected Page</Link>
                    <button onClick={handleSignOut} >Sign Out</button>

                </div>
            ) : (
                //user is not logged in
                <div>
                    <button onClick={handleSignIn} >Sign In</button>
                </div>
            ) }
        </main>

    );
}