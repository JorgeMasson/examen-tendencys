import Main from "../src/Pages/main";
import PlatformProvider from "./Platform/chakra";
import { AppProvider } from "./context/app-context";

function App() {
  return (
    <PlatformProvider>
      <AppProvider>
        <Main />
      </AppProvider>
    </PlatformProvider>
  );
}

export default App;
