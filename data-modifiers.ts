//Data modifiers
//Por padrão, todos os membros de uma classe no TypeScript são públicos. Todos os membros públicos podem ser acessados ​​em qualquer lugar sem quaisquer restrições.

class PublicUsers {
  public name?: string;
  age: number | undefined;
}

const publicUser = new PublicUsers();
publicUser.name = "Ryan";
publicUser.age = 17;

//O modificador de acesso privado garante que os membros da classe fiquem visíveis apenas para aquela classe e não sejam acessíveis fora da classe que a contém.
//O modificador de acesso protegido é semelhante ao modificador de acesso privado, exceto que os membros protegidos podem ser acessados ​​usando suas classes derivadas.

class PrivateUsers {
  private name?: string;
  protected age: number | undefined;
}

class ProtectedUsers extends PrivateUsers {
  protected nick: string;
  constructor(name: string, age: number, nick: string) {
    super();
    this.name = name; //error, name is private
    this.age = age;
    this.nick = nick;
  }
}

const PrivateUser = new PrivateUsers();
PrivateUser.name = "Ryan";
PrivateUser.age = 17; //error, age is protected, somente na classe ProtectedUsers e seus derivados.
