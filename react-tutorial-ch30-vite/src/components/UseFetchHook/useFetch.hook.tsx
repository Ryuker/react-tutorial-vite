//https://www.typescriptlang.org/docs/handbook/2/generics.html < typescript generics explained

export default function useFetch(baseUrl:string){

  async function get(url:string) {
    try{
      const response = await fetch(baseUrl + url);
      const data = response.json();
      if (data )
        return data;
    }catch(error){
      console.log(error);
    }
    return null;
  }

  return {get};
}