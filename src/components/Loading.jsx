import { Html, } from '@react-three/drei'
import './loading.scss'

export default function Loading(props) {

  return (
    <Html transform wrapperClass='loading' distanceFactor={5} >
      <div className="svg">
        <img src="./images/loading.svg" width="80px" />
      </div>
      <p>{props.text}</p>
    </Html>
  )
}
