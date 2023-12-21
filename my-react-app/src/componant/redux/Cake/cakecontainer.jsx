
import { connect } from "react-redux"
import { buyCake } from "./action"





const Cakecontainer= (props) => {
  return (
    <div>
    <h2 className="text-2xl ml-96 px-20 py-5 ">Number Of Cakes - {props.numOfCakes}</h2>
    <button className="text-2xl ml-96 px-20 py-5  border border-2xl  " onClick={props.buyCake}>Buy Cake</button>
  </div>
  )
}

 const mapstore=state=>{
          return {
            numOfCakes : state.numOfCakes
          }

 }
 const mapdispatch=dispatch=>{
     return{
      buyCake : () => dispatch(buyCake())
     }
 }


export default connect(mapstore,mapdispatch) (Cakecontainer)
