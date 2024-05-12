import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const retrieveDarkModeStatus = async (): Promise<void> => {
      try {
        const darkModeStatus = await AsyncStorage.getItem("darkMode");
        if (darkModeStatus !== null) {
          setIsDarkMode(JSON.parse(darkModeStatus));
        }
      } catch (error) {
        console.error("Error retrieving dark mode status:", error);
      }
    };

    retrieveDarkModeStatus();
  }, []);

  const toggleDarkMode = async (): Promise<void> => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    try {
      await AsyncStorage.setItem("darkMode", JSON.stringify(newMode));
    } catch (error) {
      console.error("Error saving dark mode status:", error);
    }
  };

  return { isDarkMode, toggleDarkMode };
};
