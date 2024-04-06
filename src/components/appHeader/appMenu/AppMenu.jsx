import './appMenu.scss'
const AppMenu = () => {
    return (
        <div className="menu">
             <ul className='menu__list'>
                        <li className='menu__list_item'><a href="">Автомобили в наличии</a></li>
                        <li className='menu__list_item'><a href="">Спецпредложения</a></li>
                        <li className='menu__list_item'><a href="">Продать авто</a></li>
                        <li className='menu__list_item'><a href="">Сервис</a></li>
                        <li className='menu__list_item'><a href="">Контакты</a></li>
                    </ul>
        </div>
    )
}

export default AppMenu;