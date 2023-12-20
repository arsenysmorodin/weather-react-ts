export default function Details() {
    return (
        <div className="card card_details">
            <span className="card__label">Details</span>
            <div className="card__container">
                <div className="card__item">
                    <span className="card__item-text">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={30}
                            height={30}
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M8 19C8 20.1046 8.89543 21 10 21C11.1046 21 12 20.1046 12 19V11M12 11C13.1256 11 14.1643 11.3719 15 11.9996C15.8357 11.3719 16.8744 11 18 11C19.1258 11 20.1643 11.3721 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3.83566 11.3723 4.87439 11 6 11C7.12561 11 8.16434 11.3719 9 11.9996C9.83566 11.3719 10.8744 11 12 11Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        Percipitation
                    </span>
                    <span className="card__item-text_bold">0</span>
                </div>
                <div className="card__item">
                    <span className="card__item-text">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            height={30}
                            width={30}
                            fill="none"
                        >
                            <path
                                d="M21 14.7C21 18.1794 19.0438 21 15.5 21C11.9562 21 10 18.1794 10 14.7C10 11.2206 15.5 3 15.5 3C15.5 3 21 11.2206 21 14.7Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M8 8.2C8 9.7464 7.11083 11 5.5 11C3.88917 11 3 9.7464 3 8.2C3 6.6536 5.5 3 5.5 3C5.5 3 8 6.6536 8 8.2Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        Humidity
                    </span>
                    <span className="card__item-text_bold">55%</span>
                </div>
                <div className="card__item">
                    <span className="card__item-text">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={30}
                            height={30}
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        Visidility
                    </span>
                    <span className="card__item-text_bold">14 km</span>
                </div>
                <div className="card__item">
                    <span className="card__item-text">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={30}
                            height={30}
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M12 13C10.8954 13 10 13.8954 10 15C10 16.1046 10.8954 17 12 17C13.1046 17 14 16.1046 14 15C14 13.8954 13.1046 13 12 13ZM12 13V6M8 8H8.01M16 8H16.01M18 12H18.01M6 12H6.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        Pressure
                    </span>
                    <span className="card__item-text_bold">1015 hPa</span>
                </div>
            </div>
        </div>
    )
}
