import React from 'react';
//import Event from '../../Event';
import react1 from '../../Images/react.svg';
import bitcoin from '../../Images/bitcoin.svg';
import ether from '../../Images/ether.svg';
import Web3 from 'web3';
import Homepage from '../Homepage/Homepage';


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
const Home = () => {

   
    // const [course , setCourse] = useState({});

    //    // localStorage.setItem('course', JSON.stringify(course));
    //     console.log(course);
    let web3js
    const connectWallet = async (e) => {
        e.preventDefault();
        if (typeof window !== "undefined" && typeof window.ethereum !== 'undefined') {
            await window.ethereum.request({ method:'eth_requestAccounts' })
            web3js = new Web3(window.ethereum);
            console.log(web3js);
        } else {
            console.log("plz install Metamask");
        }
    }


    return (
        <div className='mb-3'>
            <div className="d-grid gap-2 m-2 col-6 mx-auto mb-5 bg-info">
                <button className="btn btn-primary" onClick={connectWallet} type="button">Connect Wallet</button>
            </div>
            <h1 className='text-center text-secondary'>Our Courses</h1>
            <div className='row m-5'>
                {
                    courses.map((course) =><Homepage course={course}></Homepage> )
                }

            </div>
        </div>
    );
};

export default Home;