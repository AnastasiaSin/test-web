import './appHeaderBottom.scss';
import { IconClock } from '../../../icons/IconClock';
import { IconMap } from '../../../icons/IconMap';
import { IconNav } from '../../../icons/IconNav';


const AppHeaderBottom = () => {
    return (
        <div className='headerBottom'>

            <div className="container">
                <nav className='headerBottom__navigate'>
                    <ul className='headerBottom__navigateList'>
                        <li className='headerBottom__navigateList_item'>
                            <IconMap />
                            <span>Олимпийский просп., 5, стр. 1, Москва</span>
                        </li>
                        <li className='headerBottom__navigateList_item'>
                            <IconNav />
                            <a href="">Проложить маршрут</a>
                        </li>
                    </ul>
                </nav>

                <div className='headerBottom__clock'>
                    <IconClock />
                    <span>9:00-21:00 (ежедневно)</span>
                </div>
            </div>
        </div>
    )
}

export default AppHeaderBottom;