export default function Price({oldPrice,newPrice}){
     let oldstyles = {
            textDecoration:"line-through",
            color:"red",
            fontSize:"20px",

        };

        let newstyles = {
            color:"green",
            fontSize:"25px",
            fontWeight:"bold",

        }
      let   styles = {
        backgroundColor:"yellow",
        height:"30px",
        display:"flex",
        justifyontent:"center",
        alignItems:"Center",
        padding:" 2px 10px",
        borderBottomLeftRadius:"15px",
         borderBottomRightRadius:"15px",
    
      }
    return(
       
    
        <div style = {styles}>
            <span  style = {oldstyles}>{oldPrice}</span>
            &nbsp;  &nbsp; &nbsp;
            <span style = {newstyles}>{newPrice}</span>
        </div>
    );
    
}