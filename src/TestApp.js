import {Provider} from 'react-redux';
import {store} from "./redux/store";
import {Player} from "./components/player/Player";
import styled from "styled-components";

const WrapperCenter = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

function TestApp() {
    return (
        <Provider store={store}>
            <WrapperCenter>
                <Player/>
            </WrapperCenter>
        </Provider>
    );
}

export default TestApp;
