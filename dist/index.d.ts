import React from 'react';
import './style.less';
export interface CalculatorButton {
    value?: string;
    children: React.ReactNode;
    title?: string;
    onClick?(event: ReactCalculatorHandle): void;
    className?: string;
}
export interface ReactCalculatorHandle {
    Calculations: string[];
    SetCalculations: React.Dispatch<React.SetStateAction<string[]>>;
    PushCalculation(newCurrentValue: string): void;
    CurrentValue: string;
    ReplaceCurrentValue(newCurrentValue: string): void;
    PushCurrentValue(value: string): void;
}
export interface ReactCalculatorProps {
    className?: string;
    id?: string;
    Buttons?: CalculatorButton[][];
}
export declare const Calculate: (input: string) => number;
export declare function ReactCalculator(props: ReactCalculatorProps): JSX.Element;
