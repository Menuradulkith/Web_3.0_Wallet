//import {HiMenuAlt4} from 'react-icons/hi';
//import {AiOutlineClass} from 'react-icons/ai';

//import logo from '';

const NavbarItem = ({ title, classProps})=>{
    return(
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    );

}
const Navbar = () =>{
    return(
        <nav className='w-full flex md:justify-center justify-between items-center pl-4'>
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
            <img src= {logo} alt="logo" className="w-32 cursor-pointer"></img>

            </div>
            <ul className="text-white md:flex hiddent list-none flex-row justify-between items-center flex-initial">
                {["Markets", "Exchange","Tutorials", "Wallets"].map((item, index)=>(
                    <NavbarItem key={index} title={item} classProps={`text-sm md:text-base ${index===0 && 'font-bold'}`}/>

                ))}
            </ul>

        </nav>
    );
}

export default Navbar;