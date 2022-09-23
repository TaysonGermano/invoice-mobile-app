import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "./theme/Colors";

//components
import InvoicesScreen from "./screens/InvoicesScreen";
import ContactsScreen from "./screens/ContactsScreen";
import UploadScreen from "./screens/UploadScreen";
import ProfileScreen from "./screens/ProfileScreen";
import InvoiceProvider from "./context/invoice/InvoiceContext";
import InvoiceDetailsScreen from "./screens/InvoiceDetailsScreen";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  function Home() {
    return (
      <BottomTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.primary,
          tabBarStyle: {
            backgroundColor: "#fff",
          },
        }}
      >
        <BottomTab.Screen
          name="Invoices"
          component={InvoicesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="newspaper" size={size} color={color} />
            ),
          }}
        />
        {/* <BottomTab.Screen
          name="Contacts"
          component={ContactsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people" size={size} color={color} />
            ),
          }}
        /> */}
        <BottomTab.Screen
          name="Upload"
          component={UploadScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add" size={size} color={color} />
            ),
            title: "Add New Invoice",
          }}
        />
        {/* <BottomTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        /> */}
      </BottomTab.Navigator>
    );
  }

  return (
    <InvoiceProvider>
      <NavigationContainer
        theme={{
          colors: {
            background: Colors.background,
          },
        }}
      >
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="InvoiceDetails"
            component={InvoiceDetailsScreen}
            options={{
              title: "Invoice Details",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </InvoiceProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
