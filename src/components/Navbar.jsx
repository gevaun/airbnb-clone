import airbnbLogo from '../assets/airbnb-logo.png';

export default function Navbar() {
    return (
            <nav className='p-4 mb-12 shadow-sm'>
                <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                    <a href="#">
                        <img src={airbnbLogo} alt="Airbnb Logo" id="nav-logo"/>
                    </a>
                </div>
            </nav>
    )
}