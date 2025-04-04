import { Text, TextProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface MenuMarkerProps extends TextProps {
    children: ReactNode;
}

const MenuMarker = ({ children, ...rest }: MenuMarkerProps) => (
    <Text
        as='span'
        position='relative'
        pl={4}
        _before={{
            content: '""',
            position: 'absolute',
            left: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '1px',
            height: '24px',
            bg: '#c4ff61',
        }}
        py={1}
        _hover={{
            fontWeight: 'bold',
            cursor: 'pointer',
            _before: {
                width: '8px',
                height: '28px',
                bg: '#c4ff61',
            },
        }}
        {...rest}
    >
        {children}
    </Text>
);

export default MenuMarker;
