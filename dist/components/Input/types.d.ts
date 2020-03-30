declare namespace IInput {
    interface IProps {
        name?: string;
        label?: string;
        type?: 'text' | 'number' | 'url' | 'email' | 'tel';
        value: any;
        onChange: (value: any) => void;
    }
}
export default IInput;
