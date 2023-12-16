
const Menu = ({ menu }) => {
    const { logo, name, link } = menu
    return (
        <div>
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                <img src={logo} alt={name} className="w-12 h-12"/>
                <p>{name}</p>
            </a>
        </div>
    );
};

export default Menu;