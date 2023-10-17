import { View, Text, TextInput, TouchableOpacity, Keyboard } from "react-native";
import React, { useState } from "react";
import styles from "./style";

export default function Form(props) {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (!task.replace(/\s/g, '').length) {
      alert("Please input task");
      return false;
    }
    props.onAddTask(task);
    setTask("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.addTask}>
      <TextInput
        value={task}
        placeholder="Input task"
        style={styles.input}
        onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.iconsWrapper}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
