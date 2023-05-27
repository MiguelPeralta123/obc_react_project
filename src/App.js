import logo from './logo.svg';
import './App.css';
//import Greeting from './components/pure/greeting';
//import GreetingF from './components/pure/greetingF';
//import { TaskListComponent } from './components/container/task_list';
//import { DidMount, DidMountHook } from './hooks/DidMount';
//import { DidUpdate, DidUpdateHook } from './hooks/DidUpdate'
//import { WillUnmount, WillUnmountHook } from './hooks/WillUnmount'
import GreetingStyled from './components/pure/greeting_styled';

function App() {
  return (
    <div className="App">

      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        {/* Class component */}
        {/*<Greeting name="Miguel"></Greeting>*/}

        {/* Functional component */}
        {/*<GreetingF name="Miguel"></GreetingF>*/}

        {/* Task list component */}
        {/*<TaskListComponent></TaskListComponent>*/}

        {/* DidMount and useEffect */}
        {/*<DidMount></DidMount>*/}
        {/*<DidMountHook></DidMountHook>*/}

        {/* DidUpdate and useEffect */}
        {/*<DidUpdate></DidUpdate>*/}
        {/*<DidUpdateHook></DidUpdateHook>*/}

        {/* WillUnmount and useEffect */}
        {/*<WillUnmount></WillUnmount>*/}
        {/*<WillUnmountHook></WillUnmountHook>*/}

        {/* Styles with sass and ternary operators */}
        <GreetingStyled name='Miguel'></GreetingStyled>

      </header>
      
    </div>
  );
}

export default App;
