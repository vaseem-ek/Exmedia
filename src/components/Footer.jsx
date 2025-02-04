import React from 'react'
import Dash from './Dash'
import { TbMailFilled } from 'react-icons/tb'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaPinterest, FaYoutube } from 'react-icons/fa'
import { FaThreads, FaXTwitter } from 'react-icons/fa6'

function Footer() {
    return (
        <div>

            <Dash />
            <div className='py-10 bg-gray-200'>
                <div className='py-3  flex md:justify-around flex-wrap gap-5 px-5 lg:justify-around '>
                    <div className='flex gap-1 items-center'>
                        <TbMailFilled size={25} />
                        <p className='text-xl '>info@exmediad.in</p>
                    </div>
                    <div>
                        <p className='text-xl '>KERALA – UAE</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <FaPhone />
                        <p className='text-xl '> +919526123466</p>
                    </div>
                </div>
                <div className='flex justify-center px-5'>
                    <p className='lg:text-xl text-xs text-slate-900'>
                        We can shape Your brand story & identities With impact
                    </p>
                </div>
                <div className='flex py-6 px-5 justify-center gap-5'>
                    <FaFacebook size={20} />
                    <FaLinkedin size={20} />
                    <FaXTwitter size={20} />
                    <FaPinterest size={20} />
                    <FaYoutube size={20} />
                    <FaThreads size={20} />
                    <FaInstagram size={20} />

                </div>
            </div>
            <div className='bg-gray-500 justify-center flex py-5 px-5'>
                <p className='lg:text-xl text-xs'>
                © 2024 Exmedia. All Rights Reserved | Terms & Conditions | Privacy Policy
                </p>
            </div>
        </div>
    )
}

export default Footer
