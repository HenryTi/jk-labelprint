import { CountContext, iconUrl } from "app/tool";
import { useContext } from "react";
import { CreateQRCode } from "./QRCode";

export function SizeC45() {
    const { template, tmplContent, iconMap } = useContext<any>(CountContext);
    let { width, height } = Object.assign({ width: 95, height: 33 }, template);
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
        position10,
        position19,
    } = tmplContent || {};
    width = width + "mm";
    height = height + "mm";

    return (
        <div className="sizec45-outer__box-red div-box-shadow" style={{ width, height }}>
            <div className="sizec45-inner__box-black">
                <div className="sizec45-content">
                    <div className="sizec45-content-specifications">
                        <span className="sizec45-content-code">
                            {salesOrigin}
                        </span>
                        <span>{radioy + unit}</span>
                    </div>
                    <div className="sizec45-content-productname_cn">
                        {descriptionC}
                    </div>
                    <div className="sizec45-content-productname_en">
                        <div>{description}</div>
                        <span className="sizec45-content-code">CAS: {CAS}</span>
                        <span>Lot: {lotNumber}</span>
                    </div>
                    <div className="sizec45-danger">
                        <svg width="4.42mm" height="7.74mm">
                            <text x="0" dy="4.1mm">
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
                                        className="sizec45-danger__icon"
                                        key={icon.name}
                                        src={iconUrl(icon.src)}
                                    />
                                );
                            })}
                        <div className="sizec45-content-danger__tips">
                            {position10}
                            {/* 导致严重的皮肤灼伤和眼睛损伤，长期或频繁接触会损伤器官，吞食有毒，可能导致遗传性缺陷，可能致癌，可能加剧燃烧；氧化剂，吸入致命，可能导致皮肤过敏，在长期持续的影响下对水生生物毒性非常大，吸入可能导致过敏或哮喘症状或呼吸困难，皮肤接触有害，可能对生育能力或未出生婴儿造成伤害。 */}
                        </div>
                    </div>
                    <div className="sizec45-content-qr__code">
                        <CreateQRCode value={position19} />
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}
