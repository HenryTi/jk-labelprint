export function ProductMetaInfo({ ...props }) {
    const { className, cat, CAS, lotNumber, EINECS } =
        props;
    return (
        <div className={className}>
            <div style={{ display: cat ? "block" : "none" }}>
                {`Cat No.: ${cat}`}
            </div>
            <div style={{ display: CAS ? "block" : "none" }}>
                {`CAS: ${CAS}`}
            </div>
            <div style={{ display: lotNumber ? "block" : "none" }}>
                {`Lot.: ${lotNumber}`}
            </div>
            <div style={{ display: EINECS ? "block" : "none" }}>
                {`EINECS: ${EINECS}`}
            </div>
        </div>
    );
}
