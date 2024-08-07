import {useState} from "react";

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    let toggle = () => {
        setIsShowing(!isShowing);
    }

    return [isShowing, toggle];

}
export default useModal