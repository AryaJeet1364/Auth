// "use client";
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

//   useEffect(() => {
//     // Redirect to /profile if user is logged in
//     if (user) {
//       router.push("/profile");
//     }
//   }, [user]);
//   return (
//     <div className="p-4">
//       Signup page
//       <li onClick={handleSignIn} className="p-2 cursor-pointer">
//         Sign up
//       </li>
//     </div>
//   );
// };

// export default page;



// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { UserAuth } from "../context/AuthContext";

// const SignUpPage = () => {
//   const { user, email, googleSignIn } = UserAuth();
//   const [mounted, setMounted] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     setMounted(true); // Mark component as mounted
//   }, []);

//   const handleSignIn = async () => {
//     try {
//       await googleSignIn();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     if (user) {
//       router.push("/signup"); // Stay on the signup page
//     }
//   }, [user]);

//   return (
//     <div className="p-4">
//       Sign-up page
//       <li onClick={handleSignIn} className="p-2 cursor-pointer">
//         Sign up with Google
//       </li>
//       <input
//         type="email"
//         value={email}
//         readOnly
//         className="mt-2 p-2 border color-rgb(0 0 0)"
//       />
//       <br /> <br />
//       <button>Take me there</button>
//     </div>
//   );
// };

// export default SignUpPage;



// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { UserAuth } from "../context/AuthContext";

// const SignUpPage = () => {
//   const { user, email, googleSignIn } = UserAuth();
//   const [mounted, setMounted] = useState(false);
//   const [emailFilled, setEmailFilled] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     setMounted(true); // Mark component as mounted
//   }, []);

//   const handleSignIn = async () => {
//     try {
//       await googleSignIn();
//       setEmailFilled(true);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleSignUp = () => {
//     if (user) {
//       router.push("/profile");
//     }
//   };

//   return (
//     <div className="p-4">
//       Sign-up page
//       <li onClick={handleSignIn} className="p-2 cursor-pointer">
//         Sign up with Google
//       </li>
//       <input
//         type="email"
//         value={email}
//         readOnly
//         style={{
//           marginTop: "0.5rem",
//           padding: "0.5rem",
//           border: "1px solid black",
//           color: "black",
//         }}
//       />
//       <br /> <br />
//       <button onClick={handleSignUp}>Take me there</button>
//     </div>
//   );
// };

// export default SignUpPage;



"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "../context/AuthContext";

const SignUpPage = () => {
  const { user, email, googleSignIn, isSignedUp } = UserAuth();
  const [mounted, setMounted] = useState(false);
  const [emailFilled, setEmailFilled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true); // Mark component as mounted
    if (isSignedUp) {
      router.push("/profile");
    }
  }, [isSignedUp]);


  const handleSignin = async () => {
    try {
      await googleSignIn();
      setEmailFilled(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = async () => {
    try {
      router.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4">
      Sign-up page
      <li onClick={handleSignin} className="p-2 cursor-pointer">
        VerifyEmail
      </li>
      <input
        type="email"
        value={email}
        readOnly
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

export default SignUpPage;

