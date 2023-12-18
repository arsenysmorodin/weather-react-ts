import './style.scss'
import Logo from '../Logo/Logo'

export default function Header() {
    return (
        <>
            <header className="header">
                <div>
                    <Logo size={72}></Logo>
                </div>
                <div className="header__container">
                    <button className="header__button header__button_active">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32px"
                            height="32px"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        Your Location
                    </button>
                    <button className="header__button">London</button>
                </div>
                <div className="header__right">
                    <button className="header__button header__button_search">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        Add city
                    </button>
                </div>
            </header>
        </>
    )
}
