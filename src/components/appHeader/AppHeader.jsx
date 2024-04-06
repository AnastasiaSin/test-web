import AppHeaderTop from './appHeaderTop/AppHeaderTop';
import './appHeader.scss';
import AppHeaderBottom from './appHeaderBottom/AppHeaderBottom';


const AppHeader = () => {
    return (
        <header className="header">
            <AppHeaderTop/>
            <div className='header__separator header__separator_top'></div>
            <AppHeaderBottom/>
            <div className='header__separator header__separator_bottom'></div>
        </header>
    )
}

export default AppHeader;