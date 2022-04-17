import {Provider} from 'react-redux';
import {store} from "./redux/store";
import {Player} from "./components/player/Player";
import {WrapperCenter} from "./mainStyle";

function Main() {
    return (
        <Provider store={store}>
            <WrapperCenter>
                <Player/>
            </WrapperCenter>
        </Provider>
    );
}

export default Main;
