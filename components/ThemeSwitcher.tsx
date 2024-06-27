'use client';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, Icon, useColorMode } from '@chakra-ui/react';
import React from 'react';

const ThemeSwitcher: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <div className="absolute top-6 right-6">
            <Button onClick={toggleColorMode}>
                <Icon as={colorMode === 'light' ? MoonIcon : SunIcon}></Icon>
            </Button>
        </div>
    );
};

export default ThemeSwitcher;
