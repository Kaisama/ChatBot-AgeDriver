
const StartSlow = (props) => {
 
  console.log('props.state:', props.state);
  const preference=(preference)=>{
    const{name,age}=props.state.userData;

    const category=props.state.userData.category;
    const product =props.state.data[category][preference];
    props.state.userData.product=product;
    props.actions.finalResult(name,age,preference,product.name);
  }
  return (
    <>
    <button className="StartSlow slow" onClick={()=>preference("slow")}>Slow</button>
    <button className="StartFast" onClick={()=>preference("fast")}>Fast</button>
    </>
  )
}

export default StartSlow