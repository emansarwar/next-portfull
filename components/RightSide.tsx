import React from 'react';

const RightSide = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
            <a href="mailto:emansarwar3@gmail.com">
                <p className='text-s rotate-90 w-72 tracking-wide text-textGreen'>Get-In-Touch</p>
            </a>
            <span className='w-[2px] h-32 bg-textDark inline-flex'></span>
        </div>
    );
};

export default RightSide;