export declare let physical_constants: {
    [constantName: string]: [number, string, number];
};
export declare const _obsolete_constants: {
    [constantName: string]: true;
};
export declare class ConstantDeprecatedWarning {
}
export declare function value(key: string): number;
export declare function unit(key: string): string;
export declare function precision(key: string): number;
export declare function find(sub?: string | null, disp?: boolean): string[] | undefined;
export declare const exact_values: typeof physical_constants;
