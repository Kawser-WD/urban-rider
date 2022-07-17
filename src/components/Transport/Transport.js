import React   from 'react';
import {Link} from 'react-router-dom';
const Transport = (props) => {
    const {name,image} = props.vehicle;
    return (
      
           <div className="col-lg-3 col-md-3 col-6" style={{marginTop:'200px'}}>
               <div className="card text-center">
                <div className="card-body">
                <img src={image} class="img-fluid"  style={{height:'150px',width:'150px'}} />
                    <h5 className="card-title">{name}</h5>
                    <Link to={`/destination/${name}`}> <button style={{padding:"5px 10px", border:'none', backgroundColor:'#01a3a4', color:'#fff'}} >Go Destination</button> </Link>
                </div>
                </div>
           </div>
   
    );
};

export default Transport;