export function ProductInfo({ ...props }) {
    const { className, description, radioy, unit, CAS, cat } = props;
    return (
        <div className={className}>
            {className.match(/\d+/) >= 60 ? "" : <br />}
            <div>{description}</div>
            <div>{`${radioy}${unit}`}</div>
            {className.match(/\d+/) >= 60 ? "" : <br />}
            <div>
                <span
                    className="span-label"
                    style={{ display: cat ? "inline" : "none" }}
                >{`Cat No: ${cat}`}</span>
                <span
                    className="span-label"
                    style={{ display: CAS ? "inline" : "none" }}
                >{`CAS: ${CAS}`}</span>
            </div>
        </div>
    );
}
