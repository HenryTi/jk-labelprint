import { CountContext } from "app/tool";
import { useContext } from "react";
import { CreateQRCode } from "./QRCode";

export function SizeG1_1() {
    const { template, tmplContent } = useContext<any>(CountContext);
    let { width, height } = Object.assign({ width: 175, height: 100 }, template);
    let { position1, position2, position3, position4, position5, position6, position7, position8,
        position9, position10, position11, position12 } = tmplContent || {};
    width = width + "mm";
    height = height + "mm";

    return <div className="position-relative div-box-shadow" style={{ width: width, height: height }}>
        <div className="position-absolute" style={{ color: 'rgb(0, 0, 0)', left: 0, top: 0, width: width, height: height }}>
            <div id="A" className="position-absolute border-test" style={{ width: "113mm", height: "5.03mm", top: "2.12mm", left: "63.12mm" }}>
                <div className="font-family-Arial fw-bolder h-100" style={{ fontSize: "11pt" }} >
                    {position1}
                </div>
            </div>
            <div id="B1" className="position-absolute border-test" style={{ width: "113mm", height: "5.03mm", top: "7.14mm", left: "63.12mm" }}>
                <div className="font-family-Arial fw-bolder h-100" style={{ fontSize: "11pt" }} >
                    {position2}
                </div>
            </div>
            <div id="C1" className="position-absolute border-test" style={{ width: "113mm", height: "5.03mm", top: "12.17mm", left: "63.12mm" }}>
                <div className="font-family-Arial fw-bolder h-100" style={{ fontSize: "11pt" }} >
                    {position3}
                </div>
            </div>
            <div id="D" className="position-absolute border-test" style={{ width: "113mm", height: "5.03mm", top: "17.2mm", left: "63.12mm" }}>
                <div className="font-family-Arial fw-bolder h-100" style={{ fontSize: "11pt" }} >
                    {position4}
                </div>
            </div>
            <div id="E" className="position-absolute border-test" style={{ width: "113mm", height: "5.03mm", top: "22.22mm", left: "63.12mm" }}>
                <div className="font-family-Arial fw-bolder h-100" style={{ fontSize: "11pt" }} >
                    {position5}
                </div>
            </div>
            <div id="F" className="position-absolute border-test" style={{ width: "113mm", height: "3.7mm", top: "28.04mm", left: "63.12mm" }}>
                <div className="font-family-Arial fw-bolder h-100" style={{ fontSize: "11pt" }} >
                    {position6}
                </div>
            </div>
            <div id="G" className="position-absolute border-test" style={{ width: "113mm", height: "3.7mm", top: "31.75mm", left: "63.12mm" }}>
                <div className="font-family-Arial fw-bolder h-100" style={{ fontSize: "11pt" }} >
                    {position7}
                </div>
            </div>
            <div id="H" className="position-absolute border-test" style={{ width: "113mm", height: "3.7mm", top: "35.45mm", left: "63.12mm" }}>
                <div className="font-family-Arial h-100" style={{ fontSize: "9pt" }} >
                    {position8}
                </div>
            </div>
            <div id="I" className="position-absolute border-test" style={{ width: "113mm", height: "3.7mm", top: "39.15mm", left: "63.12mm" }}>
                <div className="font-family-Arial h-100" style={{ fontSize: "9pt" }} >
                    {position9}
                </div>
            </div>
            <div id="J" className="position-absolute border-test" style={{ width: "113mm", height: "20.49mm", top: "45.86mm", left: "63.12mm" }}>
                <div className="font-family-Arial h-100" style={{ fontSize: "9pt" }} >
                    {position10}
                </div>
            </div>


            {/* <div id="L" className="position-absolute border-test fw-bolder font-family-SimHei d-flex justify-content-center"
                style={{ width: "15.34mm", height: "8.73mm", top: "6.08mm", left: "20.11mm", fontSize:"20pt", alignItems:"center" }}>
                {position5}
            </div> */}

            {/* <div id="Icon1" className="position-absolute border-test" style={{ width: "8.99mm", height: "8.99mm", top: "21.96mm", left: "12.96mm" }}>
                <img className="d-block w-100 h-100" src="https://www.jkchemical.com/images/icon/footer-logo.svg" />
            </div>
            <div id="Icon2" className="position-absolute border-test" style={{ width: "8.99mm", height: "8.99mm", top: "21.96mm", left: "36.24mm" }}>
                <img className="d-block w-100 h-100" src="https://www.jkchemical.com/images/icon/footer-logo.svg" />
            </div>
            <div id="Icon3" className="position-absolute border-test" style={{ width: "8.99mm", height: "8.99mm", top: "33.33mm", left: "24.6mm" }}>
                <img className="d-block w-100 h-100" src="https://www.jkchemical.com/images/icon/footer-logo.svg" />
            </div>
            <div id="Icon4" className="position-absolute border-test" style={{ width: "8.99mm", height: "8.99mm", top: "44.71mm", left: "12.96mm" }}>
                <img className="d-block w-100 h-100" src="https://www.jkchemical.com/images/icon/footer-logo.svg" />
            </div>
            <div id="Icon5" className="position-absolute border-test" style={{ width: "8.99mm", height: "8.99mm", top: "44.71mm", left: "36.24mm" }}>
                <img className="d-block w-100 h-100" src="https://www.jkchemical.com/images/icon/footer-logo.svg" />
            </div> */}
            {/* <div id="O" className="position-absolute border-test" style={{ width: "46.67mm", height: "32.8mm", top: "61.11mm", left: "6.08mm" }}>
                <div className="font-family-SimHei fs-baseline" style={{  transform: "scale(0.89)", width:"112%", height:"112%",transformOrigin: "left top" }} >
                    我在测试O
                </div>
            </div> */}

            {/* <div id="P" className="position-absolute border-test overflow-hidden"
                style={{ width: '42.17mm', height: '73.01mm', top: '3.97mm', left: "157.87mm", fontFamily:"宋体" }}>
                <div className="fs-baseline" style={{ width: '126%', height:"126%", transform: "scale(0.79)", transformOrigin: "left top",  }} >
                    <div >
                        <strong className="font-family-SimHei">【预防措施和事故处理】</strong>远离热源、热表面、火花、明火和其它点火源。禁止吸烟，戴防护手套/穿防护服/戴防护眼罩/戴防护面具/戴听力保护装置，如进入眼睛:用水小心冲洗几分钟。如戴隐形眼镜并可方便地取出，取出隐形眼镜。绛续冲洗。
                    </div>
                    <div  >
                        <strong className="font-family-SimHei">【安全储存】</strong>储存在阴凉、干燥、通风处，储存在密闭容器中。请充惰性气体保存。对湿气敏感。
                    </div>
                    <div >
                        <strong className="font-family-SimHei">【废弃处置】</strong>不再使用的产品和废弃包装应依据法规，委托有资质的单位进行处置。
                    </div>
                </div>
            </div>

            <div id="QRmaker2" className="position-absolute border-test" style={{ width: "8.99mm", height: "8.99mm", top: "85.98mm", left: "189.1mm" }} >
                <CreateQRCode value={position12} />
            </div> */}
        </div>
    </div>
}