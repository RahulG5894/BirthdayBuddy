const Birthday = ({image, name, age}) => {
    const style = {
        height: "10rem",
        width: "10rem"
    }
    return <div>
        <img src={image} style={style} alt={name}/>
        <h4>{name}</h4>
        <h5>{age} Years</h5>
    </div>
}

export default Birthday;