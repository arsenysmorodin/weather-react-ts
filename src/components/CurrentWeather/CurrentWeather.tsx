import './../../style/cards.scss'

export default function CurrentWeather() {
    return (
        <>
            <div className="card card_current-weather bg bg_clear">
                <span className="card__label">Today's weather</span>
                <span className="card__temperature">
                    23
                    <span className="card__temperature-deg">
                        &deg;<span>C</span>
                    </span>
                </span>
                <span className="card__item">
                    <svg
                        className="card__icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    Clear
                </span>
                <span className="card__item">
                    <svg
                        className="card__icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M15.7639 7C16.3132 6.38625 17.1115 6 18 6C19.6569 6 21 7.34315 21 9C21 10.6569 19.6569 12 18 12H3M8.50926 4.66667C8.87548 4.2575 9.40767 4 10 4C11.1046 4 12 4.89543 12 6C12 7.10457 11.1046 8 10 8H3M11.5093 19.3333C11.8755 19.7425 12.4077 20 13 20C14.1046 20 15 19.1046 15 18C15 16.8954 14.1046 16 13 16H3"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    7 m/s
                </span>
                <div className="grow-1" />
                <div className="flex">
                    <div className="card__aqi">
                        <svg
                            className="card__icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M8.5 16C8.5 16 9.34213 16.3664 9.9 16.4635C11.546 16.7498 12.454 15.2502 14.1 15.5365C14.6579 15.6336 15.5 16 15.5 16M7.5 12C7.5 12 8.58274 12.3664 9.3 12.4635C11.4163 12.7498 12.5837 11.2502 14.7 11.5365C15.4173 11.6336 16.5 12 16.5 12M8.5 8C8.5 8 9.34213 8.36641 9.9 8.46346C11.546 8.74982 12.454 7.25018 14.1 7.53654C14.6579 7.63359 15.5 8 15.5 8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        AQI 13
                    </div>
                    <div className="grow-1" />
                </div>
            </div>
        </>
    )
}
