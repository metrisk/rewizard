declare namespace ISelect {
    interface IProps {
        name?: string;
        label?: string;
        options: {
            label: string;
            value: string;
        }[];
        value: any;
        onChange: (value: any) => void;
    }
}
export default ISelect;
