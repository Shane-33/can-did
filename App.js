import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ToDoList from "./src/screens/todo";
import Friends from "./src/screens/friends";
import NewTaskScreen from "./src/screens/newtask";
import Camera from "./src/screens/camera";
import ConfirmPhoto from "./src/screens/confirmphoto";
import UploadPhoto from "./src/screens/uploadphoto";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Friends">
        <Stack.Screen
          name="Friends"
          component={Friends}
          options={{
            headerStyle: {
              backgroundColor: "#749BBF",
            },
          }}
        />
        <Stack.Screen
          name="ToDoList"
          component={ToDoList}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="NewTaskScreen" component={NewTaskScreen} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="ConfirmPhoto" component={ConfirmPhoto} />
        <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
