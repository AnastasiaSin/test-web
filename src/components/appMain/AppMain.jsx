import GridCard from "./GridCard/GridCard"
import './appMain.scss'

const AppMain = () => {
    return (
        <main className="main">
            <div className="container">
                <h1 className="main__title">Теперь услуги дилерского центра Вы можете получить онлайн!</h1>
                <GridCard />
            </div>

        </main>

    )
}

export default AppMain