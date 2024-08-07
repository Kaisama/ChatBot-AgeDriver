import '../App.css'
const StartBtn = ({actionProvider,...rest}) => {
    console.log(actionProvider,rest);
    const initialAction=()=>{
      if(actionProvider){
        actionProvider.initialAction();}
        else{
          console.error('initial action is not a function');
        }
    }
  return (
    <div>
        <button onClick={()=>initialAction()} className="startBtn">Get Started</button>
    </div>
  )
}

export default StartBtn