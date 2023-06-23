import './App.css';
//import Greeting from './components/pure/greeting';
//import GreetingF from './components/pure/greetingF';
//import { TaskListComponent } from './components/container/task_list';
//import { DidMount, DidMountHook } from './hooks/DidMount';
//import { DidUpdate, DidUpdateHook } from './hooks/DidUpdate'
//import { WillUnmount, WillUnmountHook } from './hooks/WillUnmount'
//import GreetingStyled from './components/pure/greeting_styled';
//import LoginFormik from './components/pure/forms/loginFormik';
//import RegisterFormik from './components/pure/forms/registerFormik';
import SignupFormik from './components/pure/forms/signupFormik';

function App() {
  return (
    <div className="App">

      {/* Class component */}
      {/*<Greeting name="Miguel"></Greeting>*/}

      {/* Functional component */}
      {/*<GreetingF name="Miguel"></GreetingF>*/}

      {/* Task list component */}
      {/* <TaskListComponent></TaskListComponent> */}

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
      {/*<GreetingStyled name='Miguel'></GreetingStyled>*/}

      {/* Form with Formik */}
      {/* <RegisterFormik></RegisterFormik> */}

      {/* Form with Formik and Yup */}
      <SignupFormik></SignupFormik>

    </div>
  );
}

export default App;
