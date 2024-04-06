import { useState } from 'react';
import './appHeaderTop.scss';
import { IconLogo } from '../../../icons/IconLogo';
import { IconX } from '../../../icons/IconX'
import { IconMenu } from '../../../icons/IconMenu';

const AppHeaderTop = () => {
    const [menuOpen, setMenu] = useState(false)

    const openMenu = () => {
        setMenu((prev) => !prev)
        if (menuOpen) {

        }
    }
    return (
        <div className='headerTop'>

            <div className='container'>
                <div className='headerTop__logo'>
                    <a href="/">
                    <IconLogo />
                    </a>
                   
                </div>

                <nav className='headerTop__navigate'>
                    <ul className='headerTop__navigateList'>
                        <li className='headerTop__navigateList_item'><a href="">Автомобили в наличии</a></li>
                        <li className='headerTop__navigateList_item'><a href="">Спецпредложения</a></li>
                        <li className='headerTop__navigateList_item'><a href="">Продать авто</a></li>
                        <li className='headerTop__navigateList_item'><a href="">Сервис</a></li>
                        <li className='headerTop__navigateList_item'><a href="">Контакты</a></li>
                    </ul>

                    <button className='headerTop__button'>Заказать звонок</button>

                    <button onClick={() => openMenu()} className='headerTop__menu'>
                        {!menuOpen ? (
                            <IconMenu className='burger' />
                        ) : <IconX className='closeMenu' />
                        }

                    </button>


                </nav>
            </div>

            {/* {menuOpen && (
                <AppMenu />
            )} */}

        </div>
    )
}

export default AppHeaderTop;