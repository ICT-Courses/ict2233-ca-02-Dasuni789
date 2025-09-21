import React from 'react';

export default function Footer() {
    return (
        <footer className=' main-footer bg-white border-top text-center py-4 mt-3'>
          <p className='mb-1'> © {new Date().getFullYear()} Dasuni Ekanayaka All Right Reserved. </p>
          <div>
            <a href= "https://github.com/Dasuni789" target='_blank' rel="noreferrer" className ="me-3"> GitHub</a>
            <a href= "https://www.linkedin.com/in/dasuni-ekanayaka-2356432b8/" target='_blank' rel="noreferrer" className ="me-3"> Linkedin</a>
             <a href= "etmdasuni@gmail.com" className ="me-3"> Email</a>
            </div>  
        </footer>
    );
};

