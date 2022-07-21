import { NativeBaseProvider} from "native-base";
import {THEME}  from './src/styles/theme';
import { SignIn } from "./src/sreens/SignIn";
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold})
  return (
    <NativeBaseProvider theme={THEME}>
      <SignIn/>
    </NativeBaseProvider>
   
  );
}

