
const DisplayImage = (props) => {
    const {imageUrl,link}= props.state.userData.product;
    console.log(props.state.userData.product);
  return (
    <div className="img-component">
        <div className="img-container">
        <img src={imageUrl} alt="" />
    </div>
    <a href={link} target="_blank">Link</a>
    </div>
    
  )
}

export default DisplayImage