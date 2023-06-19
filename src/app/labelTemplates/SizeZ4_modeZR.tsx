import { CountContext } from "app/tool";
import { useContext } from "react";
import { CreateQRCode } from "./QRCode";

export function SizeZ4_modeZR() {
    const { template, tmplContent } = useContext<any>(CountContext);
    let { width, height } = Object.assign({ width: 95, height: 33 }, template);

    let { position1, position2, position3, position4, position5, position6, position7, position8,
        position9, position10, position11, position12 } = tmplContent || {};
    width = width + "mm";
    height = height + "mm";

    return <div className="position-relative div-box-shadow" style={{ left: 0, top: 0, width: width, height: height }} >
        <div className="position-absolute" style={{ color: 'rgb(0, 0, 0)', left: 0, top: 0, width: width, height: height }}>
            <div id="A" className="position-absolute border-test" style={{ width: "80mm", height: "3.1mm", top: "1.85mm", left: "3.97mm" }}>
                <div className="fw-bolder fs-baseline line-height-100" style={{ fontFamily: "宋体", transform: "scale(0.78)", width: "128%", transformOrigin: "left center", }} >
                    {position1}
                    {/* /BA 乙睛,99.9%   A 乙睛,99.9%/BAA 乙睛,99.9%/BAA 乙睛,99.9% */}
                </div>
            </div>
            <div id="D" className="position-absolute border-test" style={{ width: "80mm", height: "3.3mm", top: "4.97mm", left: "3.97mm" }}>
                <div className="font-family-Arial fw-bolder fs-baseline line-height-100" style={{ transform: "scale(0.78)", width: "128%", transformOrigin: "left center", }} >
                    {position1}
                    {/* D 超干溶剂,水含量S10ppm,J&KSeal瓶 */}
                </div>
            </div>
            <div id="E" className="position-absolute border-test" style={{ width: "80mm", height: "3.1mm", top: "8.2mm", left: "3.97mm" }}>
                <div className="font-family-Arial fw-bolder fs-baseline line-height-100" style={{ transform: "scale(0.78)", width: "128%", transformOrigin: "left center", }} >
                    {position3}
                    {/* E Acetonitrile */}
                </div>
            </div>
            <div id="F1" className="position-absolute border-test" style={{ width: "80mm", height: "3.3mm", top: "11.15mm", left: "3.97mm" }}>
                <div className="font-family-Arial fw-bolder fs-baseline line-height-100" style={{ transform: "scale(0.78)", width: "128%", transformOrigin: "left center", }} >
                    {position4}
                    {/* F1 SuperDry, water≤10 ppm, J&KSeal */}
                </div>
            </div>

            <div id="L" className="position-absolute border-test text-center " style={{ width: "8.47mm", height: "3.7mm", top: "16.46mm", left: "3.97mm" }}>
                <div className="fw-bolder font-family-SimHei fs-baseline line-height-100" style={{ transform: "scale(0.78)", }} >
                    {position5}
                    {/* 危险 */}
                </div>
            </div>

            <div id="Icon1" className="position-absolute border-test" style={{ width: "4.2mm", height: "4.2mm", top: "16.14mm", left: "14.29mm" }}>
                {/* <img className="d-block w-100 h-100" src="https://www.jkchemical.com/images/icon/footer-logo.svg" /> */}
                {position6 && <img className="d-block w-100 h-100" src={position6} />}
            </div>
            <div id="Icon2" className="position-absolute border-test" style={{ width: "4.2mm", height: "4.2mm", top: "16.14mm", left: "23.81mm" }}>
                {/* <img className="d-block w-100 h-100" src="https://www.jkchemical.com/images/icon/footer-logo.svg" /> */}
                {position7 && <img className="d-block w-100 h-100" src={position7} />}
            </div>
            <div id="Icon3" className="position-absolute border-test" style={{ width: "4.2mm", height: "4.2mm", top: "16.14mm", left: "33.07mm" }}>
                {/* <img className="d-block w-100 h-100" src="https://www.jkchemical.com/images/security/GHS02.gif" /> */}
                {position8 && <img className="d-block w-100 h-100" src={position8} />}
            </div>
            <div id="Icon4" className="position-absolute border-test" style={{ width: "4.2mm", height: "4.2mm", top: "16.14mm", left: "42.59mm" }}>
                {/* <img className="d-block w-100 h-100" src="https://www.jkchemical.com/images/icon/footer-logo.svg" /> */}
                {position9 && <img className="d-block w-100 h-100" src={position9} />}
            </div>
            <div id="Icon5" className="position-absolute border-test" style={{ width: "4.2mm", height: "4.2mm", top: "16.14mm", left: "52.12mm" }}>
                {/* <img className="d-block w-100 h-100" src="https://www.jkchemical.com/images/icon/footer-logo.svg" /> */}
                {position10 && <img className="d-block w-100 h-100" src={position10} />}
            </div>
            <div id="O" className="position-absolute border-test" style={{ width: "32.12mm", height: "16.93mm", top: "11.9mm", left: "60.32mm" }}>
                <div className="font-family-SimHei fs-baseline" style={{ transform: "scale(0.56)", width: "180%", height: "180%", transformOrigin: "left top", }} >
                    {/* 我在测试 */}
                    {position12}
                </div>
            </div>
            <div id="QRmaker2" className="position-absolute border-test" style={{ width: "8.01mm", height: "8.01mm", top: "21.96mm", left: "5.03mm" }} >
                <CreateQRCode value={position11} />
            </div>
        </div>
    </div>
}