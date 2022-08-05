import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import web3 from "./web3";
import Web3 from 'web3';
import Courseninja from '../../Courseninja';

const Homepage = ({ course }) => {
    const [base, setBase] = useState(false);
    useEffect(() => {
        transferMoney();
    })
    var value = "0.02";
    const transferMoney = async (e) => {

        const web3 = new Web3(window.web3.currentProvider);
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
        const res = await Courseninja.methods.enrollCourse().send({
            from: accounts[0],
            value: Web3.utils.toWei(value, 'ether'),

        })
       
    }
    return (
        <div className='col-md-4' style={{ boxShadow: '5px 5px 5px lightgrey' }}>
            <div className="card" >
                <img className=' bg-info' src={course.img} style={{ height: '200px', width: '100%', }} alt="bb" />
                <div className="card-body">
                    <h5 className="card-title text-secondary">{course.Cname}</h5>
                    <p className="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p className='text-secondary p-3' style={{ backgroundColor: 'lightgrey', borderRadius: '10px', }}>Price: {course.Price} Ether</p>
                    {/* <!-- Button trigger modal --> */}
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        BUY NOW
                    </button>

                    {/* <!-- Modal --> */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">{course.Cname}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    {course.Price} Ether

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    {base ? <Link to={`/profile/${course.id}`} className="btn btn-primary">lets go</Link> : <button onClick={transferMoney} className="btn btn-primary">Pay Now</button>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Homepage;