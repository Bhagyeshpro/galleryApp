import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import API_KEY from "./config";

const API_URL =
  "https://api.pexels.com/v1/search?query=nature&orientation=portrait&size=small&per_page=20";

const fetchImagesFromPexels = async () => {
  const data = await fetch(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
  });

  const results = await data.json();
};

export default () => {
  React.useEffect(() => {
    const fetchImages = async () => {
      const images = await fetchImagesFromPexels();

      console.log(images);
    };
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161b22",
    alignItems: "center",
    justifyContent: "center",
  },
});
