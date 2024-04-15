'use client';

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

export default function RatesModal() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
        <Button 
            onClick={() => setOpenModal(true)} 
            className='my-4 w-full'
        >
            Rates & Availabilities
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
    </>
    )
}