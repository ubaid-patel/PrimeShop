import { useParams } from "react-router-dom";
import Profileinfo from "./ProfileInfo";
import GiftCard from "./GiftCard";
import ManageAddress from "./ManageAddress";
import Wishlist from './Wishlist';
import Notifications from './Notifications'

export default function AccountContent() {
    const path = useParams();
    let elements = null;
    switch (path.page) {
        case "profile": elements = <Profileinfo />; break;
        case "addresses": elements = <ManageAddress />; break;
        case "gift_cards": elements = <GiftCard />; break;
        case "cards": elements = <GiftCard />; break;
        case "saved_vpa": elements = <GiftCard />; break;
        case "my_coupons": elements = <GiftCard />; break;
        case "my_reviews": elements = <GiftCard />; break;
        case "wishlist": elements = <Wishlist />; break;
        case "notifications": elements = <Notifications />; break;
    }
    return (elements)
}
