

const Card=({data})=>{
    return(
     <div className="cardcss">
     <p>UserId: <span>{data.userId}</span></p>
     <p>ID: <span>{data.id}</span></p>
     <u><strong><p className="card-title">Title: <span>{data.title}</span></p></strong></u>
     <p className="cardbody">Body: <span>{data.body}</span></p>
     <a href="#"><i class="fa fa-dribbble"></i></a> &nbsp;
     <a href="#"><i class="fa fa-twitter"></i></a>  &nbsp;
     <a href="#"><i class="fa fa-linkedin"></i></a>  &nbsp;
     <a href="#"><i class="fa fa-facebook"></i></a> 
    </div> 
    )
}
export default Card;