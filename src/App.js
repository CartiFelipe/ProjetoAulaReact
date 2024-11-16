import { NativeBaseProvider } from "native-base";
import Routes from "./routes"

function App() {


  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}

export default App;
