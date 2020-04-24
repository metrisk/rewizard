/// <reference types="react" />
import IStep from '../../components/Step/types';
import IField from '../../components/Field/types';
declare namespace IForm {
    interface IConfig {
        autoStep?: boolean;
    }
    interface IProps {
        savedData?: {
            [key: string]: any;
        };
        onSubmit: (formData: {
            [key: string]: any;
        }) => void;
        config: IConfig;
        children: (value: {
            valid: boolean;
            currentStep: string;
            handleSubmit: (formData: any) => void;
        }) => React.ReactElement | React.ReactElement[];
    }
    interface IContext {
        currentStep: string;
        steps: IStepsState;
        fields: IFieldsState;
        valid: boolean;
        autoStep: boolean;
        setCurrentStep: (id: string) => void;
        setSteps: (obj: any) => void;
        setFields: (obj: any) => void;
        handleSubmit: (e: React.FormEvent) => void;
    }
    interface IStepsState {
        [key: string]: IStep.IState;
    }
    interface IFieldsState {
        [key: string]: IField.IState;
    }
}
export default IForm;
