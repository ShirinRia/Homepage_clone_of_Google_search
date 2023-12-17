

const Logo = ({size}) => {
    return (
        <div className="flex justify-center items-center">
                    <h1 className={`text-${size} font-semibold`}>
                        <span className="text-sky-600">G</span>
                        <span className="text-red-600">o</span>
                        <span className="text-orange-400">o</span>
                        <span className="text-sky-600">g</span>
                        <span className="text-lime-700">l</span>
                        <span className="text-red-600">e</span>
                    </h1>
                </div>
    );
};

export default Logo;