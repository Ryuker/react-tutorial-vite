import { useWelcomeGreeting } from "./useGreeting.hook.tsx";
import useShowPerson from "./useShowPerson.hook.tsx";

function App(){
  useWelcomeGreeting(); // calling my custom hook

  useShowPerson({adress: "piccadily circus 10"});
}

export default App;