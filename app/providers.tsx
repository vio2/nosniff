'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { ThemeConfig } from '@chakra-ui/react';

export const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: true,
};

const theme = extendTheme({ config });

export function Providers({ children }: { children: React.ReactNode }) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
