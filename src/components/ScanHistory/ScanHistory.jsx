import s from './ScanHistory.module.css'
import { SCAN_DATA } from '../../constants';
import { QRCodeSVG } from 'qrcode.react';

export const ScanHistory =()=>{

    const data = JSON.parse(localStorage.getItem(SCAN_DATA)  || '[]');
    console.log(data);

    return(
        <div>
            <h1 className={s.list_tittle}>History</h1>
            <div className={s.list}>
            {data.map((text)=>(
                <p key={text} className={s.list_elem}>
                    {text}
                    <QRCodeSVG value={text} size={100} />
                </p>
            ))}
            </div>
        </div>
    )
}