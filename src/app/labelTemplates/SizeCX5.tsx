import { CountContext, iconUrl } from "app/tool";
import { useContext } from "react";
import { CreateQRCode } from "./QRCode";

export function SizeCX5() {
    const { template, tmplContent, iconMap } = useContext<any>(CountContext);
    let { width, height } = Object.assign(
        { width: 200, height: 100 },
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
        position8,
        position9,
        position10,
        position11,
        position19,
    } = tmplContent || {};
    width = width + "mm";
    height = height + "mm";

    return (
        <div className="sizecx5-outer__box-red div-box-shadow" style={{ width, height }}>
            <div className="sizecx5-inner__box-black">
                <div className="sizecx5-content-left">
                    <div className="sizecx5-content-bold">
                        <span className="sizecx5-span-margin__right">
                            {salesOrigin}
                        </span>
                        <span>{radioy + unit}</span>
                    </div>
                    <div className="sizecx5-content-productname_cn">
                        {descriptionC}
                    </div>
                    <div className="sizecx5-content-productname_en">
                        <div>{description}</div>
                        <span className="sizecx5-content-code">CAS: {CAS}</span>
                        <span>Lot: {lotNumber} </span>
                    </div>
                    <div className="sizecx5-left__bottom">
                        <span className="sizecx5-danger__cn">危 险</span>
                        {iconMap
                            .filter((icon: any) => {
                                return hazard?.indexOf(icon.name) > -1;
                            })
                            .map((icon: any) => {
                                return (
                                    <img
                                        alt="danger"
                                        className="sizecx5-danger__icon"
                                        key={icon.name}
                                        src={iconUrl(icon.src)}
                                    />
                                );
                            })}
                        <div className="sizecx5-two__column-layout">
                            <div className="sizecx5-content-danger__tips">
                                <br />
                                {position10}
                                {/* 导致严重的皮肤灼伤和眼睛损伤，长期或频繁接触会损伤器官，吞食有毒，可能导致遗传性缺陷，可能致癌，可能加剧燃烧；氧化剂，吸入致命，可能导致皮肤过敏，在长期持续的影响下对水生生物毒性非常大，吸入可能导致过敏或哮喘症状或呼吸困难，皮肤接触有害，可能对生育能力或未出生婴儿造成伤害。 */}
                            </div>

                            <div className="sizecx5-content-other">
                                <svg width="80.45mm" height="51.24mm">
                                    <text x="0" y="0">
                                        <tspan x="28mm" dy="3.4mm"> Speciﬁcations </tspan>

                                        <tspan x="0" dy="3.4mm"> Appearance: </tspan>
                                        <tspan x="43.56mm" dy="0mm"> Clear colorless liquid </tspan>

                                        <tspan x="0" dy="3.4mm"> GC: </tspan>
                                        <tspan x="43.56mm" dy="0mm"> {"≥95% (n-Hexane)"} </tspan>
                                        <tspan x="43.56mm" dy="3.4mm"> {"≥99.8% (total C6-Hydrocarbons)"} </tspan>

                                        <tspan x="0" dy="3.4mm"> Color: </tspan>
                                        <tspan x="43.56mm" dy="0mm"> {"<10 APHA"} </tspan>

                                        <tspan x="0" dy="3.4mm"> Water: </tspan>
                                        <tspan x="43.56mm" dy="0mm"> {"<0.02% (by K.F.)"} </tspan>

                                        <tspan x="0" dy="3.4mm"> Residue after evaporation: </tspan>
                                        <tspan x="43.56mm" dy="0mm"> {"<3 ppm"} </tspan>

                                        <tspan x="0" dy="3.4mm"> Water soluble titrable acid: </tspan>
                                        <tspan x="43.56mm" dy="0mm"> {"<0.0003 meq/g"} </tspan>

                                        <tspan x="0" dy="3.4mm"> Sulfur compounds (as S): </tspan>
                                        <tspan x="43.56mm" dy="0mm"> {"To pass test "} </tspan>

                                        <tspan x="0" dy="3.4mm"> UV Absorbance: </tspan>
                                        <tspan x="43.56mm" dy="0mm"> {"195 nm < 1.00"} </tspan>
                                        <tspan x="43.56mm" dy="3.4mm"> {"210 nm < 0.25"} </tspan>
                                        <tspan x="43.56mm" dy="3.4mm"> {"220 nm < 0.075"} </tspan>
                                        <tspan x="43.56mm" dy="3.4mm"> {"254 nm < 0.05"} </tspan>

                                        <tspan x="0" dy="3.4mm"> UV Cutoff: </tspan>
                                        <tspan x="43.56mm" dy="0mm"> {"<195 nm"} </tspan>
                                    </text>
                                </svg>
                            </div>
                            <div className="sizecx5-content-qr__code">
                                <CreateQRCode value={position19} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sizecx5-content-right">
                    {/* 此处为上下结构 */}
                    <div className="sizecx5-content-store_info">
                        <div>
                            {position9}
                            {/* <strong>【预防措施和事故处理】</strong>不要催吐。避免向环境中排放。如果吞食：感觉不适，呼叫化工职业病防治中心或医生。如果接触皮肤：用肥皂和大量的水冲洗。戴防护手套、防护镜和防护面具，穿防护服。如果进入眼睛：用水小心的冲洗几分钟。如果简单易行，摘下隐形眼镜继续冲洗。远离热源、火花、明火、高温表面。— */}

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
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}
