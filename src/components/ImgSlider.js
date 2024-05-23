const data=['https://awik.io/wp-content/uploads/2018/06/unsplash.jpg', 
            'https://global.discourse-cdn.com/business7/uploads/glideapps/original/2X/4/4936e0f28f79c8a2aa95582741091356d0ed61d8.jpeg',
        'https://miro.medium.com/v2/resize:fit:1400/1*sLiZOPlZ3iqe12p4TNUF_g.png',
    'https://isotropic.co/wp-content/uploads/2021/06/54cfc270-screenshot-2021-06-07-at-19-20-51-gallery-of-ai-generated-faces-generated-photos.png',
'https://store-images.s-microsoft.com/image/apps.34120.14315710173372536.a56e10af-34fe-4ea0-8717-291d4e885e3c.aeece07e-bfe9-4ac4-abdb-f7f5f5ca0d5b?h=576'
        ]


const ImgSlider=()=>{

    return(
        <div>
            <button>Pre</button>
            <img src="https://awik.io/wp-content/uploads/2018/06/unsplash.jpg"/>
            <button>Next</button>
        </div>
    )
}

export default ImgSlider;