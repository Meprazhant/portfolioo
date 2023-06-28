import React from 'react'

function Solar() {
    return (
        <div className="solar-system">
            <div id="sun">
                <img src="https://i.ibb.co/WK27xWW/329191215-1563842450803063-6177692811146630390-n.jpg" alt="" />
            </div>

            <div className="orbit mercury-orbit"></div>
            <div className="mercury-spin">
                <div className="mercury">
                    <img src="https://raw.githubusercontent.com/shahzaibkhalid/mern-app-generator/master/static/logo.png" alt="" />
                </div>
            </div>


            <div className="orbit venus-orbit"></div>
            <div className="venus-spin">
                <div className="venus">
                    <img src="https://th.bing.com/th/id/R.744f96b18fb3ef81b05512d78b679e25?rik=0FPv63kO3AKlmQ&pid=ImgRaw&r=0" alt="" />
                </div>
            </div>

            <div className="orbit earth-orbit"></div>
            <div className="earth-spin">
                <img id="earth" src="https://th.bing.com/th/id/R.b81c0382fdfc29bc4a6603c1846f0acf?rik=AUACzJrX%2f0VCdA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fphp%2fphp_PNG35.png&ehk=SDq0mYWBBsWE3A6HnxdvAQErErsuHxmn50YjvmaL83Q%3d&risl=&pid=ImgRaw&r=0" />
            </div>

            <div className="orbit mars-orbit"></div>
            <div className="mars-spin">
                <div id="mars">
                    <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-1024.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Solar