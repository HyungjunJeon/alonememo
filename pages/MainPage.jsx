import React from "react"
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { borderLeftColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes"

export default function MainPage() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>나홀로 링크 메모장!</Text>
        <Text style={styles.subTitle}>중요한 링크를 저장해두고, 나중에 볼 수 있는 공간입니다</Text>
        <View style={styles.horizontalLine}></View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>메모 추가하기</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  titleBox: {
    width: "100%",
    height: 200,
    backgroundColor: "#e9ecef",
    marginTop: 40,
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  horizontalLine: {
    width: "100%",
    borderBottomColor: "#d1d4d7",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: "#0169d9",
    width: 100,
    height: 30,
    borderRadius: 5,
  },
  addButtonText: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 15,
    marginTop: 5,
  },
})
