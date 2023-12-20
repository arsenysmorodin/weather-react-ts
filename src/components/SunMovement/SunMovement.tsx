export default function SunMovement() {
    return (
        <div className="card card_sun">
            <span className="card__label">Sun movement</span>
            <div className="card__container">
                <div className="card__item">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={96}
                        height={96}
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M12 10V3M12 3L9 6M12 3L15 6M6 12L5 11M18 12L19 11M3 18H21M5 21H19M7 18C7 15.2386 9.23858 13 12 13C14.7614 13 17 15.2386 17 18"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <span>8:03</span>
                </div>
                <div className="card__item">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={96}
                        height={96}
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M6 12L5 11M18 12L19 11M3 18H21M5 21H19M7 18C7 15.2386 9.23858 13 12 13C14.7614 13 17 15.2386 17 18M12 3V10M12 10L15 7M12 10L9 7"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <span>21:35</span>
                </div>
            </div>
        </div>
    )
}
