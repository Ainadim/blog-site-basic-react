import profile from '../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between pb-5 my-10 items-center border-b-4 md:flex max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;