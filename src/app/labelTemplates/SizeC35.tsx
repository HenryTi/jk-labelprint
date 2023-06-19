import { CountContext, iconUrl } from "app/tool";;
import { useContext } from "react";
import { CreateQRCode } from "./QRCode";

export function SizeC35() {
    const { template, tmplContent, iconMap } = useContext<any>(CountContext);
    let { width, height } = Object.assign({ width: 120, height: 50 }, template);
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

    return <div className="sizec35-outer__box-red div-box-shadow" style={{ width, height }}>
        <div className="sizec35-inner__box-black">
            <div className="sizec35-content-left">
                <div className="sizec35-content-specifications">
                    <span className="sizec35-content-code">{salesOrigin}</span>
                    <span>{radioy + unit}</span>
                </div>
                <div className="sizec35-content-productname_cn">
                    {descriptionC}
                </div>
                <div className="sizec35-content-productname_en">
                    <div>{description}</div>
                    <span className="sizec35-content-code">CAS: {CAS}</span>
                    <span>Lot: {lotNumber}</span>
                </div>
                <div className="sizec35-danger">
                    {/* <span className="sizec35-danger__cn">危 险</span> */}
                    <svg width="7.41mm" height="6.79mm">
                        <text x="0" dy="4.2mm">
                            危 险
                        </text>
                    </svg>
                    {iconMap
                        .filter((icon: any) => {
                            return hazard?.indexOf(icon.name) > -1;
                        })
                        .map((icon: any) => {
                            return (
                                <img
                                    alt="danger"
                                    className="sizec35-danger__icon"
                                    key={icon.name}
                                    src={iconUrl(icon.src)}
                                />
                            );
                        })}
                    <div className="sizec35-content-danger__tips">
                        {position10}
                        {/* 导致严重的皮肤灼伤和眼睛损伤，长期或频繁接触会损伤器官，吞食有毒，可能导致遗传性缺陷，可能致癌，可能加剧燃烧；氧化剂，吸入致命，可能导致皮肤过敏，在长期持续的影响下对水生生物毒性非常大，吸入可能导致过敏或哮喘症状或呼吸困难，皮肤接触有害，可能对生育能力或未出生婴儿造成伤害。 */}
                    </div>
                    <div className="sizec35-content-other">
                        <svg width="25mm" height="11mm">
                            <text x="0" y="0">
                                <tspan x="0" dy="1.76mm">{position1}</tspan>
                                <tspan x="0" dy="1.76mm">{position2}</tspan>
                                <tspan x="0" dy="1.76mm">{position3}</tspan>
                                <tspan x="0" dy="1.76mm">{position4}</tspan>
                                <tspan x="0" dy="1.76mm">{position5}</tspan>
                                <tspan x="0" dy="1.76mm">{position6}</tspan>
                                <tspan x="8mm" dy="0">{position7}</tspan>
                            </text>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="sizec35-content-right">
                <div className="sizec35-content-store_info">
                    <div>
                        {position9}
                        {/* <strong>【预防措施和事故处理】</strong>不要催吐。避免向环境中排放。如果吞食：感觉不适，呼叫化工职业病防治中心或医生。如果接触皮肤：用肥皂和大量的水冲洗。戴防护手套、防护镜和防护面具，穿防护服。如果进入眼睛：用水小心的冲洗几分钟。如果简单易行，摘下隐形眼镜继续冲洗。远离热源、火花、明火、高温表面。—禁止吸烟。 */}
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
                <div className="sizec35-content-qr__code">
                    <CreateQRCode value={position19} />
                </div>
            </div>
        </div>
        {/* </div> */}
    </div>
}