import style from './Header.module.css'

export const Header = () => {
    return (
        <header className={style.header}>
            <img src="https://brainrain.com.ua/wp-content/uploads/2016/11/intel-company-logo-png-hd-sk.png"
                 width={100} height={100} alt=""/>
        </header>
    )
}