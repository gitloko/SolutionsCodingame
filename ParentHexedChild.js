function Parent({ value }) {
    const ChildComponent = () => <Child value={value.toString(16)} />;
    return <Hexed value={value} component={ChildComponent} />;
}

function Hexed({ value, component: Component }) {
    return (
        <div id="hexed">
            <Component value={`0x${value.toString(16)}`} />
        </div>
    );
}

function Child({ value }) {
    return (
        <div id="child">
            {value}
        </div>
    );
}

export function Preview() {
    return <Parent value={42} />;
}

export default Parent;