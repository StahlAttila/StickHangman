import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import menu from '../components/MenuScreen/index';
import game from '../components/GameScreen/index';
import shop from '../components/ShopScreen/index';

const screens = {
    Menu: {
        screen: menu,
        navigationOptions: {
            headerShown: false,
        }
    },
    Game: {
        screen: game,
        navigationOptions: {
            headerShown: false,
        }
    },
    Shop: {
        screen: shop,
        navigationOptions: {
            headerShown: false,
        }
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);