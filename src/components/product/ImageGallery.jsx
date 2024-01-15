import { useState } from 'react'
import styles from '../../css/components/product/gallery.module.css'

function ImageGallery(){
    const images = ['/carou1.jpg','/carou2.jpg','/carou3.jpg','/carou1.jpg','/carou2.jpg','/carou3.jpg','/carou1.jpg','/carou2.jpg','/carou3.jpg']
    const [activeIndex,setActiveIndex] = useState(0);
    return(
        <div className={styles.gallery}>
            <div className={styles.icons}>
                {images.map((image,index)=>{
                    return<img src={image} className={(index === activeIndex)?styles.active+' '+styles.icon:styles.icon} onClick={()=>{setActiveIndex(index)}} 
                    onMouseOver={()=>{setActiveIndex(index)}}/>
                })}
            </div>
            <div className={styles.image}>
                <img src={images[activeIndex]}/>
            </div>
        </div>
    )   
}

export default ImageGallery