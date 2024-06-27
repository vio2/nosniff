'use client';

import { TelegramWebApp } from '@/types/telegramTypes';
import { useEffect, useState } from 'react';
import { Input, Button, Stack, Center } from '@chakra-ui/react';

declare global {
    interface Window {
        Telegram: TelegramWebApp.SDK;
    }
}

export default function Home() {
    const [webApp, setWebApp] = useState<any>();
    const [user, setUser] = useState<any>();
    const [inp, setInp] = useState<any>();
    const [kaif, setKaif] = useState<boolean>();
    const [visible, setVisible] = useState<boolean>(false);

    const [mainButtonText, setMainButtonText] = useState<any>('CONTINUE');

    useEffect(() => {
        if (
            typeof window !== undefined &&
            window.Telegram.WebApp !== undefined
        ) {
            setWebApp(window.Telegram.WebApp);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (webApp) {
            console.log(webApp);
            setUser(webApp.initDataUnsafe.user);
        }
    }, [webApp]);

    useEffect(() => {
        console.log(
            'mainbutton statun: ',
            window.Telegram.WebApp.MainButton.isActive
        );
    });

    const changeVisibility = () => {
        if (!visible) {
            window.Telegram.WebApp.MainButton.show();
        } else window.Telegram.WebApp.MainButton.hide();
        setVisible(!visible);
    };

    return (
        <main className="flex items-center justify-center">
            <div className="flex flex-col my-auto">
                {user ? (
                    <>
                        <div>
                            User ID: {user.id}
                            <br />
                            Username: {user.username} <br />
                            First Name: {user.first_name} <br />
                            {user.last_name && (
                                <>
                                    {user.last_name} <br />
                                </>
                            )}
                            Language code: {user.language_code}
                        </div>
                    </>
                ) : null}
                {webApp ? (
                    <Stack>
                        <Input onChange={(e) => setInp(e.target.value)} />
                        <div className="flex gap-2 justify-between">
                            <Button onClick={() => webApp.showAlert(inp)}>
                                alert
                            </Button>
                            <Button
                                onClick={() =>
                                    webApp.showConfirm(inp, () =>
                                        console.log('entered: ', inp)
                                    )
                                }
                            >
                                confirm
                            </Button>
                        </div>
                        <Input
                            onChange={(e) => setMainButtonText(e.target.value)}
                        />
                        <Button
                            onClick={() =>
                                (window.Telegram.WebApp.MainButton.text =
                                    mainButtonText)
                            }
                        >
                            Set main button text
                        </Button>
                        <Button onClick={() => changeVisibility()}>
                            {visible ? 'Hide main button' : 'Show main button'}
                        </Button>
                    </Stack>
                ) : null}
            </div>
        </main>
    );
}
