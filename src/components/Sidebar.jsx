import Avatar from '../img/Me.jpg'
import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';

function Sidebar() {
    return(
        <aside id="sidebar">
            <img src={ Avatar } alt="Cleberton Santos" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworks />
            <InformationContainer />
            <a href="#" className="btn">Download Currículo</a>
        </aside>
    )
}

export default Sidebar;