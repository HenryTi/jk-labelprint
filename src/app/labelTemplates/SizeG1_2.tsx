import { CountContext } from "app/tool";
import { useContext } from "react";
import { CreateQRCode } from "./QRCode";

export function SizeG1_2() {
    const { template, tmplContent } = useContext<any>(CountContext);
    let { width, height, GHSPictogramsCount } = Object.assign({ width: 200, height: 100 }, template);
    let { position1, position2, position3, position4, position5, position6, position7, position8,
        position9, position10, position11, position12, position13, position14, position15, position16
        , position17, position18, position19, position20, position21, position22, position23
    } = tmplContent || {};
    width = width + "mm";
    height = height + "mm";

    /* ================= 自定义尺寸  ================= */
    let obj3: any = {
        "A": { width: "76.97mm", height: "5.03mm", top: "2.12mm", left: "120.11mm" },
        "B": { width: "76.97mm", height: "5.03mm", top: "7.14mm", left: "120.11mm" },
        "C": { width: "76.97mm", height: "5.03mm", top: "12.17mm", left: "120.11mm" },
        "D": { width: "76.97mm", height: "5.03mm", top: "17.2mm", left: "120.11mm" },
        "E": { width: "76.97mm", height: "5.03mm", top: "22.22mm", left: "120.11mm" },
        "F": { width: "76.97mm", height: "3.7mm", top: "28.04mm", left: "120.11mm" },
        "G": { width: "76.97mm", height: "3.7mm", top: "31.75mm", left: "120.11mm" },
        "H": { width: "76.97mm", height: "3.7mm", top: "35.45mm", left: "120.11mm" },
        "I": { width: "76.97mm", height: "3.7mm", top: "39.15mm", left: "120.11mm" },
        "J": { width: "76.97mm", height: "20.49mm", top: "46.03mm", left: "120.11mm" },
    };

    let obj1: any = {
        "A": { width: "76.97mm", height: "5.03mm", top: "0.81mm", left: "120.11mm" },
        "B": { width: "76.97mm", height: "5.03mm", top: "5.84mm", left: "120.11mm" },
        "C": { width: "76.97mm", height: "5.03mm", top: "10.86mm", left: "120.11mm" },
        "D": { width: "76.97mm", height: "5.03mm", top: "15.89mm", left: "120.11mm" },
        "E": { width: "76.97mm", height: "5.03mm", top: "20.92mm", left: "120.11mm" },
        "F": { width: "76.97mm", height: "3.7mm", top: "26.54mm", left: "120.11mm" },
        "G": { width: "76.97mm", height: "3.7mm", top: "30.25mm", left: "120.11mm" },
        "H": { width: "76.97mm", height: "3.7mm", top: "33.95mm", left: "120.11mm" },
        "I": { width: "76.97mm", height: "3.7mm", top: "37.65mm", left: "120.11mm" },
        "J": { width: "76.97mm", height: "20.49mm", top: "45.04mm", left: "120.11mm" },
    };

    let obj2: any = {
        "A": { width: "87.97mm", height: "5.03mm", top: "0.81mm", left: "108.84mm" },
        "B": { width: "87.97mm", height: "5.03mm", top: "5.84mm", left: "108.84mm" },
        "C": { width: "87.97mm", height: "5.03mm", top: "10.86mm", left: "108.84mm" },
        "D": { width: "87.97mm", height: "5.03mm", top: "15.89mm", left: "108.84mm" },
        "E": { width: "87.97mm", height: "5.03mm", top: "20.92mm", left: "108.84mm" },
        "F": { width: "87.97mm", height: "3.7mm", top: "26.54mm", left: "108.84mm" },
        "G": { width: "87.97mm", height: "3.7mm", top: "30.25mm", left: "108.84mm" },
        "H": { width: "87.97mm", height: "3.7mm", top: "33.95mm", left: "108.84mm" },
        "I": { width: "87.97mm", height: "3.7mm", top: "37.65mm", left: "108.84mm" },
        "J": { width: "87.97mm", height: "20.49mm", top: "45.04mm", left: "108.84mm" },
    };
    /* 2、3的区别在于top不同，3/4/5的top相同，是否将2也匹配相同 */
    const obj: any = {
        2: obj3,
        3: obj1,
        4: obj2,
        5: obj2,
    };

    const result: any = obj[GHSPictogramsCount || 2];

    let p: { [num: number]: any[] } = {
        2: [
            { width: "27mm", height: "27mm", top: "33.03mm", left: "17.3mm" },
            { width: "27mm", height: "27mm", top: "33.03mm", left: "73.99mm" }
        ],
        3: [
            { width: "27mm", height: "27mm", top: "18.01mm", left: "45.87mm" },
            { width: "27mm", height: "27mm", top: "46.37mm", left: "17.41mm" },
            { width: "27mm", height: "27mm", top: "46.37mm", left: "74.34mm" }
        ],
        4: [
            { width: "20mm", height: "20mm", top: "15.34mm", left: "43.37mm" },
            { width: "20mm", height: "20mm", top: "39.93mm", left: "18.48mm" },
            { width: "20mm", height: "20mm", top: "39.93mm", left: "68.62mm" },
            { width: "20mm", height: "20mm", top: "64.51mm", left: "43.37mm" }
        ],
        5: [
            { width: "20mm", height: "20mm", top: "16.56mm", left: "17.83mm" },
            { width: "20mm", height: "20mm", top: "16.56mm", left: "67.28mm" },
            { width: "20mm", height: "20mm", top: "40.92mm", left: "42.56mm" },
            { width: "20mm", height: "20mm", top: "65.61mm", left: "17.83mm" },
            { width: "20mm", height: "20mm", top: "65.61mm", left: "67.28mm" }
        ]
    };
    let icons: any[] = p[GHSPictogramsCount]?.filter((el: any) => el) || [];
    let iconContents: any[] = [position11, position12, position13, position14, position15];
    /* ================= 自定义尺寸  ================= */

    return <div className="position-relative div-box-shadow" style={{ width: width, height: height }}>
        <div className="position-absolute" style={{ color: 'rgb(0, 0, 0)', left: 0, top: 0, width: width, height: height }}>
            <div id="A" className="position-absolute border-test" style={result['A']}>
                <div className="font-family-Arial fw-bolder h-100" style={{ fontSize: "10pt" }} >
                    {position1}
                </div>
            </div>
            <div id="B" className="position-absolute border-test" style={result['B']}>
                <div className="font-family-Arial fw-bolder h-100" style={{ fontSize: "10pt" }} >
                    {position2}
                </div>
            </div>
            <div id="C" className="position-absolute border-test" style={result['C']}>
                <div className="font-family-Arial fw-bolder h-100" style={{ fontSize: "10pt" }} >
                    {position3}
                </div>
            </div>
            <div id="D" className="position-absolute border-test" style={result['D']}>
                <div className="font-family-Arial fw-bolder h-100" style={{ fontSize: "10pt" }} >
                    {position4}
                </div>
            </div>
            <div id="E" className="position-absolute border-test" style={result['E']}>
                <div className="font-family-Arial fw-bolder h-100" style={{ fontSize: "10pt" }} >
                    {position5}
                </div>
            </div>
            <div id="F" className="position-absolute border-test" style={result['F']}>
                <div className="font-family-Arial fw-bolder fs-baseline line-height-100" style={{ transform: "scale(0.78)", width: "128%", height: "128%", transformOrigin: "left top" }} >
                    F{position6}
                </div>
            </div>
            <div id="G" className="position-absolute border-test" style={result['G']}>
                <div className="font-family-Arial fw-bolder fs-baseline line-height-100" style={{ transform: "scale(0.78)", width: "128%", height: "128%", transformOrigin: "left top" }} >
                    {position7}
                </div>
            </div>
            <div id="H" className="position-absolute border-test" style={result['H']}>
                <div className="font-family-Arial fw-bolder fs-baseline line-height-100" style={{ transform: "scale(0.78)", width: "128%", height: "128%", transformOrigin: "left top" }} >
                    {position8}
                </div>
            </div>
            <div id="I" className="position-absolute border-test" style={result['I']}>
                <div className="font-family-Arial fw-bolder fs-baseline line-height-100" style={{ transform: "scale(0.78)", width: "128%", height: "128%", transformOrigin: "left top" }} >
                    {position9}
                </div>
            </div>
            <div id="J" className="position-absolute border-test" style={result['J']}>
                <div className="font-family-Arial fw-bolder fs-baseline line-height-100" style={{ transform: "scale(0.67)", width: "150%", height: "150%", transformOrigin: "left top" }} >
                    J{position10}
                </div>
            </div>

            {icons.map((el: any, index: number) => {
                let id: any = `Icon${index + 1}`;
                return <div key={id} id={id} className="position-absolute border-test" style={el}>
                    <img className="d-block w-100 h-100" src={iconContents[index]} />
                </div>;
            })}

            <div id="QRmaker2" className="position-absolute border-test" style={{ width: "8.99mm", height: "8.99mm", top: "85.98mm", left: "189.1mm" }} >
                <CreateQRCode value={position12} />
            </div>
        </div>
    </div>
}