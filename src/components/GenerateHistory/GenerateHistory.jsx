import s from './GenerateHistory.module.css'
import { GENERATE_DATA } from '../../constants'
import { QRCodeSVG } from 'qrcode.react';

export const GenerateHistory =()=>{

    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
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