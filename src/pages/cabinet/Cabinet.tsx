import { useState } from 'react';
import Popup from '../../components/simple/popup/Popup';


const Cabinet = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <section>
            <button onClick={() => setModalActive(true)}>Orders</button>
            <Popup active={modalActive} setActive={setModalActive}>
                <p>Hello</p>
            </Popup>
        </section>
    )
}

export default Cabinet;