import { CountContext } from "app/tool";
import { useContext } from "react";
import { CreateQRCode } from "./QRCode";
export function SizeZ2_modeZR() {
    const { template, tmplContent } = useContext<any>(CountContext);
    let { width, height } = Object.assign({ width: 150, height: 65 }, template);
    let { position1, position2, position3, position4, position5, position6, position7, position8,
        position9, position10, position11, position12, position13, position14, position15, position16
        , position17, position18, position19, position20, position21, position22, position23
    } = tmplContent || {};
    width = width + "mm";
    height = height + "mm";

    return <div className="position-relative div-box-shadow" style={{ left: 0, top: 0, width: width, height: height }}>
        <div className="position-absolute" style={{ color: 'rgb(0, 0, 0)', left: 0, top: 0, width: width, height: height }}>
            <div id="A" className="position-absolute border-test" style={{ width: "70mm", height: "3.77mm", top: "5.03mm", left: "39.95mm" }}>
                <div className="font-family-Arial fw-bolder fs-baseline line-height-100" style={{ transform: "scale(0.89)", width: "112%", transformOrigin: "left center", }} >
                    {position1}
                </div>
            </div>
            <div id="B1" className="position-absolute border-test" style={{ width: "70mm", height: "3.77mm", top: "8.54mm", left: "40mm" }}>
                <div className="font-family-Arial fw-bolder fs-baseline line-height-100" style={{ transform: "scale(0.89)", width: "112%", transformOrigin: "left center", }} >
                    {position2}
                </div>
            </div>
            <div id="C1" className="position-absolute border-test" style={{ width: "70mm", height: "3.77mm", top: "12.05mm", left: "40mm" }}>
                <div className="font-family-Arial fw-bolder fs-baseline line-height-100" style={{ transform: "scale(0.89)", width: "112%", transformOrigin: "left center", }} >
                    {position3}
                </div>
            </div>
            <div id="D" className="position-absolute border-test" style={{ width: "70mm", height: "3.77mm", top: "15.56mm", left: "40mm" }}>
                <div className="font-family-Arial fw-bolder fs-baseline line-height-100" style={{ transform: "scale(0.89)", width: "112%", transformOrigin: "left center", }} >
                    {position4}
                </div>
            </div>
            <div id="E" className="position-absolute border-test" style={{ width: "70mm", height: "3.77mm", top: "19.07mm", left: "40mm" }}>
                <div className="font-family-Arial fw-bolder fs-baseline line-height-100" style={{ transform: "scale(0.89)", width: "112%", transformOrigin: "left center", }} >
                    {position5}
                </div>
            </div>
            <div id="F" className="position-absolute border-test" style={{ width: "70mm", height: "3.77mm", top: "22.57mm", left: "40mm" }}>
                <div className="font-family-Arial fw-bolder fs-baseline line-height-100" style={{ transform: "scale(0.89)", width: "112%", transformOrigin: "left center", }} >
                    {position6}
                </div>
            </div>
            <div id="G" className="position-absolute border-test" style={{ width: "70mm", height: "3.77mm", top: "26.08mm", left: "40mm" }}>
                <div className="font-family-Arial fw-bolder fs-baseline line-height-100" style={{ transform: "scale(0.89)", width: "112%", transformOrigin: "left center", }} >
                    {position7}
                </div>
            </div>
            <div id="H" className="position-absolute border-test" style={{ width: "70mm", height: "3.51mm", top: "29.93mm", left: "40mm" }}>
                <div className="font-family-Arial fs-baseline line-height-100" style={{ transform: "scale(0.89)", width: "112%", transformOrigin: "left center", }} >
                    {position8}
                </div>
            </div>
            <div id="I" className="position-absolute border-test" style={{ width: "70mm", height: "3.51mm", top: "33.93mm", left: "40mm" }}>
                <div className="font-family-Arial fs-baseline line-height-100" style={{ transform: "scale(0.89)", width: "112%", transformOrigin: "left center", }} >
                    {position9}
                </div>
            </div>
            <div id="J" className="position-absolute border-test" style={{ width: "70mm", height: "3.51mm", top: "37.94mm", left: "40mm" }}>
                <div className="font-family-Arial fs-baseline line-height-100" style={{ transform: "scale(0.89)", width: "112%", transformOrigin: "left center", }} >
                    {position10}
                </div>
            </div>
            <div id="K" className="position-absolute border-test" style={{ width: "70mm", height: "3.51mm", top: "40.99mm", left: "40mm" }}>
                <div className="font-family-Arial fs-baseline line-height-100" style={{ transform: "scale(0.89)", width: "112%", transformOrigin: "left center", }} >
                    {position11}
                </div>
            </div>

            <div id="L" className="position-absolute border-test fw-bolder text-center font-family-SimHei"
                style={{ width: "15.34mm", height: "6.88mm", top: "5.03mm", left: "13.53mm", fontSize: "13pt" }}>
                {position12}{/* 危险 */}
            </div>

            <div id="Icon1" className="position-absolute border-test" style={{ width: "7mm", height: "7mm", top: "12.7mm", left: "10.32mm" }}>
                <img className="d-block w-100 h-100" src={position13} />
                {/* <img className="d-block w-100 h-100" src="https://shop.jkchemical.com/res/0-0048.png" /> */}
            </div>
            <div id="Icon2" className="position-absolute border-test" style={{ width: "7mm", height: "7mm", top: "12.7mm", left: "25.93mm" }}>
                <img className="d-block w-100 h-100" src={position14} />
            </div>
            <div id="Icon3" className="position-absolute border-test" style={{ width: "7mm", height: "7mm", top: "20.9mm", left: "17.99mm" }}>
                <img className="d-block w-100 h-100" src={position15} />
            </div>
            <div id="Icon4" className="position-absolute border-test" style={{ width: "7mm", height: "7mm", top: "29.1mm", left: "10.05mm" }}>
                <img className="d-block w-100 h-100" src={position16} />
            </div>
            <div id="Icon5" className="position-absolute border-test" style={{ width: "7mm", height: "7mm", top: "29.1mm", left: "25.93mm" }}>
                <img className="d-block w-100 h-100" src={position17} />
            </div>
            <div id="O" className="position-absolute border-test" style={{ width: "35.31mm", height: "19.05mm", top: "42.06mm", left: "5.56mm" }}>
                <div className="font-family-SimHei fs-baseline" style={{ transform: "scale(0.67)", width: "150%", height: "150%", transformOrigin: "left top" }} >
                    {position18}{/* 我在测试O */}
                </div>
            </div>

            <div id="P" className="position-absolute border-test overflow-hidden"
                style={{ width: '34.85mm', height: '50mm', top: '3.7mm', left: "114.55mm", fontFamily: "宋体" }}>
                <div className="fs-baseline" style={{ width: '150%', height: "150%", transform: "scale(0.67)", transformOrigin: "left top", }} >
                    <div >
                        <strong className="font-family-SimHei">【预防措施和事故处理】</strong>
                        {position20}
                        {/* 远离热源、热表面、火花、明火和其它点火源。禁止吸烟，戴防护手套/穿防护服/戴防护眼罩/戴防护面具/戴听力保护装置，如进入眼睛:用水小心冲洗几分钟。如戴隐形眼镜并可方便地取出，取出隐形眼镜。绛续冲洗。 */}
                    </div>
                    <div  >
                        <strong className="font-family-SimHei">【安全储存】</strong>
                        {position21}
                        {/* 储存在阴凉、干燥、通风处，储存在密闭容器中。请充惰性气体保存。对湿气敏感。 */}
                    </div>
                    <div >
                        <strong className="font-family-SimHei">【废弃处置】</strong>
                        {position22}
                        {/* 不再使用的产品和废弃包装应依据法规，委托有资质的单位进行处置。 */}
                    </div>
                </div>
            </div>

            <div id="QRmaker2" className="position-absolute border-test" style={{ width: "8.99mm", height: "8.99mm", top: "52.38mm", left: "139.07mm" }} >
                <CreateQRCode value={position19} />
            </div>

        </div>
    </div>
}