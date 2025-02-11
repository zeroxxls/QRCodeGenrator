import { useState } from 'react';
import {QRCodeSVG} from 'qrcode.react';
import './QrCodeGenerator.css'

export const QrCodeGenerator =()=>{
    const [value, setValue] = useState("");
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
            <div className='card-tools'>
                <input placeholder='Введите текст...' type="text" value={value} onChange={onChangeHandler} className='result'/>
                <button type='button' onClick={onClickHandler} className='generator-btn'>
                     Generate
                 </button>
            </div>
            <div className='qrCode'>
             {result !== '' ? <QRCodeSVG value={result} size={150}/> : "no content"}
            </div>
        </div>

    );
}
