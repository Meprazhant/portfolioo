import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'

function Contact() {
    return (
        <div id='contact'>
            <div class="background">
                <div class="container">
                    <div class="screen">
                        <div class="screen-header">
                            <div class="screen-header-left">
                                <div class="screen-header-button close"></div>
                                <div class="screen-header-button maximize"></div>
                                <div class="screen-header-button minimize"></div>
                            </div>
                            <div class="screen-header-right">
                                <div class="screen-header-ellipsis"></div>
                                <div class="screen-header-ellipsis"></div>
                                <div class="screen-header-ellipsis"></div>
                            </div>
                        </div>
                        <div class="screen-body">
                            <div class="screen-body-item left">
                                <div class="app-title">
                                    <span>CONTACT ME</span>
                                </div>
                                <div className="c-info">
                                    <div class="app-contact">CONTACT NO: +977 98405749X1</div>
                                    <div class="app-contact">EMAIL :  &nbsp;
                                        <a href="mailto:
                                        meprazhant@gmail.com">
                                            meprazhant@gmail.com
                                        </a>
                                    </div>
                                    <div class="app-contact">ADDRESS :  &nbsp;
                                        <a href="/" target='_blank'>
                                            Kachankawal 02, Jhapa, Nepal
                                        </a>
                                    </div>

                                    <div className="socials">
                                        <a href="https://www.facebook.com/prashant.0413" target='_blank'>
                                            <BsFacebook />
                                        </a>
                                        <a href="https://www.instagram.com/prashant.0413" target='_blank'>
                                            <BsInstagram />
                                        </a>
                                        <a href="https://www.linkedin.com/in/meprazhant" target='_blank'>
                                            <BsLinkedin />
                                        </a>
                                        <a href="https://www.github.com/meprazhant" target='_blank'>
                                            <BsGithub />
                                        </a>

                                    </div>

                                </div>


                            </div>
                            {/* <div class="screen-body-item">
                                <div class="app-form">
                                    <div class="app-form-group">
                                        <input class="app-form-control" placeholder="NAME" value="Krisantus Wanandi" />
                                    </div>
                                    <div class="app-form-group">
                                        <input class="app-form-control" placeholder="EMAIL" />
                                    </div>
                                    <div class="app-form-group">
                                        <input class="app-form-control" placeholder="CONTACT NO" />
                                    </div>
                                    <div class="app-form-group message">
                                        <input class="app-form-control" placeholder="MESSAGE" />
                                    </div>
                                    <div class="app-form-group buttons">
                                        <button class="app-form-button">CANCEL</button>
                                        <button class="app-form-button">SEND</button>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact