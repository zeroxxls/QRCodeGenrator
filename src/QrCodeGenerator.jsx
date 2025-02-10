import { useState } from 'react';
import {QRCodeSVG} from 'qrcode.react';
import './qrCodeGenerator.css'

export const QrCodeGenerator =()=>{
    const [value, setValue] = useState("try it");
    const [result, setResult] = useState('');

    const onClickHandler =()=>{
        setResult(value);
        setValue('');
    }

    const onChangeHandler =(e)=>{
       setValue(e.target.value);
       setResult('')
    }

    return(
        <div className='content-card'>
            <div className='qrCode'>
             {result !== '' ? <QRCodeSVG value={result}/> : "no content here"}
            </div>
            <div className='card-tools'>
                <input type="text" value={value} onChange={onChangeHandler} className='result'/>
                <button type='button' onClick={onClickHandler} className='generator-btn'>
                     Generate
                 </button>
            </div>
        </div>

    );
}
