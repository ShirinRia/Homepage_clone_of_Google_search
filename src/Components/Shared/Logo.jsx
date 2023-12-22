import { Link } from "react-router-dom";


const Logo = ({size}) => {
    return (
       <Link to={'/'}>
        <div className={`flex justify-center items-center text-${size}`}>
                    <p className={` font-semibold`}>
                        <span className="text-sky-600">G</span>
                        <span className="text-red-600">o</span>
                        <span className="text-orange-400">o</span>
                        <span className="text-sky-600">g</span>
                        <span className="text-lime-700">l</span>
                        <span className="text-red-600">e</span>
                    </p>
                </div></Link>
    );
};

export default Logo;