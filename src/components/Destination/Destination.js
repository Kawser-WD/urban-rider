import React,{useState,useEffect} from 'react';
import './Destination.css'
import Image from'./image/Map.png';
import Logo from '../../Data/image/process.png'
import people from'./image/peopleicon.png';
import transportInfo from '../../Data/Data.json'
import {useParams} from 'react-router-dom';
import MapDirection from '../MapDirection/MapDirection';
const Destination = () => {
    const {name} = useParams();
    console.log(name)
    const [details, setDetails] = useState([]);
    useEffect(() => {
       setDetails(transportInfo)
    }, [])

    
   
    let [show, setShow] = useState(false)
    const result =  details.filter(detail=> detail.name == name)
    const info = result.map(rider => rider.image)
    const handleSubmit = (e) => {
        setShow(true)
        e.preventDefault()
    } 

   
const [origin, setOrigin] = useState('')
const [destination, setDestination] = useState('')


    
    return (
        <div className="detail">
            <div className='container'>
            <div className="row">
                <div className="col-md-6">
                {
                    !show && (
                            <div className="row">
                            <div className='card'>
                            <div className='card-body'>
                            <form onSubmit={handleSubmit}  className="form-container">
                            <div className="form-group">
                                    <label for="exampleForEmail">Pick From</label>
                                    <input type="text" className="form-control" value={origin}   name="origin" onChange={e => setOrigin(e.target.value)} required/>
                                </div>
                                <br/>
                                <div className="form-group">
                                    <label for="exampleForPassword">Pick To</label>
                                    <input type="text" className="form-control" value={destination}   name="destination" onChange={e => setDestination(e.target.value)} required/>
                                </div>
                                <br/>
                                <button type="submit"  className="btn btn-primary">Search</button>
                            </form>
                            </div>
                            </div>
                        </div>
                    )
                }
               {
                   show && (
                       <div className='card'>
                        <div className='card-body'>
                        <div className="form-container">
                           <div className='d-flex flex-row bd-highlight mb-3'>
                          <div className='p-2'>
                            <img src={Logo} className="img-fluid" alt=""/>
                          </div>
                          <div className='p-2'>
                          <h3>{origin}</h3>
                           <h3>To</h3>
                            <h3>{destination}</h3>
                          </div>
                           </div>
                        <div>
                       <div className="row">
                           <div className="col-md-3">
                           <img style={{width: '40px'}} src={info} alt=""/>
                           </div>
                           <div className="col-md-3">
                           <img style={{width: '40px'}} src={people} alt=""/>
                           </div>
                           <div className="col-md-3">
                           <h5>$15</h5>
                           </div>
                       </div>
                        </div>
                        <div>
                        <div className="row">
                           <div className="col-md-3">
                           <img style={{width: '40px'}} src={info} alt=""/>
                           </div>
                           <div className="col-md-3">
                           <img style={{width: '40px'}} src={people} alt=""/>
                           </div>
                           <div className="col-md-3">
                           <h5>$15</h5>
                           </div>
                       </div>
                        </div>
                        <div>
                        <div className="row">
                           <div className="col-md-3">
                           <img style={{width: '40px'}} src={info} alt=""/>
                           </div>
                           <div className="col-md-3">
                           <img style={{width: '40px'}} src={people} alt=""/>
                           </div>
                           <div className="col-md-3">
                           <h5>$15</h5>
                           </div>
                       </div>
                        </div>        
                       </div>
                        </div>
                       </div>
                   )
               }
               </div>
               
               <div className="col-md-6">
                 <MapDirection/>
               </div>
               </div>
            </div>
               </div>
          
    );
};

export default Destination;