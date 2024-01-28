import styles from '../../css/components/account/addressform.module.css'
import { getStates } from '../../services/commonService'
export default function AddressForm() {
    return (
        <div className={styles.address_form}>
            <div className={styles.content}>
                <h3 className={styles.head}>ADD A NEW ADDRESS</h3>
                <button className={styles.use_location}>
                    <img src="/detect.svg" />  Use my current location
                </button>
                <form action="">
                    <div className={styles.row}>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="10-digit mobile number" />
                    </div>
                    <div className={styles.row}>
                        <input type="text" placeholder="Pincode" />
                        <input type="text" placeholder="Locality" />
                    </div>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Address (Area and Street)">

                    </textarea>
                    <div className={styles.row}>
                        <input type="text" placeholder="City/DIstrict/Town" />
                        <select type="select" placeholder="State">
                            {getStates().map(state => <option>{state}</option>)}
                        </select>
                    </div>
                    <div className={styles.row}>
                        <input type="text" placeholder="Landmark(optional)" />
                        <input type="text" placeholder="Alternate Phone(Optional)" />
                    </div>
                    <div className={styles.address_type}>
                        <h4>Address Type</h4>
                        <input type="radio" name="type" id='home' value={'home'} /><label for="home">Home</label>
                        <input type="radio" name="type" id='work' value={'work'} /><label for="work">Work</label>
                    </div>
                </form>
                <button className={styles.save}>SAVE</button>
                <button className={styles.cancel}>Cancel</button>
            </div>
        </div>
    )
}