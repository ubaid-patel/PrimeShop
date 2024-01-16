import React, { Component, useEffect, useRef, useState } from "react";
import styles from '../../css/components/home/carousel.module.css'
import { getCarousel } from "../../services/homeService";
import { Link } from "react-router-dom";
const carouselBtn = 'next1.svg';

function Carousel() {
    const carouselItemsRef = useRef(null);
    const index = useRef(0);
    const indicator = useRef(0)
    const indicatorsRef = useRef(null);
    const offset = useRef(0);
    const autoScroll = useRef({ done: false, id: null })
    const items = getCarousel();
    const touchRef = useRef(0);



    function scroll(to) {
        const totalitems = items.length;
        const nextindex = index.current + to;
        let nextindi = indicator.current + to;
        if (autoScroll.current.done == false) {
            clearTimeout(autoScroll.current.id);
            autoScroll.current.done = true;
            autoScroll.current.id = null;
        }
        if (nextindi > totalitems - 1) {
            nextindi = 0;
        } else if (nextindi < 0) {
            nextindi = totalitems - 1;
        }
        if (nextindex > totalitems - 1 || nextindex < 0) {
            new Promise((resolve, reject) => {
                if (nextindex < 0) {
                    let elem = carouselItemsRef.current.children[totalitems - 1];
                    let curroffset = elem.offsetWidth;
                    elem.remove();
                    offset.current -= curroffset;
                    carouselItemsRef.current.insertBefore(elem, carouselItemsRef.current.children[0])
                    carouselItemsRef.current.style = `transition:0s;transform: translateX(${offset.current}px)`
                    resolve(curroffset);
                } else {
                    let elem = carouselItemsRef.current.children[0];
                    let curroffset = elem.offsetWidth;
                    elem.remove();
                    offset.current += curroffset;
                    carouselItemsRef.current.insertBefore(elem, carouselItemsRef.current.children[totalitems - 1])
                    carouselItemsRef.current.style = `transition:0s;transform: translateX(${offset.current}px)`
                    resolve(-carouselItemsRef.current.children[index.current - 1].offsetWidth);
                }
            }).then(
                (currOffset) => {
                    offset.current += currOffset;
                    setTimeout(() => {
                        indicatorsRef.current.children[indicator.current].classList.remove(styles.active);
                        indicatorsRef.current.children[nextindi].classList.add(styles.active);
                        indicator.current = nextindi;
                        carouselItemsRef.current.style = `transform: translateX(${offset.current}px)`
                        // nextImage();
                    }, 10)
                }
            )

        } else {
            if (to > 0) {
                const newOffset = carouselItemsRef.current.children[index.current].offsetWidth;
                offset.current -= newOffset;
            } else {
                const newOffset = carouselItemsRef.current.children[index.current - 1].offsetWidth;
                offset.current += newOffset;
            }
            indicatorsRef.current.children[indicator.current].classList.remove(styles.active);
            indicatorsRef.current.children[nextindi].classList.add(styles.active);
            indicator.current = nextindi;
            carouselItemsRef.current.style = `transform: translateX(${offset.current}px)`
            index.current += to;
            // nextImage();
        }

    }
    function nextImage() {
        autoScroll.current.done = false;
        if (autoScroll.current.id === null) {
            autoScroll.current.id = setTimeout(() => {
                scroll(1);
                autoScroll.current.done = true;
            }, 3000)
        }
    }

    useEffect(() => {
        // nextImage();
        return () => clearTimeout(autoScroll.current.id);
    }, [])

    function swipe(event) {
        const x = touchRef.current[0].clientX - event.changedTouches[0].clientX;
        const y = Math.abs(touchRef.current[0].clientY - event.changedTouches[0].clientY);

        if (x > 10 && y < 50) {
            scroll(1)
        } else if (x < -10 && y < 50) {
            scroll(-1)
        }
    }
    return (
        <div className={styles.main}>
            <div className={styles.carousel} onTouchStart={(e) => { touchRef.current = e.changedTouches }} onTouchEnd={swipe}>
                <div className={styles.prevbtn}>
                    <img src={carouselBtn} onClick={() => { scroll(-1) }} />
                </div>
                <div className={styles.nextbtn} onClick={() => { scroll(1) }}>
                    <img src={carouselBtn} />
                </div>
                <div className={styles.carousel_items} ref={carouselItemsRef}>
                    {
                        items.map((item) =><img src={item.img} />)
                    }
                </div>

            </div>
            <div className={styles.indicators} ref={indicatorsRef}>
                {

                    items.map((a, index) => (index === 0) ? <div className={`${styles.indicator} ${styles.active}`} /> :
                        <div className={styles.indicator} />)
                }
            </div>
        </div>
    )
}
export default Carousel