import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image, type ImageSource } from "expo-image";

type Props = {
  placeHolderImage: string;
  selectedImage?: string;
};

const ImageViewer = ({ placeHolderImage, selectedImage }: Props) => {
  const imageSource = selectedImage ? { uri: selectedImage } : placeHolderImage;
  return <Image source={imageSource} style={styles.image} />;
};

export default ImageViewer;

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 480,
    borderRadius: 18,
    marginHorizontal: 20,
    resizeMode: "cover",


  },
});
