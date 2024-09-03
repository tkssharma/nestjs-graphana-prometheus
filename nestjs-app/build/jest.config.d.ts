export const roots: string[];
export const testMatch: string[];
export const transform: {
    '^.+.ts?$': string;
};
export const transformIgnorePatterns: string[];
export const moduleNameMapper: {
    '^@domain(.*)$': string;
    '^@core(.*)$': string;
    '^@lib(.*)$': string;
    '^@auth(.*)$': string;
    '^@db(.*)$': string;
    '^@logger(.*)$': string;
    '^@config(.*)$': string;
    '^@swagger(.*)$': string;
};
