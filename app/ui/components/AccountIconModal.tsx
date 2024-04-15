'use client';

import { Button, Modal, Flowbite } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { useState } from 'react';
import { BsPerson } from 'react-icons/bs';

const customTheme: CustomFlowbiteTheme = {
    modal: {
        header: {
            close: {
                base: 'ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-white hover:bg-gray-200 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white'
            }
        }
    }
}

export default function AccountIconModal() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <Flowbite theme={{ theme: customTheme }}>
            <Button 
                as='span'
                id='account-icon'
                className='hidden md:flex bg-transparent items-center border-none !p-0 !m-0 h-20 w-20 cursor-pointer'
                onClick={() => setOpenModal(true)} 
            >
                <BsPerson size={20} />
            </Button>
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Realize Dreams Travel</Modal.Header>
                <Modal.Body>
                <div className="space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Thank you for your interest in planning your dream vacation with us at here at Realize Dreams Travel Agency! We cannot wait to help you plan your biggest adventure yet.
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    In order to best serve our customers, we ask that you please contact us directly for rates and availabilities. It is important that we are sure to understand exactly what it is you are looking for so that we can help you realize your dreams! We look forward to hearing from you soon!
                    </p>
                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button 
                    onClick={() => setOpenModal(false)}
                    className='w-full'    
                >
                    I accept
                </Button>
                </Modal.Footer>
            </Modal>
        </ Flowbite>
    )
}