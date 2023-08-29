import {EN} from './translations'


function DangerouslySetInnerApp(){
  return (
    <>
      <h2>Dangerously Set Inner Widget</h2>
      <p dangerouslySetInnerHTML={{__html: EN.welcome}}></p>
      <button dangerouslySetInnerHTML={{__html: EN.login}}></button>
    </>
  )
}

export default DangerouslySetInnerApp;