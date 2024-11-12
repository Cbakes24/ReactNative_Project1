import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type Props = {
  label: string;
  theme?: "primary";
  onButtonPress?: () => void;
};

const Button = ({ label, theme, onButtonPress }: Props) => {
  if (theme === "primary") {
    return (
      <View style={[styles.buttonContainer, styles.primaryButton]}>
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={onButtonPress} // onPress is an attribute of Pressable so i chose to name the Prop  onButtonPress to avoid confusion of doing onPres=onPress
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={() => alert("You pressed a button.")}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },

  primaryButton: {
    borderWidth: 4,
    borderColor: "#ffd33d",
    borderRadius: 18,
    padding: 8,
    marginTop: 20,
  },

  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  buttonIcon: {
    paddingRight: 8,
  },

  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
