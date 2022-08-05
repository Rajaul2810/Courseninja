import { AddIcCallOutlined, AddLinkOutlined } from '@mui/icons-material';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import React from 'react';

const Footer = () => {
    return (
        <section className='bg-dark pb-3'>
            <div className='d-flex justify-content-center p-5'>
                <div className='row w-75'>
                    <div className='col-md-6'>
                        <h4 className='text-secondary'>Contact</h4>
                        <div className='d-flex' style={{ color: 'white' }}>
                            <AddLinkOutlined />
                            <p className='ms-2'>Dhaka , Bangladesh</p>
                        </div>
                        <div className='d-flex' style={{ color: 'white' }}>
                            <AddIcCallOutlined />
                            <p className='ms-2'>01776030707</p>
                        </div>
                        <div className='d-flex' style={{ color: 'white' }}>
                            <MailOutlinedIcon />
                            <p className='ms-2'>rajaulKarim2810@gmail.com</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <h4 className='text-secondary'>About Company</h4>
                        <p className='text-secondary'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>

                </div>
            </div>
            <h6 className='text-center'style={{ color: 'white' }}>&copy; Team Crying_Obsidian 2022</h6>
        </section>
    );
};

export default Footer;