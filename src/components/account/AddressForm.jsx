import { useEffect } from "react"

export default function AddressForm({data}) {
    useEffect(()=>{
        return(
            data.callback
        )
    })
    if (data.show) {
        return (
            <div className="address_form">
                <h3 className="head">{data.heading}</h3>
                <form action="">
                    <input type="text" placeholder="Name" defaultValue={data.values && data.values.name} />
                    <input type="text" placeholder="Mobile" defaultValue={data.values && data.values.mobile[0]} />
                    <input type="text" placeholder="Pincode" defaultValue={data.values && data.values.pincode} />
                    <input type="text" placeholder="Locality" defaultValue={data.values && data.values.locality} />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Address (Area and Street)">
                        {data.values && data.values.address}
                    </textarea>
                    <input type="text" placeholder="City/DIstrict/Town" defaultValue={data.values && data.values.city} />
                    <input type="text" placeholder="State" defaultValue={data.values && data.values.state} />
                    <input type="text" placeholder="Landmark(optional)" defaultValue={data.values && data.values.landmark} />
                    <input type="text" placeholder="Alternate Phone(Optional)" defaultValue={data.values && data.values.mobile[1]} />
                    <h4>Address Type</h4>
                    <input type="radio" name="type" defaultValue={'home'} /><span>Home</span>
                    <input type="radio" name="type" defaultValue={'work'} /><span>Home</span>
                </form>
                <button className="save">Save Address</button>
                <button className="cancel" onClick={data.callback}>Cancel</button>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}