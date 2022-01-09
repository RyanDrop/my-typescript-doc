//Generics <>
//S => State
//K => Key....


type numOrStr = number | string;
//O "=" é usado para definir um tipo por default, caso não seja definido.

function useState<S extends numOrStr = string>() {
  let state: S;
  function getState() {
    return state;
  }
  function setState(newState: S) {
    state = newState;
  }
  return { getState, setState };
}

const newState = useState(); // Caso eu não coloque um valor entre <> 
// será por padrão string, caso eu preencha com <number> será tipado como number.Não aceitara outro valores, como por exemplo <boolean>

newState.setState(1);
console.log(newState.getState());
newState.setState("Ryan"); //Error pois definimos que o tipo é number
console.log(newState.getState());
