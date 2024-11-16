import { NativeBaseProvider } from "native-base";
import Routes from "./routes"

function App() {

  const food = ["potato", "tomato", "banana"]
  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}

export default App;
