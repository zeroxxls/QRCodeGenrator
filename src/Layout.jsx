import { Routes, Route, } from "react-router-dom";
import { QrCodeGenerator } from "./components/Generate/QrCodeGenerator";
import { QrCodeScanner } from "./components/Scan/QrCodeScanner";
import { GenerateHistory } from "./components/GenerateHistory/GenerateHistory";
import { ScanHistory } from "./components/ScanHistory/ScanHistory";
import { Navigation } from './components/Navigation/Navigation';

export const Layout = ()=>{

    return(
        <div>
            <Navigation/>

            <Routes>
                <Route path="/generate" element={<QrCodeGenerator/>}/>
                <Route path="/scan" element={<QrCodeScanner/>}/>
                <Route path="/generateHistory" element={<GenerateHistory/>}/> 
                <Route path="/scanHistory" element={<ScanHistory/>}/> 
            </Routes>
        </div>
    );
}