import { useState } from "react";

export default function useFetch(baseUrl:string){
  const[loading, setLoading] = useState<boolean>(true);

  function get(url:string){
    return new Promise((resolve, reject) =>{
      fetch(baseUrl + url)
      .then(response => response.json())
      .then(data => {
        if (!data) {
          setLoading(false);
          return reject(data);
        }
        setLoading(false);
        resolve(data);
      })
      .catch(error => {
        setLoading(false);
        reject(error);
      });
    });
  }

  function post(url: string, body:object){
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body)
      })
        .then(response => response.json())
        .then(data => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
          setLoading(false);
          resolve(data);
        })
        .catch(error => {
          setLoading(false);
          reject(error);
        });
    });
  }

  return {get, post, loading};
}