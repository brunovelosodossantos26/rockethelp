import { NativeBaseProvider} from "native-base";
import { SignIn } from "./src/sreens/SignIn";

export default function App() {
  return (
    <NativeBaseProvider>
      <SignIn/>
    </NativeBaseProvider>
   
  );
}

