import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { auth, db } from "@/firebase/client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const uid = user.uid;

      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        router.push("/home");
      } else {
        router.push("/sign-up");
      }
      
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Login | MedEazy Doctors</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="GetStarted">
        <section className="hidden xl:block image-section"></section>
        <form className="w-full form xl:w-1/2" onSubmit={handleSignIn}>
          <div className="full">
            <section className="rectangle">
              <h2>Welcome Back</h2>

              <label>
                Email
                <input
                  type="email"
                  placeholder="john.doe@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </label>

              <label>
                Password
                <input
                  type="password"
                  placeholder="**********"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label>

              {errorMessage && <p className="text-red-600">{errorMessage}</p>}
              
              <p className="terms">
                Don&apos;t have an account?&nbsp;
                <Link href={"/sign-up"}>Sign-up</Link>
              </p>

              <button type="submit">Continue</button>
            </section>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
