function Card(props) {
    const {title, backgroundColor, children} = props;

    return (
        <div
            style={{
                margin: 8,
                padding: 8,
                borderRadius: 8,
                boxShadow: "0px 0px 4px grey",
                backgroundColor: backgroundColor || "white",
            }}
        >
            {/* Specialization 합성방법*/}
            {title && <h1>{title}</h1>}
            {/* Containment 합성방법*/}
            {children}
        </div>
    );
}

export default Card;