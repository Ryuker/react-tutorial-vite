//https://www.typescriptlang.org/docs/handbook/2/generics.html < typescript generics explained

export default function Fetch(baseUrl:string){

  async function get<Type>(url:string): Promise<Type[]> {
    try{
      const response = await fetch(baseUrl + url);
      const data = await response.json();
      if (data )
        return data;   
    }catch(error){
      console.log(error);
    }
    return new Promise(() => {});
  }

  return {get};
}

const {get} = Fetch("www.google.com");

const data: user[] = get<user>("www.google.com");
const users: user[] = await data.map(user => user);



//generic experiments

interface user{
  name: string;
  adress: string;
}

function fetchGeneric<Type>(arg: Type[], url: string): Type[] {
  console.log(url);
  console.log(arg.length);
  return arg;
}

const myText = fetchGeneric<user>([
  {name: "user1" , adress:"bla1"}, 
  {name: "user2", adress: "bla2"}
],"www.google.com");

myText;


// generic function that returns promise
function someFunc<Type>(url: string): Promise<Type>{

  console.log(url);
  const user = {id: "01", name: "Tim", username: "Timinator"};
  const user2 = {id: "01", name: "Tim", username: "Timinator"};
  const user3 = {id: "01", name: "Tim", username: "Timinator"};

  const users = [user, user2, user3];

  if (users)
    return new Promise(() => { users });

  return new Promise(() => {
    console.log('resolve someFunc');
  });
}

someFunc<user[]>("www.google.com");
