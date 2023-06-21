// import React from 'react'
// import "../index.css"
export default function Navbar() {
    return (
        <nav>
            <div id="logo">
                <a href="./">
                    <img src="https://expertvagabond.com/wp-content/uploads/expert-vagabond-logo-main.png"
                        srcset="https://expertvagabond.com/wp-content/uploads/expert-vagabond-logo-main.png 400w, https://expertvagabond.com/wp-content/uploads/expert-vagabond-logo-main-333x150.png 333w"
                        sizes=" 200px"
                        class="size-full size-ratio-full wp-image-38608 header-logo-img ggnoads" alt="Expert Vagabond"
                        data-pin-nopin="true" />
                </a>
            </div>
            <div id="navitemContent">
                <div class="navItemsContent" ><a style={{color:"white",textDecoration:"none"}} href='./'>Destinations</a></div>
                <div class="navItemsContent"><a style={{color:"white",textDecoration:"none"}}  href='./'>Travel Tips</a></div>
                <div class="navItemsContent"><a style={{color:"white",textDecoration:"none"}} href='./'>Photography</a></div>
                <div class="navItemsContent"><a style={{color:"white",textDecoration:"none"}} href='./'>Nomadic Life</a></div>

            </div>
            <div id="search"><button><svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="24" width="24"
                viewBox="0 0 12 12" class="magnifying-glass">
                <path
                    d="M10.37 9.474L7.994 7.1l-.17-.1a3.45 3.45 0 0 0 .644-2.01A3.478 3.478 0 1 0 4.99 8.47c.75 0 1.442-.24 2.01-.648l.098.17 2.375 2.373c.19.188.543.142.79-.105s.293-.6.104-.79zm-5.38-2.27a2.21 2.21 0 1 1 2.21-2.21A2.21 2.21 0 0 1 4.99 7.21z">
                </path>
            </svg></button></div>
            {/* style={{textDecoration: 'none'}}  */}
        </nav>
    )
}
