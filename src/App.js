import {RerenderCounter} from "./components/RerenderCounter/RerenderCounter";
import {CountProvider} from "./components/conext/context";
import {ParentPage} from "./components/parentPage/ParentPage";

function App() {
    return (
        <CountProvider>
            <ParentPage>
                <RerenderCounter/>
            </ParentPage>
        </CountProvider>
    );
}

export default App;
