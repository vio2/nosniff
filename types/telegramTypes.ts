export declare namespace TelegramWebApp {
    interface SDK {
        WebApp: WebApp;
    }

    type EventType = 'themeChanged' | 'viewPortChanged' | 'mainButtonClicked';

    interface WebApp {
        initData: string;
        initDataUnsafe: WebAppInitData;
        colorScheme: 'light' | 'dark';
        themeParams: ThemeParams;
        isExpanded: boolean;
        viewportHeight: number;
        viewportStableHeight: number;
        MainButton: MainButton;
        onEvent(eventType: EventType, eventHandler: Function): void;
        offEvent(eventType: EventType, eventHandler: Function): void;
        sendData(data: any): void;
        ready(): void;
        expand(): void;
        close(): void;
    }

    interface ThemeParams {
        bg_color?: string;
        text_color?: string;
        hint_color?: string;
        link_color?: string;
        button_color?: string;
        button_text_color: string;
    }

    interface WebAppInitData {
        query_id?: string;
        user?: WebAppUser;
        receiver?: WebAppUser;
        start_param?: string;
        auth_date?: number;
        hash?: string;
    }

    interface WebAppUser {
        id?: number;
        is_bot: boolean;
        first_name: string;
        last_name?: string;
        username?: string;
        language_code?: string;
        photo_url?: string;
    }

    interface MainButton {
        text: string;
        color: string;
        textColor: string;
        isVisible: boolean;
        isActive: boolean;
        isProgressVisible: boolean;
        setText(text: string): MainButton;
        onClick(callback: Function): MainButton;
        show(): MainButton;
        hide(): MainButton;
        enable(): MainButton;
        disable(): MainButton;
        showProgress(leaveActive: boolean): MainButton;
        hideProgress(): MainButton;
        setParams(params: MainButtonParams): MainButton;
    }

    interface MainButtonParams {
        text?: string;
        color?: string;
        text_color?: string;
        is_active?: boolean;
        is_visible?: boolean;
    }
}

declare global {
    const Telegram: TelegramWebApp.SDK;
}
