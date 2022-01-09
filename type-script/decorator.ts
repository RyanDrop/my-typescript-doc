//Decorator
//Decoradores fornecem uma maneira de adicionar anotações e uma sintaxe de metaprogramação para declarações de classes e membros.

function logged(prefix: string) {
  return (target: any) => {
    console.log(`${prefix} - ${target}`);
  };
}

@logged("Logger")
class Person {}

console.log(Person);

function setAPIVersion(apiVersion: string) {
  return (target: any) => {
    return class extends target {
      version = apiVersion;
    };
  };
}
//O parametro target equivale ao constructor da classe

@setAPIVersion("1.12.9")
class API {}

console.log(new API());
