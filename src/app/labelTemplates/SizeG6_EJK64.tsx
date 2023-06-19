import { CountContext, printCssUrl } from "app/tool";;
import { useContext } from "react";
import { CreateQRCode } from "./QRCode";
import printJS from "print-js";

export function SizeG6_EJK64() {
    const { template, tmplContent, iconMap } = useContext<any>(CountContext);
    let { width, height } = Object.assign(
        { width: 140, height: 33 },
        template
    );
    let {
        id,
        CAS,
        description, // 英文名
        descriptionC, // 中文名
        hazard, // 危险
        lotNumber,
        radiox,
        radioy, // 左上角容量
        salesOrigin, // 左上角编码
        unit, // 包装单位
        position1,
        position2,
        position3,
        position4,
        position5,
        position6,
        position7,
        position9,
        position10,
        position11,
        position19,
    } = tmplContent || {};
    width = width + "mm";
    height = height + "mm";

    async function print() {
        const style = `@media print {@page {margin:0; border:0; padding:0; left: 0; } .div-box-shadow { box-shadow: none;} }`;
        printJS({
            printable: "print_target_box11",
            type: "html",
            style: style,
            scanStyles: false,
            css: [
                printCssUrl('sizeZr.css'),
                printCssUrl('bootstrap.css'),
            ],
            onPrintDialogClose: () => {
                // saveLabelPrintTaskPrinted({ id: currPrintTask, comments: "完成" })
            },
        });
    }
    return (
        <>
            <button className="btn btn-sm btn-primary mx-2" onClick={print}>
                打印
            </button>
            <div
                id="print_target_box11"
                className="ejk64-content div-box-shadow_e"
                style={{ width, height }}
            >
                <div className="ejk64-content-icon1">

                </div>
                <div className="ejk64-content-icon2">

                </div>
                <div className="ejk64-content-icon3">

                </div>
                <div className="ejk64-content-icon4">

                </div>
                <div className="ejk64-content-info">
                    <div>PEG-PPG-PEG, 98%, average M.W. 5,800</div>
                    <div>1L</div>
                    <div>Cat No.:302199 CAS:9003-11-6</div>
                </div>
                <div className="ejk64-content-meta__info">
                    <div>Lot:LRA0P21</div>
                    <div>d: 1.018</div>
                    <div>d: 1.018</div>
                </div>
                <div className="ejk64-content-danger">
                    Danger. Obtain special instructions before use.Avoid breathing dust/fume/gas/mist/vapours/spray.Wear protective gloves/protective clothing/eye protection/face protection. IF IN EYES:Rinse cautiously with water for several minutes.Remove contact lenses, if present and easy to do.Continue rinsing. Call a POISON CENTER or doctor/physician.Harmful if swallowed.Causes skin imitation. Causes serious eye damage.Toxic if inhaled.May cause respiratory irritation.May cause cancer.May causes damage to organs through prolonged or repeated exposure.
                </div>
                <div className="ejk64-content-qr__code">
                    <CreateQRCode value={position19} />
                </div>
            </div>
        </>
    );
}
