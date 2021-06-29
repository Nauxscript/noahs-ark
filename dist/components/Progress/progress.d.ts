import React from 'react';
import { ThemeProps } from '../Icon/icon';
export interface ProgressProps {
    percent: number;
    strokeHeight?: number;
    showText?: boolean;
    styles?: React.CSSProperties;
    theme?: ThemeProps;
}
export declare const Progress: React.FC<ProgressProps>;
export default Progress;
