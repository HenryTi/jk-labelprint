export function ProductInfo({ ...props }) {
    const { className, description, radioy, unit, CAS, cat } = props;
    return (
        <div className={className}>
            {<br />}
            <div style={{ display: description ? "block" : "none" }}>
                {description}
            </div>
            <div
                style={{ display: radioy && unit ? "block" : "none" }}
            >{`${radioy}${unit}`}</div>
        </div>
    );
}
