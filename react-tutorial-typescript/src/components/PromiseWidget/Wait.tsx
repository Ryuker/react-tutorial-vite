// sets a new timeout when wait is called in an component that imports it.
const wait = (ms:number) => {
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, ms);
  });
}

export default wait;