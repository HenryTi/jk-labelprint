export function ProductMetaInfo({ ...props }) {
    const { className, lotNumber, EINECS, UN, MF, MW, d, BP, FP, store } =
        props;
    return (
        <div className={className}>
            <div>
                <span
                    className="span-label"
                    style={{ display: lotNumber ? "inline" : "none" }}
                >
                    Lot: {lotNumber}
                </span>
                <span
                    className="span-label"
                    style={{ display: EINECS ? "inline" : "none" }}
                >
                    EINECS: {EINECS}
                </span>
                <span
                    className="span-label"
                    style={{ display: UN ? "inline" : "none" }}
                >
                    UN: {UN}
                </span>
            </div>
            <div>
                <span
                    className="span-label"
                    style={{ display: MF ? "inline" : "none" }}
                >
                    MF: {MF}
                </span>
                <span
                    className="span-label"
                    style={{ display: MW ? "inline" : "none" }}
                >
                    MW: {MW}
                </span>
                <span
                    className="span-label"
                    style={{ display: d ? "inline" : "none" }}
                >
                    d: {d}
                </span>
            </div>
            <div>
                <span
                    className="span-label"
                    style={{ display: BP ? "inline" : "none" }}
                >
                    BP: {BP}
                </span>
                <span
                    className="span-label"
                    style={{ display: FP ? "inline" : "none" }}
                >
                    FP: {FP}
                </span>
            </div>
            <div>
                <span style={{ display: store ? "inline" : "none" }}>
                    {store}
                </span>
            </div>
        </div>
    );
}
