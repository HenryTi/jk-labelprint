import { CountContext } from "app/tool";
import { useContext } from "react";
import { CreateQRCode } from "./QRCode";

export function SizeZ5_modeZR() {
    const { template, tmplContent } = useContext<any>(CountContext);
    let { width, height } = Object.assign({ width: 68, height: 29 }, template);
    let { position1, position2, position3, position4, position5, position6, position7, position8,
        position9, position10, position11, position12 } = tmplContent || {};
    width = width + "mm";
    height = height + "mm";
    let height2 = `calc(${height} - 0.6px)`;

    return <div className="position-relative div-box-shadow" style={{ left: 0, top: 0, width: width, height: height2 }}> {/* 在打印时会出现超出问题,故使用calc处理 */}
        <div className="position-absolute" style={{ color: 'rgb(0, 0, 0)', left: 0, top: 0, width: width, height: height }}>
            <div id="A" className="position-absolute border-test" style={{ width: "58.99mm", height: "2.59mm", top: "2.91mm", left: "2.12mm" }}>
                <div className="font-family-Arial fw-bolder fs-baseline h-100 line-height-100" style={{ transform: "scale(0.56)", width: "180%", transformOrigin: "left center" }} >
                    {position1}
                </div>
            </div>
            <div id="D" className="position-absolute border-test" style={{ width: "58.99mm", height: "2.59mm", top: "5.5mm", left: "2.12mm" }}>
                <div className="font-family-Arial fw-bolder fs-baseline h-100 line-height-100" style={{ transform: "scale(0.56)", width: "180%", transformOrigin: "left center" }} >
                    {position2}
                </div>
            </div>
            <div id="E" className="position-absolute border-test" style={{ width: "58.99mm", height: "2.59mm", top: "8.08mm", left: "2.12mm" }}>
                <div className="font-family-Arial fw-bolder fs-baseline h-100 line-height-100" style={{ transform: "scale(0.56)", width: "180%", transformOrigin: "left center" }} >
                    {position3}
                </div>
            </div>
            <div id="F1" className="position-absolute border-test" style={{ width: "58.99mm", height: "2.59mm", top: "10.67mm", left: "2.12mm" }}>
                <div className="font-family-Arial fw-bolder fs-baseline h-100 line-height-100" style={{ transform: "scale(0.56)", width: "180%", transformOrigin: "left center" }} >
                    {position4}
                </div>
            </div>

            <div id="L" className="position-absolute border-test fw-bolder font-family-SimHei text-center"
                style={{ width: "7.94mm", height: "3.7mm", top: "15.04mm", left: "1.22mm" }}>
                <div className="font-family-Arial fw-bolder fs-baseline line-height-100 d-flex justify-content-center"
                    style={{ alignItems: "center", height: "128%", transform: "scale(0.78)", transformOrigin: "top center" }} >
                    {position5}{/* 危险 */}
                </div>
            </div>
            <div id="Icon1" className="position-absolute border-test" style={{ width: "3.19mm", height: "3.19mm", top: "15.34mm", left: "9.52mm" }}>
                {/* <img className="d-block w-100 h-100" src="https://www.jkchemical.com/images/icon/footer-logo.svg" /> */}
                <img className="d-block w-100 h-100" src={position6} />
            </div>
            <div id="Icon2" className="position-absolute border-test" style={{ width: "3.19mm", height: "3.19mm", top: "15.34mm", left: "16.93mm" }}>
                <img className="d-block w-100 h-100" src={position7} />
            </div>
            <div id="Icon3" className="position-absolute border-test" style={{ width: "3.19mm", height: "3.19mm", top: "15.34mm", left: "24.6mm" }}>
                <img className="d-block w-100 h-100" src={position8} />
            </div>
            <div id="Icon4" className="position-absolute border-test" style={{ width: "3.19mm", height: "3.19mm", top: "15.34mm", left: "32.28mm" }}>
                <img className="d-block w-100 h-100" src={position9} />
            </div>
            <div id="Icon5" className="position-absolute border-test" style={{ width: "3.19mm", height: "3.19mm", top: "15.34mm", left: "39.95mm" }}>
                <img className="d-block w-100 h-100" src={position10} />
            </div>

            <div id="O" className="position-absolute border-test" style={{ width: "17.71mm", height: "12.96mm", top: "10.58mm", left: "47.35mm" }}>
                <div className="font-family-SimHei fw-bolder fs-baseline" style={{ transform: "scale(0.45)", width: "222%", height: "222%", transformOrigin: "left top" }} >
                    {position12}{/* 我在测试O */}
                </div>
            </div>

            <div id="QRmaker2" className="position-absolute border-test" style={{ width: "6.98mm", height: "6.98mm", top: "19.05mm", left: "2.12mm" }} >
                <CreateQRCode value={position11} />
            </div>
        </div>
    </div>
}