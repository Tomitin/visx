/// <reference types="react" />
export declare const background = "#7f82e3";
declare const defaultMargin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
};
export declare type PolygonProps = {
    width: number;
    height: number;
    margin?: typeof defaultMargin;
};
export default function ({ width, height, margin }: PolygonProps): JSX.Element;
export {};
