import { Theme } from '@radix-ui/themes'

export const RadixTheme = ({ children }: React.PropsWithChildren<object>) => (
    <Theme className="radix-themes__theme" accentColor="green" radius="none">
        {children}
    </Theme>
)
