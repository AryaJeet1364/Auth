// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { UserAuth } from "../context/AuthContext";

// const Navbar = () => {
//   const { user, googleSignIn, logOut } = UserAuth();
//   const [loading, setLoading] = useState(true);

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

//   return (
//     <div className="h-20 w-full border-b-2 flex items-center justify-between p-2">
//       <ul className="flex">
//         <li className="p-2 cursor-pointer">
//           <Link href="/">Home</Link>
//         </li>
//         <li className="p-2 cursor-pointer">
//           <Link href="/about">About</Link>
//         </li>
//         <li className="p-2 cursor-pointer">
//           <Link href="/login">Login</Link>
//         </li>
//         <li className="p-2 cursor-pointer">
//           <Link href="/signup">Signup</Link>
//         </li>

//         {!user ? null : (
//           <li className="p-2 cursor-pointer">
//             <Link href="/profile">Profile</Link>
//           </li>
//         )}
//       </ul>

      // {loading ? null : !user ? (
      //   <ul className="flex">
      //     <li onClick={handleSignIn} className="p-2 cursor-pointer">
      //       Login
      //     </li>
      //     <li onClick={handleSignIn} className="p-2 cursor-pointer">
      //       Sign up
      //     </li>
      //   </ul>
      // ) : (
      //   <div>
      //     <p>Welcome, {user.displayName}</p>
      //     <p className="cursor-pointer" onClick={handleSignOut}>
      //       Sign out
      //     </p>
      //   </div>
      // )}
//     </div>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true); // Mark component as mounted
  }, []);

  const currentPath = mounted ? router.pathname : "";

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="h-20 w-full border-b-2 flex items-center justify-between p-2">
      <ul className="flex">
        <li className="p-2 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/about">About</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/login">Login</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/signup">SignUp</Link>
        </li>
        {!user ? null : (
          <li className="p-2 cursor-pointer">
            <Link href="/profile">Profile</Link>
          </li>
        )}
      </ul>

      {loading ? null : !user ? (
        " "
      ) : (
        <div>
          <p className="cursor-pointer" onClick={handleSignOut}>
            Sign out
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
