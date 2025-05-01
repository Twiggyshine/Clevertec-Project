import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    breakpoints: {
        sm: '480px', // Мобильные (маленькие экраны)
        md: '768px', // Планшеты
        lg: '1024px', // Ноутбуки
        xl: '1280px', // Десктопы
        '2xl': '1440px', // Большие десктопы (ваш кастомный брейкпоинт)
        '3xl': '1920px', // 4K/очень большие экраны
    },
    components: {
        Button: {
            baseStyle: {
                fontSize: { base: '14px' },
            },
        },
    },
});

export default theme;
