import React from "react";
import { Box, Button, Flex, Link, useColorMode } from "@chakra-ui/react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FaGoogle, FaMoon, FaSun } from "react-icons/fa";
import { auth } from "../firebase";
import useAuth from "../hooks/useAuth";

const Auth = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const { isLoggedIn, user } = useAuth();

  const handleAuth = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <Flex direction="column" alignItems="center" justifyContent="space-between">
      <Button onClick={() => toggleColorMode()} marginBottom="1rem">
        {colorMode === "dark" ? <FaSun /> : <FaMoon />}
      </Button>

      {isLoggedIn ? (
        <Box>
          {/* <Text color="green.500">{user.email}</Text> */}
          <Link color="red.500" onClick={() => auth.signOut()} marginBottom="1rem">
            Logout
          </Link>
        </Box>
      ) : (
        <Button leftIcon={<FaGoogle />} onClick={() => handleAuth()} marginBottom="1rem">
          Log in with Google
        </Button>
      )}
    </Flex>
  );
};

export default Auth;
