import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {Details} from '../sreens/Details';
import {Home} from '../sreens/Home';
import {Register} from '../sreens/Register';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}} >
            <Screen name="home" component={Home} />
            <Screen name="new" component={Register} />
            <Screen name="details" component={Details} />
        </Navigator>
    )
}