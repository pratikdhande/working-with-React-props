import './App.css';
import 'https://kit.fontawesome.com/57e2c0c179.js'

const Navbar = () => {
    return(

        <div className="container mx-auto">
            <nav className="w-full p-4 text-[0.875rem] bg-white">
                <div className="flex justify-center px-16 w-[1400px]">
                    <div className="flex grow-1 items-center flex-1">
                        <div className="className max-w-[150px] mr-8 cursor-pointer">
                            <img src="https://ineuron.ai/images/ineuron-logo.png" className=''></img>
                        </div>
                        <div className="relative w-full ml-[25px] flex-1">
                            <input type="text" placeholder="What do you want to learn" className="border border-blue-800 p-2 text-xl w-[90%] rounded-[5px] outline-0"></input>
                        </div>
                    </div>
                    
                    <div className="flex ">
                        <button className="text-blue-800 text-base font-semibold px-8 rounded py-2 bg-transparent ">Sign up</button>
                        <button className="text-white text-base font-semibold px-8 rounded py-2 bg-[#233c7b]">Sign in</button>
                    </div>
                </div>

                <div className="py-4 mx-auto mt-4">
                    <ul className=" text-[#233c7b] text-[18px] font-semibold flex justify-center text-white gap-12 ">
                        <li>Courses
                            <i className="fa-solid fa-chevron-right rotate-90 ml-[5px] "></i>
                        </li>
                        <li>One Neuron</li>
                        <li>Neuro Lab</li>
                        <li>Job Portal</li>
                        <li>Internship Portal</li>
                        <li>Become an affiliate</li>
                        <li> Hall of fame</li>
                        <li>Company
                            <i className="fa-solid fa-chevron-right rotate-90 ml-[5px] "></i>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    
    )
}

export default Navbar