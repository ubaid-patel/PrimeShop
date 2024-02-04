import { useEffect, useRef } from 'react'
import styles from '../../css/components/product_gallery/price_range.module.css'
export default function PriceRange() {
    const slider1 = useRef(null);
    const slider2 = useRef(null);
    const sliderTrack = useRef(null);
    useEffect(() => { updateRange(1) }, [])

    function updateRange(slider) {
        let min = slider1.current.value;
        let max = slider2.current.value;
        let gap = 500;

        if (max - min >= gap) {
            fillColor(min, max, gap);
        } else {
            if (slider === 1) {
                slider1.current.value = max - gap;
                fillColor(max - gap, max, gap);
            } else {
                slider2.current.value = parseInt(min) + gap;
                fillColor(min, parseInt(min) + gap, gap);
            }
        }
    }
    function fillColor(min, max, gap) {
        let start = (min / 3500) * 100;
        let end = (max / 3500) * 100;
        sliderTrack.current.style.background = `linear-gradient(to right, #dadae5 ${start}% , #3264fe ${start}% , #3264fe ${end}%, #dadae5 ${end}%)`;
    }
    return (
        <div className={styles.price_range}>
            <div className={styles.price_title}>
                <h3>PRICE</h3>
                <button>CLEAR</button>
            </div>
            <div className={styles.container}>
                <div className={styles.graph} />
                <input type="range" min={0} max={3500} step={500} defaultValue={0} ref={slider1} className={styles.slider} onInput={() => { updateRange(1) }} />
                <input type="range" min={0} max={3500} step={500} defaultValue={3500} ref={slider2} className={styles.slider} onInput={() => { updateRange(2) }} />
                <div className={styles.slider_track} ref={sliderTrack} />
            </div>
            <div className={styles.min_max}>
                <select name="min">
                    <option value={500}>{'Min'}</option>
                    {Array.from({ length: 4 }, (_, index) => <option key={index} value={(index + 2) * 500}>₹{(index + 1) * 500}</option>)}
                </select>
                <span>to</span>
                <select name="max">
                    {Array.from({ length: 5 }, (_, index) => <option key={index} value={(index + 1) * 500}>₹{(index + 1) * 500}</option>)}
                    <option value={3000}>3000+</option>
                </select>
            </div>
        </div>
    )
}