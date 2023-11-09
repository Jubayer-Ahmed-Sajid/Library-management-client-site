import read from '../assets/read.png'
import track from '../assets/track.png'
import library from '../assets/library_explorer.png'
const Services = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-12'> Our Exclusiveness</h2>
        <div className="grid grid-cols-3 bg-tertiary p-4 rounded-lg my-12">
            <div className='flex gap-4'>
                <img src={read} alt="" />
                <div>
                    <h2 className='text-xl font-semibold'>Read free library books online</h2>
                    <p>So many books are available and free to read and borrow</p>
                </div>

            </div>

            <div className='flex gap-4'>
                <img src={track} alt="" />
                <div>
                    <h2 className='text-xl font-semibold'>Keep track of your favorite books</h2>
                    <p>Organize your books using lists and reading log</p>
                </div>

            </div>

            <div className='flex gap-4'>
                <img src={library} alt="" />
                <div>
                    <h2 className='text-xl font-semibold'>Try the virtual library of pdf books </h2>
                    <p>Digital books are organized like a physical library </p>
                </div>

            </div>


            
        </div>
        </div>
    );
};

export default Services;