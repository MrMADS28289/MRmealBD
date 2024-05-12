import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
// import * as Google from "expo-google-auth-session";
// import * as Google from "expo-auth-session/providers/google";

export const AuthContext = createContext();
// Initialize GoogleAuthProvider instance
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    // Start Google OAuth flow
    const { type, accessToken, idToken } = await Google.logInAsync({
      androidClientId: "YOUR_ANDROID_CLIENT_ID.apps.googleusercontent.com",
      iosClientId: "YOUR_IOS_CLIENT_ID.apps.googleusercontent.com",
      scopes: ["profile", "email"],
    });

    if (type === "success") {
      // Obtain Firebase credential from Google OAuth tokens
      const credential = googleProvider.credential(idToken, accessToken);

      // Sign in with Firebase using the obtained credential
      const result = await signInWithCredential(auth, credential);

      // Handle successful Google sign-in
      const { user } = result;
      // Check if the user is new and add them to the database
      if (user && result.additionalUserInfo.isNewUser) {
        await setDoc(doc(db, "users", user.uid), {
          // Set user data in the database
          username: user.displayName || "",
          profileUrl: user.photoURL || "",
          userId: user.uid,
        });
      }
      // Return any additional data you may need
      return { success: true, user: result.user };
    } else {
      // Handle Google sign-in cancellation or failure
      console.log("Google sign-in cancelled or failed.");
      return { success: false };
    }
  } catch (error) {
    // Handle Google sign-in error
    console.error("Google sign-in error:", error);
    return { success: false, error: error.message };
  }
};

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setUser(user);
        updateUserData(user.uid);
        setLoading(false);
      } else {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    });
    return unsub;
  }, []);

  const updateUserData = async (userId) => {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      let data = docSnap.data();
      setUser({
        ...user,
        username: data.username,
        profileUrl: data.profileUrl,
        userId: data.userId,
      });
    }
  };

  const login = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      return { success: true, response: response };
    } catch (err) {
      let msg = err.message;
      if (msg.includes("(auth/invalid-email)")) msg = "Invalid email";
      return { success: false, msg: err.message };
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      return { success: true };
    } catch (err) {
      return { success: false, msg: err.message, error: err };
    }
  };

  const register = async (email, password, username) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // console.log("response.user:", response?.user);

      await setDoc(doc(db, "users", response?.user?.uid), {
        username,
        profileUrl: "",
        userId: response?.user?.uid,
      });
      return { success: true, data: response?.user };
    } catch (err) {
      let msg = err.message;
      if (msg.includes("(auth/invalid-email)")) msg = "Invalid email";
      return { success: false, msg: err.message };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        register,
        logout,
        signInWithGoogle,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error("useAuth must be wrapped inside AuthContextProvider");
  }
  return value;
};
