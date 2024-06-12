// import { useContext, createContext, useState, useEffect } from "react";
// import {
//   signInWithPopup,
//   signOut,
//   onAuthStateChanged,
//   GoogleAuthProvider,
// } from "firebase/auth";
// import { auth } from "../firebase";

// const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const googleSignIn = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider);
//   };

//   const logOut = () => {
//     signOut(auth);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, [user]);

//   return (
//     <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const UserAuth = () => {
//   return useContext(AuthContext);
// };




import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase"; // Correct the import statement

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");

  const handleEmailChange = (e) => {
    setEnteredEmail(e.target.value);
  };

  const googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      setEmail(result.user.email);
      setIsSignedUp(true);
    } catch (error) {
      console.error("Google sign-in error: ", error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setEmail("");
    } catch (error) {
      console.error("Log out error: ", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setEmail(currentUser.email);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, email, googleSignIn, logOut, handleEmailChange }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext)
}
