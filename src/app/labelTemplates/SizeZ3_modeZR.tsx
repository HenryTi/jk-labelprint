import { CountContext } from "app/tool";
import { useContext } from "react";
import QRCode from 'qrcode.react';
import { CreateQRCode } from "./QRCode";

export function SizeZ3_modeZR() {
    const { template, tmplContent } = useContext<any>(CountContext);
    let { width, height } = Object.assign({ width: 120, height: 50 }, template);
    let { position1, position2, position3, position4, position5, position6, position7, position8,
        position9, position10, position11, position12, position13, position14, position15, position16
        , position17, position18, position19, position20, position21, position22, position23
    } = tmplContent || {};
    width = width + "mm";
    height = height + "mm";

    return <div className="position-relative div-box-shadow" style={{ left: 0, top: 0, width: width, height: height }}>{/* overflow-hidden */}
        <div className="position-absolute" style={{ color: 'rgb(0, 0, 0)', left: 0, top: 0, width: width, height: height }}>
            <div id="A" className="position-absolute border-test" style={{ width: "48.99mm", height: "3.51mm", top: "2.12mm", left: "34.92mm" }}>
                <div className="font-family-Arial fw-bolder h-100 line-height-100" style={{ transform: "scale(0.78)", width: "128%", transformOrigin: "left center", }} >
                    {position1}
                </div>
            </div>
            <div id="B1" className="position-absolute border-test" style={{ width: "48.99mm", height: "3.51mm", top: "5.2mm", left: "34.92mm" }}>
                <div className="font-family-Arial fw-bolder h-100 line-height-100" style={{ transform: "scale(0.78)", width: "128%", transformOrigin: "left center", }} >
                    {position2}
                </div>
            </div>
            <div id="C1" className="position-absolute border-test" style={{ width: "48.99mm", height: "3.51mm", top: "8.29mm", left: "34.92mm" }}>
                <div className="font-family-Arial fw-bolder h-100 line-height-100" style={{ transform: "scale(0.78)", width: "128%", transformOrigin: "left center", }} >
                    {position3}
                </div>
            </div>
            <div id="D" className="position-absolute border-test" style={{ width: "48.99mm", height: "3.51mm", top: "11.38mm", left: "34.92mm" }}>
                <div className="font-family-Arial fw-bolder h-100 line-height-100" style={{ transform: "scale(0.78)", width: "128%", transformOrigin: "left center", }} >
                    {position4}
                </div>
            </div>
            <div id="E" className="position-absolute border-test" style={{ width: "48.99mm", height: "3.51mm", top: "14.46mm", left: "34.92mm" }}>
                <div className="font-family-Arial fw-bolder h-100 line-height-100" style={{ transform: "scale(0.78)", width: "128%", transformOrigin: "left center", }} >
                    {position5}
                </div>
            </div>
            <div id="F" className="position-absolute border-test" style={{ width: "48.99mm", height: "3.51mm", top: "17.55mm", left: "34.92mm" }}>
                <div className="font-family-Arial fw-bolder h-100 line-height-100" style={{ transform: "scale(0.78)", width: "128%", transformOrigin: "left center", }} >
                    {position6}
                </div>
            </div>
            <div id="G" className="position-absolute border-test" style={{ width: "48.99mm", height: "3.51mm", top: "20.63mm", left: "34.92mm" }}>
                <div className="font-family-Arial fw-bolder h-100 fs-baseline line-height-100" style={{ transform: "scale(0.78)", width: "128%", transformOrigin: "left center", }} >
                    {position7}
                </div>
            </div>
            <div id="H" className="position-absolute border-test" style={{ width: "48.99mm", height: "2.89mm", top: "23.69mm", left: "34.92mm" }}>
                <div className="font-family-Arial fs-baseline line-height-100" style={{ transform: "scale(0.78)", width: "128%", transformOrigin: "left center", }} >
                    {position8}
                </div>
            </div>
            <div id="I" className="position-absolute border-test" style={{ width: "48.99mm", height: "2.89mm", top: "26.65mm", left: "34.92mm" }}>
                <div className="font-family-Arial fs-baseline line-height-100" style={{ transform: "scale(0.78)", width: "128%", transformOrigin: "left center", }} >
                    {position9}
                </div>
            </div>
            <div id="J" className="position-absolute border-test" style={{ width: "48.99mm", height: "2.89mm", top: "29.61mm", left: "34.92mm" }}>
                <div className="font-family-Arial fs-baseline line-height-100" style={{ transform: "scale(0.78)", width: "128%", transformOrigin: "left center", }} >
                    {position10}
                </div>
            </div>
            <div id="K" className="position-absolute border-test" style={{ width: "48.99mm", height: "2.89mm", top: "32.57mm", left: "34.92mm" }}>
                <div className="font-family-Arial fs-baseline line-height-100" style={{ transform: "scale(0.78)", width: "128%", transformOrigin: "left center", }} >
                    {position11}
                </div>
            </div>

            <div id="L" className="position-absolute border-test fw-bolder text-center font-family-SimHei"
                style={{ width: "15.34mm", height: "5.82mm", top: "3.97mm", left: "11.62mm", fontSize: "10pt" }}>
                {position12}{/* 危险 */}
            </div>

            <div id="Icon1" className="position-absolute border-test" style={{ width: "4.53mm", height: "4.53mm", top: "11.11mm", left: "6.35mm" }}>
                {/* <img className="d-block w-100 h-100" src="https://www.jkchemical.com/images/icon/footer-logo.svg" /> */}
                <img className="d-block w-100 h-100" src={position13} />
            </div>
            <div id="Icon2" className="position-absolute border-test" style={{ width: "4.53mm", height: "4.53mm", top: "11.11mm", left: "15.87mm" }}>
                <img className="d-block w-100 h-100" src={position14} />
            </div>
            <div id="Icon3" className="position-absolute border-test" style={{ width: "4.53mm", height: "4.53mm", top: "11.11mm", left: "25.66mm" }}>
                <img className="d-block w-100 h-100" src={position15} />
            </div>
            <div id="Icon4" className="position-absolute border-test" style={{ width: "4.53mm", height: "4.53mm", top: "17.2mm", left: "11.11mm" }}>
                <img className="d-block w-100 h-100" src={position16} />
            </div>
            <div id="Icon5" className="position-absolute border-test" style={{ width: "4.53mm", height: "4.53mm", top: "17.2mm", left: "20.9mm" }}>
                <img className="d-block w-100 h-100" src={position17} />
            </div>

            <div id="O" className="position-absolute border-test" style={{ width: "29.51mm", height: "19.84mm", top: "27.25mm", left: "4.48mm" }}>
                <div className="font-family-SimHei fs-baseline" style={{ transform: "scale(0.56)", width: "180%", height: "180%", transformOrigin: "left top" }} >
                    {position18}{/* 我在测试O */}
                </div>
            </div>

            <div id="P" className="position-absolute border-test overflow-hidden"
                style={{ width: '31.32mm', height: '36.78mm', top: '1.85mm', left: "88.62mm", fontFamily: "宋体" }}>
                <div className="fs-baseline" style={{ width: '180%', height: "180%", transform: "scale(0.56)", transformOrigin: "left top", }} >
                    <div >
                        <strong className="font-family-SimHei" >【预防措施和事故处理】</strong>
                        {position20}
                        {/* 远离热源、热表面、火花、明火和其它点火源。禁止吸烟，戴防护手套/穿防护服/戴防护眼罩/戴防护面具/戴听力保护装置 */}
                    </div>
                    <div  >
                        <strong className="font-family-SimHei" >【安全储存】</strong>
                        {position21}
                        {/* 储存在阴凉、干燥、通风处，储存在密闭容器中。请充惰性气体保存。对湿气敏感。 */}
                    </div>
                    <div >
                        <strong className="font-family-SimHei" >【废弃处置】</strong>
                        {position22}
                        {/* 不再使用的产品和废弃包装应依据法规，委托有资质的单位进行处置。 */}
                    </div>
                </div>
            </div>

            <div id="QRmaker2" className="position-absolute border-test" style={{
                width: "8.99mm", height: "8.99mm", top: "37.69mm", left: "110.95mm"
            }} >
                <CreateQRCode value={position19} />
            </div>

        </div>
    </div>
}