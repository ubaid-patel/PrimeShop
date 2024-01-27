export default function AddressForm() {
        return (
            <div className="address_form">
                <h3 className="head">Add new address</h3>
                <form action="">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Mobile"/>
                    <input type="text" placeholder="Pincode"/>
                    <input type="text" placeholder="Locality"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Address (Area and Street)">
                        
                    </textarea>
                    <input type="text" placeholder="City/DIstrict/Town" />
                    <input type="text" placeholder="State"  />
                    <input type="text" placeholder="Landmark(optional)"/>
                    <input type="text" placeholder="Alternate Phone(Optional)"/>
                    <h4>Address Type</h4>
                    <input type="radio" name="type" defaultValue={'home'} /><span>Home</span>
                    <input type="radio" name="type" defaultValue={'work'} /><span>Home</span>
                </form>
                <button className="save">Save Address</button>
                <button className="cancel">Cancel</button>
            </div>
        )
}