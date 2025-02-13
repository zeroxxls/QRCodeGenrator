import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../../constants';
import s from './QrCodeGenerator.module.css';

export const QrCodeGenerator = () => {
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");

    const onClickHandler = () => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

            localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData,value]));

        setResult(value);
        setValue('');
    };

    const onChangeHandler = (e) => {
        setValue(e.target.value);
        setResult('');
    };

    return (
        <div className={s.main_container}>
            <div className={s.content_card}>
                <div className={s.card_tools}>
                    <input 
                        placeholder="Введите текст..." 
                        type="text" 
                        value={value} 
                        onChange={onChangeHandler} 
                        className={s.result} 
                    />
                    <button 
                        type="button" 
                        onClick={onClickHandler} 
                        className={s.generator_btn}
                    >
                        Generate
                    </button>
                </div>
                <div className={s.qrCode}>
                    {result !== '' ? <QRCodeSVG value={result} size={150} /> : "no content"}
                </div>
            </div>
        </div>
    );
};
