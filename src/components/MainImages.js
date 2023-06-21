import React from 'react'


export default function MainImages(props) {
    return (<>

        <h2 class="headings">{props.heading}</h2>
        <section class="container">
            <div class="images"><img width="400px"
                src={props.image1}
                alt="" />
                <h4 class="first line">Tips For Visiting The Colosseum In Rome</h4>
            </div>
            <div class="images"><img width="400px"
                src={props.image2}
                alt="" />
                <h4 class="first line">12 Best Things To Do In Annecy, France</h4>
            </div>
            <div class="images" ><img
                src={props.image3} alt="" />
                <h4 class="first line">Everything About Driving in costo rica i will tell you everthing abotut this beautifull place</h4>
            </div>
        </section>
        <hr class="mainLine" />

    </>
    )
}
