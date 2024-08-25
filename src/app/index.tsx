import { View } from "react-native";
import ExampleComponent from "../lib/components/example-component";
import config from "../lib/config/config";

export default function App() {
  console.log(config.url_api_backend, "is-prod");
  return (
    <View className="h-full bg-blue-500">
      <ExampleComponent />
    </View>
  );
}
