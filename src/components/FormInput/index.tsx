export default function FormInput(props: any) {

    const { validation, invalid = "false", dirty = "false", onTurnDirty, ...inputProps } = props;

    function handleBlur() {
        onTurnDirty(props.name);
    }

    return (
        <input onBlur={handleBlur} data-dirty={dirty} { ...inputProps } data-invalid={invalid} />
    );
}