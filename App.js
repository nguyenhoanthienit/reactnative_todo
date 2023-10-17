import { Text, View, ScrollView } from "react-native";
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

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          {taskList.map((item, index) => {
            return <Task key={index} title={item} number={index + 1}/>;
          })}
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask} />
    </View>
  );
}
