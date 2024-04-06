import './gridCard.scss';
import Bgimg from '../../../image/Bgimg.png'
import auto2 from '../../../image/auto2.png'
import phone3 from '../../../image/phone3.png'
import auto4 from '../../../image/auto4.png'
import auto2Medium from '../../../image/auto2-medium.png'
const GridCard = () => {
    return (
        <div className="card">

            <div className="card__container">
                <div className="card__item">
                    <h2 className="card__item_title">Диагностика автомобиля перед покупкой</h2>
                    <p className="card__item_descr">Расскажем обо всех скрытых дефектах автомобиля с пробегом</p>
                    <button className="card__item_btn">Записаться</button>
                </div>
                <img className='card__img card__img1' src={Bgimg} style={{}} alt="" />
            </div>


            <div className="card__container auto2">
                <div className="card__item">
                    <h2 className="card__item_title">Онлайн показ автомобиля по видеосвязи</h2>
                    <p className="card__item_descr">Проведем онлайн-показ интересующего автомобиля в удобное для Вас время</p>
                    <button className="card__item_btn">Оставить заявку</button>
                </div>
                <img className='card__img card__img2' src={auto2} srcSet={`${auto2} 400w, ${auto2Medium} 217w`} sizes="(max-width: 1920px) 400px, (max-width: 1199px) 217px,
            (min-width: 1024px) 33.3vw,
            100vw" alt='' />
            </div>


            <div className="card__container">
                <div className="card__item">
                    <h2 className="card__item_title">Онлайн бронирование</h2>
                    <p className="card__item_descr">Забронируйте понравившийся автомобиль без визита в дилерский центр</p>
                    <button className="card__item_btn">Забронировать</button>
                </div>
                <img className='card__img card__img3' style={{}} src={phone3} alt='' />
            </div>


            <div className="card__container">
                <div className="card__item">
                    <h2 className="card__item_title">Онлайн оценка автомобиля с пробегом</h2>
                    <p className="card__item_descr">Узнайте предварительную стоимость автомобиля за 1 мин, указав его параметры</p>
                    <button className="card__item_btn">Оценить</button>
                </div>

                <img className='card__img card__img4' style={{}} src={auto4} alt='' />
            </div>

        </div>

    )
}

export default GridCard



{/* <div style={{width: 424, height: 512, position: 'relative', borderRadius: 12, overflow: 'hidden'}}>
  <div style={{width: 424, height: 512, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%), linear-gradient(90deg, rgba(18, 18, 18, 0.60) 0%, rgba(0, 0, 0, 0) 100%)', borderRadius: 12}} />
  <img style={{width: 400, height: 192, left: 12, top: 307, position: 'absolute'}} src="https://via.placeholder.com/400x192" />
  <div style={{width: 143, left: 32, top: 156, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
    <div style={{borderRadius: 8, overflow: 'hidden', border: '1px white solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
      <div style={{width: 142, paddingLeft: 28, paddingRight: 28, paddingTop: 8, paddingBottom: 8, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
        <div style={{color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '600', letterSpacing: 0.46, wordWrap: 'break-word'}}>Записаться</div>
      </div>
    </div>
  </div>
  <div style={{width: 295, left: 32, top: 88, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 18, wordWrap: 'break-word'}}>Расскажем обо всех скрытых дефектах автомобиля с пробегом</div>
  <div style={{width: 338, left: 32, top: 32, position: 'absolute', color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: '500', lineHeight: 22, wordWrap: 'break-word'}}>Диагностика автомобиля<br/>перед покупкой</div>
</div> */}