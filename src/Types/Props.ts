interface Props {
    [name: string|symbol]: {
        default: any|null,
        required: Boolean|null,
        type: any|null,
        description: String|null,
    }
};

export default Props;
