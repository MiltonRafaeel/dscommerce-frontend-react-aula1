export default function FormTextArea(props: any) {

    const { validation, invalid = "false", dirty = "false", onTurnDirty, ...textAreaProps } = props;

    function handleBlur() {
        onTurnDirty(props.name);
    }

    return (
        <textarea onBlur={handleBlur} data-dirty={dirty} { ...textAreaProps } data-invalid={invalid} />
    );
}