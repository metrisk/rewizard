import IForm from '../../context/Form/types';
import IField from '../../components/Field/types';
/**
 * Validate the current step
 */
declare const validateField: (fields: IForm.IFieldsState, value: any, validation: (fields: {
    [key: string]: IField.IState;
}, value: any) => boolean, required: boolean) => boolean;
export default validateField;
