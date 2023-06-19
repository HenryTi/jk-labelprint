import { CountContext, printCssUrl } from "app/tool";;
import { useContext } from "react";
import { CreateQRCode } from "./QRCode";
import printJS from "print-js";

export function SizeG7_EJK73() {
    const { template, tmplContent, iconMap } = useContext<any>(CountContext);
    let { width, height } = Object.assign({ width: 68, height: 27 }, template);
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
                className="ejk73-content div-box-shadow_e"
                style={{ width, height }}
            >
                <div className="ejk73-content-icon1"></div>
                <div className="ejk73-content-icon2"></div>
                <div className="ejk73-content-icon3"></div>
                <div className="ejk73-content-info">
                    <div>PEG-PPG-PEG, 98%, average M.W. 5,800</div>
                    <div>1L</div>
                    <div>Cat No.:302199 CAS:9003-11-6</div>
                </div>
                <div className="ejk73-content-meta__info">

                </div>
                <div className="ejk73-content-qr__code">
                    <CreateQRCode value={position19} />
                </div>
            </div>
        </>
    );
}
