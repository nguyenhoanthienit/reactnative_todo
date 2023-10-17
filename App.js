import { Text, View, ScrollView, Alert } from "react-native";
import Task from "./component/Task";
import Form from "./component/Form";

import styles from "./App.components.style";
import { useState } from "react";

export default function App() {
  const [taskList, setTaskList] = useState([]);

  // add new task
  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  };

  // delete task
  const handleDeleteTask = (index) => {
    Alert.alert("Confirm Delete", "Sure?", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          let taskListTmp = [...taskList];
          taskListTmp.splice(index, 1);
          setTaskList(taskListTmp);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          {taskList.map((item, index) => {
            return (
              <Task
                key={index}
                title={item}
                number={index + 1}
                onDeleteTask={() => handleDeleteTask(index)}
              />
            );
          })}
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask} />
    </View>
  );
}
