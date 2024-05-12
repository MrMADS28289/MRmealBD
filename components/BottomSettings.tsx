import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import React, { forwardRef, useCallback, useMemo } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import Colors from "../constants/Colors";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], []);
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

  return (
    <BottomSheetModal
      handleIndicatorStyle={{ display: "none" }}
      backgroundStyle={{ borderRadius: 13, backgroundColor: Colors.gold }}
      overDragResistanceFactor={0}
      ref={ref}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
    >
      <View style={styles.contentContainer}>
        <View style={styles.toggle}>
          <TouchableOpacity style={styles.toggleActive}>
            <Text style={styles.activeText}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleInactive}>
            <Text style={styles.inactiveText}>Pickup</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subheader}>Your Location</Text>
        <Link href={"/(modal)/location-search"} asChild>
          <TouchableOpacity>
            <View style={styles.item}>
              <Ionicons
                name="location-outline"
                size={20}
                color={Colors.white}
              />
              <Text style={{ flex: 1, color: Colors.white }}>
                Current location
              </Text>
              <Ionicons name="chevron-forward" size={20} color={Colors.white} />
            </View>
          </TouchableOpacity>
        </Link>

        <Text style={styles.subheader}>Arrival time</Text>
        <TouchableOpacity>
          <View style={styles.item}>
            <Ionicons name="stopwatch-outline" size={20} color={Colors.white} />
            <Text style={{ flex: 1, color: Colors.white }}>Now</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.white} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingTop: 5,
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 10,
  },
  toggleActive: {
    backgroundColor: Colors.black,
    padding: 8,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  activeText: {
    color: Colors.white,
    fontWeight: "700",
  },
  toggleInactive: {
    borderWidth: 1,
    borderColor: "#fff",
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  inactiveText: {
    color: Colors.white,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: Colors.black,
    padding: 16,
    margin: 16,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.white,
    fontWeight: "bold",
  },
  subheader: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 30,
    margin: 13,
  },
  item: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    backgroundColor: Colors.gold,
    padding: 16,
    borderColor: Colors.white,
    borderWidth: 1,
  },
});

export default BottomSheet;
