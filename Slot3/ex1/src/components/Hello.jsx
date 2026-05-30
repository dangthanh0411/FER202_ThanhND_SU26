
function Hello() {
    const reactStyle = {
        fontSize: 48,
        color: "blue",
        fontWeight: "bold"
    };

    return (
        <div>
            <p>
                Hello <span style={reactStyle}>React</span>
            </p>
        </div>
    );
}

export default Hello;