import photoGrid from '../assets/photo-grid.png';

export default function Hero() {
    return (
        <div className="p-4">
            <div className='row mb-4'>
                    <img src={photoGrid} alt="Photo Grid" className="img-fluid" />
            </div>
            <div className='row'>
                <h1 className='text-4xl font-bold pt-4 pb-4'>Online Experiences</h1>
                <p className='text-2xl'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}
