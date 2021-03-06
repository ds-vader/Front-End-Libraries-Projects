import React from 'react'

const PersonalInfo = () => {
    return (
        <div className="resume_item resume_info">
            <div className="title">
                <p className="bold">medynskyi dmytro</p>
                <p className="regular">Front End developer</p>
            </div>
            <ul>
                <li>
                    <div className="icon">
                        <a href="https://www.google.com.ua/maps/place/%D0%9D%D0%BE%D0%B2%D0%B0+%D0%9E%D0%B4%D0%B5%D1%81%D0%B0,+%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+56601/@47.2940168,31.7455837,13z/data=!3m1!4b1!4m5!3m4!1s0x40c59ba583a6f8e9:0xdca12100dd90b26b!8m2!3d47.309181!4d31.7883933" target='_blank'>
                            <i className="fas fa-map-signs fa-2x"></i>
                        </a>
                    </div>
                    <div className="data">
                        <a href="https://www.google.com.ua/maps/place/%D0%9D%D0%BE%D0%B2%D0%B0+%D0%9E%D0%B4%D0%B5%D1%81%D0%B0,+%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+56601/@47.2940168,31.7455837,13z/data=!3m1!4b1!4m5!3m4!1s0x40c59ba583a6f8e9:0xdca12100dd90b26b!8m2!3d47.309181!4d31.7883933" target='_blank'>
                            Nova Odesa <br /> Mykolaiv area <br /> Ukraine
                                        </a>
                    </div>
                </li>
                <li>

                    <div className="icon">
                        <a href="tel:380975866171">
                            <i className="fas fa-mobile-alt fa-2x"></i>
                        </a>
                    </div>
                    <div className="data">
                        <a href="tel:380975866171">
                            +380 (97) 586-61-71
                                    </a>
                    </div>
                </li>
                <li>
                    <div className="icon">
                        <a href="mailto: dv.medynskyi@gmail.com">
                            <i className="fas fa-envelope fa-2x"></i>
                        </a>
                    </div>
                    <div className="data" id='CVMail'>
                        <a href="mailto: dv.medynskyi@gmail.com">
                            dv.medynskyi@gmail.com
                                        </a>
                    </div>
                </li>
                <li>
                    <div className="icon">
                        <a href="https://2sad.site/" target='_blank'>
                            <i className="fab fa-weebly fa-2x"></i>
                        </a>
                    </div>
                    <div className="data">
                        <a href="https://2sad.site/" target='_blank'>
                            2sad.site
                                        </a>
                    </div>
                </li>
            </ul>
        </div>
    )
}


export default PersonalInfo