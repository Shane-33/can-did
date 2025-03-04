import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; 
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';

const WelcomePage = ({ username, activities }) => {
  const navigation = useNavigation();


  const todaystasks = [
    "Complete Physics Assignment",
    "Solve 3 leetcode questions",
    "Do SEEDS presentation",
    "Pack for trip",
    "Pick up Amazon Order",
  ];

  const [completedTasks, setCompletedTasks] = useState([]);

  const toggleTaskCompletion = (task) => {
    if (completedTasks.includes(task)) {
      setCompletedTasks(completedTasks.filter((item) => item !== task));
    } else {
      setCompletedTasks([...completedTasks, task]);
    }
  };

  const renderTaskItem = ({ item }) => {
    const isCompleted = completedTasks.includes(item);
    return (
      <TouchableOpacity
        style={[
          styles.taskItem,
          { backgroundColor: isCompleted ? "#E6F7FF" : "#E6F7FF" }, // Use light blue color for default
        ]}
        onPress={() => toggleTaskCompletion(item)}
      >
        <View style={styles.checkbox}>
          {isCompleted && <Icon name="check" size={15} color="#749BBF" />}
        </View>
        <Text style={styles.taskText}>{item}</Text>
      </TouchableOpacity>
    );
  };

  const handleGoToTodoList = () => {
    navigation.navigate("ToDoList"); // Navigate to the ToDoList screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello, </Text>
      <Text style={styles.name}>Whitney!</Text>
      <Text style={styles.subHeading}>here's what you have planned for the day:</Text>
      <FlatList
        data={todaystasks}
        renderItem={renderTaskItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.taskList}
      />
      <TouchableOpacity onPress={handleGoToTodoList} style={styles.button}>
        <Text style={styles.buttonText}>To-Do List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 50,
    fontFamily: "GreatVibes-Regular",
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 200,
  },
  name :{
    fontSize: 50,
    fontFamily: "GreatVibes-Regular",
    fontWeight: "bold",
  },
  taskList: {
    marginTop: 2,
  },
  subHeading: {
    fontSize: 22,
    marginTop: 120,
    color: 'grey',
    fontFamily: 'Times New Roman',
    marginBottom: 10,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    width: Dimensions.get("window").width,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#749BBF",
    marginRight: 10,
    borderRadius: 3,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  taskText: {
    fontSize: 15,
  },
  button: {
    marginTop: 20,
    marginBottom: 30,
    padding: 10,
    backgroundColor: "#749BBF",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default WelcomePage;
