import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import s from './QrCodeScanner.module.css'

export const QrCodeScanner =()=>{
const [scanned, setScanned] = useState(null)

    const scanHandler =(result)=>{
        setScanned(result[0].rawValue);
    }

    const settings = {
        audio: false,
        finder: false,
    }

    const stylesSettings={
        container: { width:350 }
    }

    return(
        <div className={s.main_container}>
                <div className={s.container}>
                <Scanner
                 allowMultiple
                 onScan={scanHandler}  
                 components={settings} 
                 styles={stylesSettings}
                 />
            <p>
                result:
                {scanned}
            </p>
        </div>
        </div>
    )
}