import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from "react-native";
import React, { forwardRef, useCallback, useMemo } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import Colors from "../constants/Colors";
import { useColorScheme } from "nativewind";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

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

  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <BottomSheetModal
      handleIndicatorStyle={{ display: "none" }}
      backgroundStyle={{ borderRadius: 13, backgroundColor: Colors.white }}
      overDragResistanceFactor={0}
      ref={ref}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
    >
      <View className="dark:bg-black" style={styles.contentContainer}>
        <View>
          <Switch value={colorScheme == "dark"} onChange={toggleColorScheme} />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
        <View className="flex-col justify-center items-center">
          <TouchableOpacity className="border-2 h-[30px] w-[80px] mb-5">
            <Text>Dark mode</Text>
          </TouchableOpacity>
          <TouchableOpacity className="border-2 h-[30px] w-[80px] mb-5">
            <Text>Language</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingTop: 5,
  },
});

export default BottomSheet;
