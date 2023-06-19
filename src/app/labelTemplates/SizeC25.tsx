import { CountContext, iconUrl } from "app/tool";
import { Key, useContext } from "react";
import { CreateQRCode } from "./QRCode";

export function SizeC25() {
    const { template, tmplContent, iconMap } = useContext<any>(CountContext);
    let { width, height } = Object.assign({ width: 150, height: 65 }, template);
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
        position8,
        position9,
        position10,
        position11,
        position19,
    } = tmplContent || {};

    width = width + "mm";
    height = height + "mm";
    return (
        <div className="sizec25-outer__box-red div-box-shadow" style={{ width, height }}>
            <div className="sizec25-inner__box-black">
                <div className="sizec25-content-left">
                    <div className="sizec25-content-specifications">
                        <span className="sizec25-content-code">
                            {salesOrigin}
                        </span>
                        <span> {radioy + unit} </span>
                    </div>
                    <div className="sizec25-content-productname_cn">
                        {descriptionC}
                    </div>
                    <div className="sizec25-content-productname_en">
                        <div>{description}</div>
                        <span className="sizec25-content-code">CAS: {CAS}</span>
                        <span>Lot: {lotNumber}</span>
                    </div>
                    <div className="sizec25-danger">
                        <span className="sizec25-danger__cn">危 险</span>
                        {iconMap
                            .filter((icon: any) => {
                                return hazard?.indexOf(icon.name) > -1;
                            })
                            .map((icon: any) => {
                                return (
                                    <img
                                        alt="danger"
                                        className="sizec25-danger__icon"
                                        key={icon.name}
                                        src={iconUrl(icon.src)}
                                    />
                                );
                            })}
                        <div className="sizec25-content-danger__tips">
                            {position10}
                        </div>
                        <div className="sizec25-content-other">
                            {/* 此处为三列布局 */}
                            <svg width="34mm" height="18mm">
                                <text x="0" y="0">
                                    <tspan x="0" dy="2.7mm">
                                        {position1}
                                    </tspan>
                                    <tspan x="0" dy="2.7mm">
                                        {position2}
                                    </tspan>
                                    <tspan x="0" dy="2.7mm">
                                        {position3}
                                    </tspan>
                                    <tspan x="0" dy="2.7mm">
                                        {position4}
                                    </tspan>
                                    <tspan x="0" dy="2.7mm">
                                        {position5}
                                    </tspan>
                                    <tspan x="0" dy="2.7mm">
                                        {position6}
                                    </tspan>
                                    <tspan dx="4mm">{position7}</tspan>
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="sizec25-content-right">
                    {/* 此处为上下结构 */}
                    <div className="sizec25-content-store_info">
                        <div>
                            {position9}
                            {/* <strong>【预防措施和事故处理】</strong>不要催吐。避免向环境中排放。如果吞食：感觉不适，呼叫化工职业病防治中心或医生。如果接触皮肤：用肥皂和大量的水冲洗。戴防护手套、防护镜和防护面具，穿防护服。如果进入眼睛：用水小心的冲洗几分钟。如果简单易行，摘下隐形眼镜继续冲洗。远离热源、火花、明火、高温表面。—
                            禁止吸烟。 */}
                        </div>
                        <div>
                            {position8}
                            {/* <strong>【安全储存】</strong>储存在阴凉、干燥、通风处，储存在密闭容器中。冷藏2-8℃，请充氮气保存，对湿气敏感，对空气敏感。 */}
                        </div>
                        <div>
                            {position11}
                            {/* <strong>【废弃处置】</strong>不再使用的产品和废弃包装应依据法规，委托有资质的单位进行处置。 */}
                        </div>
                    </div>
                    <div className="sizec25-content-qr__code">
                        <CreateQRCode value={position19} />
                    </div>
                </div>
            </div>
        </div>
    );
}
