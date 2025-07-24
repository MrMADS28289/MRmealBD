import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import Colors from "../constants/Colors";
import { useColorScheme } from "nativewind";
import { Link } from "expo-router";
import { AntDesign, Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CheckBox, Switch } from "@rneui/themed";
import { useAuth } from "../context/useContext";
import { useTranslation } from "react-i18next";
import "../i18n";

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["90%"], []);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  const { dismiss } = useBottomSheetModal();
  const { colorScheme, setColorScheme } = useColorScheme();
  const [selectedIndex, setSelectedIndex] = useState("light");
  const [checked, setChecked] = useState(false);
  const toggleColorScheme = async (themeValue: any) => {
    setSelectedIndex(themeValue);
    setColorScheme(themeValue);
    await AsyncStorage.setItem("theme", themeValue);
  };

  useEffect(() => {
    const retrieveDarkModeStatus = async () => {
      const selectedTheme = await AsyncStorage.getItem("theme");
      if (selectedTheme == "dark") {
        setColorScheme("dark");
        setSelectedIndex("dark");
      }
      if (selectedTheme == "light") {
        setColorScheme("light");
        setSelectedIndex("light");
      }
    };

    retrieveDarkModeStatus();
  }, []);

  // const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  // translating language
  const LANG_KEY = "selectedLanguage";
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const loadLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem(LANG_KEY);
      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
      }
    };
    loadLanguage();
  }, []);

  const changeLanguage = async (lng: any) => {
    await AsyncStorage.setItem(LANG_KEY, lng);
    i18n.changeLanguage(lng);
  };

  return (
    <BottomSheetModal
      handleIndicatorStyle={{ display: "none" }}
      backgroundStyle={{
        borderRadius: 13,
        backgroundColor: colorScheme == "dark" ? "#131313" : "white",
      }}
      overDragResistanceFactor={0}
      ref={ref}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
    >
      <View className="dark:bg-[#131313]">
        <View className="flex-col items-center pb-4 border-b-2 border-black dark:border-white">
          <View>
            <View className="rounded-full">
              <Image
                className="h-[90px] w-[90px] rounded-full"
                source={require("../assets/Images/masum.jpg")}
              />
            </View>
            <TouchableOpacity className="absolute items-center justify-center bottom-0 right-0 rounded-full bg-neutral-100 dark:bg-neutral-900 w-[30px] h-[30px]">
              <Entypo
                name="camera"
                size={20}
                color={colorScheme == "dark" ? Colors.white : Colors.black}
              />
            </TouchableOpacity>
          </View>
          <Text className="mt-2 text-xl font-bold dark:text-white">
            Masum Abduss Sobhan
          </Text>
        </View>
        <View className="mt-6 mx-8">
          <TouchableOpacity>
            <View className="absolute top-0 right-0">
              <FontAwesome
                name="edit"
                size={20}
                color={colorScheme == "dark" ? Colors.white : Colors.black}
              />
            </View>
          </TouchableOpacity>
          <Text className="text-[14px] font-bold dark:text-white">
            {t("uPhone")}: 01734-326573
          </Text>
          <Text className="text-[14px] font-bold dark:text-white">
            {t("uEmail")}: abduss.sobhan28@gmail.com
          </Text>
          <Text className="text-[14px] font-bold dark:text-white">
            {t("uAddress")}: Horinakundu, Jhenaidah
          </Text>
        </View>
        <View className="m-6">
          <TouchableOpacity className="flex-row border-b p-2 mt-1 justify-center items-center bg-neutral-50 dark:bg-black">
            <AntDesign
              name="calendar"
              size={20}
              color={colorScheme == "dark" ? Colors.white : Colors.black}
            />
            <Text className="dark:text-white ml-2" style={{ flex: 1 }}>
              {t("uSubsc")}
            </Text>
            <Ionicons
              name="chevron-forward"
              size={22}
              color={colorScheme == "dark" ? Colors.white : Colors.black}
            />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row border-b p-2 mt-1 justify-center items-center bg-neutral-50 dark:bg-black">
            <Ionicons
              name="wallet-outline"
              size={22}
              color={colorScheme == "dark" ? Colors.white : Colors.black}
            />
            <Text className="dark:text-white ml-2" style={{ flex: 1 }}>
              {t("uWallet")}
            </Text>
            <Ionicons
              name="chevron-forward"
              size={22}
              color={colorScheme == "dark" ? Colors.white : Colors.black}
            />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row border-b p-2 mt-1 justify-center items-center bg-neutral-50 dark:bg-black">
            <Ionicons
              name="people-outline"
              size={22}
              color={colorScheme == "dark" ? Colors.white : Colors.black}
            />
            <Text className="dark:text-white ml-2" style={{ flex: 1 }}>
              {t("uReffer")}
            </Text>
            <Ionicons
              name="chevron-forward"
              size={22}
              color={colorScheme == "dark" ? Colors.white : Colors.black}
            />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row border-b p-2 mt-1 justify-center items-center bg-neutral-50 dark:bg-black">
            <Ionicons
              name="help-circle-outline"
              size={24}
              color={colorScheme == "dark" ? Colors.white : Colors.black}
            />
            <Text className="dark:text-white ml-2" style={{ flex: 1 }}>
              {t("help")}
            </Text>
            <Ionicons
              name="chevron-forward"
              size={22}
              color={colorScheme == "dark" ? Colors.white : Colors.black}
            />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row border-b p-2 mt-1 justify-center items-center bg-neutral-50 dark:bg-black">
            <AntDesign
              name="exclamationcircleo"
              size={20}
              color={colorScheme == "dark" ? Colors.white : Colors.black}
            />
            <Text className="dark:text-white ml-2" style={{ flex: 1 }}>
              {t("faq")}
            </Text>
            <Ionicons
              name="chevron-forward"
              size={22}
              color={colorScheme == "dark" ? Colors.white : Colors.black}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleLogout}
            className="flex-row border-b p-2 mt-1 justify-center items-center bg-neutral-50 dark:bg-black"
          >
            <Ionicons
              name="exit-outline"
              size={24}
              color={colorScheme == "dark" ? Colors.white : Colors.black}
            />
            <Text className="dark:text-white ml-2" style={{ flex: 1 }}>
              {t("logout")}
            </Text>
            <Ionicons
              name="chevron-forward"
              size={22}
              color={colorScheme == "dark" ? Colors.white : Colors.black}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-1 dark:bg-black">
        <View className="flex-row justify-center items-center">
          <Text className="dark:text-white ml-2"> {t("dark")}</Text>
          <CheckBox
            checked={selectedIndex === "light"}
            onPress={() => toggleColorScheme("light")}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            title="Of"
            className="rounded-full"
            checkedColor="green"
          />
          <CheckBox
            checked={selectedIndex === "dark"}
            onPress={() => toggleColorScheme("dark")}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            title="On"
            checkedColor="green"
          />
        </View>
        {/* Language selection */}
        <View style={styles.buttonContainer}>
          <View style={styles.buttonWrapper}>
            <Button title="English" onPress={() => changeLanguage("en")} />
          </View>
          <View style={styles.buttonWrapper}>
            <Button title="Bangla" onPress={() => changeLanguage("bn")} />
          </View>
        </View>
      </View>
    </BottomSheetModal>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  buttonWrapper: {
    marginHorizontal: 10,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: "#fff",
    padding: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -10,
    },
  },
  fullButton: {
    backgroundColor: Colors.secondary,
    padding: 16,
    alignItems: "center",
    // borderRadius: 15,
    flex: 1,
    height: 56,
  },
  footerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  itemContainer: {
    marginTop: 25,
    backgroundColor: Colors.white,
    // padding: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 32,
  },
  header: {
    backgroundColor: Colors.secondary,
    fontSize: 16,
    fontWeight: "bold",
    padding: 15,
    color: Colors.white,
  },
  item: {
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 20,
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingVertical: 10,
    borderColor: Colors.black,
    borderBottomWidth: 1,
  },
  itemText: {
    flex: 1,
    color: Colors.white,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: Colors.secondary,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "center",
  },
  outlineButton: {
    borderColor: Colors.secondary,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    height: 56,
  },
  outlineButtonText: {
    color: Colors.secondary,
    fontWeight: "bold",
    fontSize: 16,
  },
});
