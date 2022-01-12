import { ReactComponent as GitHubicon } from 'assets/img/Github.svg';
import './styles.css';
function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/Buenovictor25">
                        <div className="dsmovie-contact-container">
                            <GitHubicon />
                            <p className="dsmovie-contact-link">/devsuperior</p>
                        </div>

                    </a>
                </div>
            </nav>
        </header>
    );

}

export default Navbar;