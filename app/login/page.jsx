// "use client"
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { UserAuth } from "../context/AuthContext";

// const page = () => {

//   const { user, googleSignIn, logOut } = UserAuth();
//   const [loading, setLoading] = useState(true);
//   const [mounted, setMounted] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     setMounted(true); // Mark component as mounted
//   }, []);

//   const currentPath = mounted ? router.pathname : "";

//   const handleSignIn = async () => {
//     try {
//       await googleSignIn();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSignOut = async () => {
//     try {
//       await logOut();
//       router.push("/login");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     const checkAuthentication = async () => {
//       await new Promise((resolve) => setTimeout(resolve, 50));
//       setLoading(false);
//     };
//     checkAuthentication();
//   }, [user]);

//     useEffect(() => {
//     // Redirect to /profile if user is logged in
//     if (user) {
//         router.push("/profile");
//     }
//     }, [user]);

//   return (
//     <div className="p-4">
//       Login page
//       <li onClick={handleSignIn} className="p-2 cursor-pointer">
//         Login
//       </li>
//     </div>
//   );
// };

// export default page;



"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "../context/AuthContext";

const LoginPage = () => {
  const { user, googleSignIn, isSignedUp, email, enteredEmail, handleEmailChange } = UserAuth();
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (isSignedIn) {
  //     router.push("/profile");
  //   }
  // }, [isSignedIn]);

  useEffect(() => {
    if (isSignedUp) {
      router.push("/profile");
    } else if (email === enteredEmail && enteredEmail !== "") {
      // User has signed up earlier, navigate to /profile
      router.push("/profile");
    }
  }, [isSignedUp, email, enteredEmail]);


  return (
    <div className="p-4">
      Login page
      <li onClick={handleSignIn} className="p-2 cursor-pointer">
        Login with Google
      </li>
      <input
        type="email"
        value={enteredEmail}
        onChange={handleEmailChange}
        style={{
          marginTop: "0.5rem",
          padding: "0.5rem",
          border: "1px solid black",
          color: "black",
        }}
      />
    </div>
  );
};

export default LoginPage;
