
export default function useFetch(baseUrl:string){
  async function get(url:string) {
    try{
      const response = await fetch(baseUrl + url);
      const data = response.json();
      if (data)
        return data;
    }catch(error){
      console.log(error);
    }
  }

  return {get};
}