import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import male from '../../Images/male.svg';
import react1 from '../../Images/react.svg';
import bitcoin from '../../Images/bitcoin.svg';
import ether from '../../Images/ether.svg';
import ReactPlayer from 'react-player/youtube'
import Courseninja from '../../Courseninja';
import Web3 from 'web3';

const courses = [
    {
        id: 1,
        video: 'https://youtu.be/Yu2Pvc1ObRw',
        Cname: "React Pro",
        Price: "0.02",
        img: react1
    },
    {
        id: 2,
        video: 'https://youtu.be/Yu2Pvc1ObRw',
        Cname: "Blockchain Advance",
        Price: "0.02",
        img: bitcoin
    },
    {
        id: 3,
        video: 'https://youtu.be/Yu2Pvc1ObRw',
        Cname: "Ethereum Zero to Hero",
        Price: "0.02",
        img: ether
    },
]

const Profile = () => {
    const [btn, setBtn] = useState(false);
    const [complete, setComplete] = useState('');

    useEffect(()=>{
        handleRefound();
    })

    const handleRefound = async () => {
        const accounts = await Web3.eth.getAccounts();

      const res=   await Courseninja.methods.getRefund().send({
            from: accounts[0]
        });
    }

    const { Uid } = useParams();
    console.log(Uid)
    const found = courses.find(element => {
        return element.id === parseInt(Uid);
    });
    console.log(found);
    const myCallback = () => (setBtn(true));
    if (btn === true) {
        var kop;
        kop = (
            <span className='m-5 pb-3'> <button onClick={handleRefound} type="button" class="btn btn-warning" >Claim found</button> <button type="button" class="btn btn-success" >View Certificate</button> </span>
        );
    } else {
        kop = (
            <span className='m-5 pb-3'> <button type="button" class="btn btn-warning" disabled>Claim found </button> <button type="button" class="btn btn-success" disabled>View Certificate</button> </span>
        );
    }

    


    return (
        <section className='d-flex justify-content-center p-5'>
            <div className='w-75 border border-info'>
                <div className='bg-info d-flex justify-content-between p-3' style={{ height: '50px' }}>
                    <h4 className='text-secondary'>User Profile</h4>
                    <h4 className='text-secondary'>{found.Cname}</h4>
                </div>
                <div className='bg-light d-flex justify-content-around'>
                    <img className='m-3' style={{ height: '100px', width: '100px', }} src={male} alt='user' />
                    <p className='text-secondary pt-5'>Course Price: ${found.Price}</p>
                </div>
                {
                    btn ? <div class="alert alert-success" role="alert">Your Course has been completed successfully </div> : <div class="alert alert-danger" role="alert">You have successfully enrolled</div>

                }



                {/* <video autoplay onEnded={() => myCallback()}>
                    <source src={found.video} type="video/mp4" />
                </video> */}
                <hr />
                <ReactPlayer style={{ height: '200px', width: '100%', }} controls url={found.video} onEnded={() => myCallback()} />
                <hr />
                <div className='pb-2'>
                    {kop}
                    <div class="alert alert-success pb-3 mt-2" role="alert">You will be eligible for above both button, once you complete the course. </div>
                </div>
            </div>

        </section>
    );
};

export default Profile;