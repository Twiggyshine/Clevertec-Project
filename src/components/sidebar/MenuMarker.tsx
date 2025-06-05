import { Text, TextProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface MenuMarkerProps extends TextProps {
    children: ReactNode;
    isActive: boolean;
}
const MenuMarker = ({ children, isActive, ...rest }: MenuMarkerProps) => (
    <Text
        as='span'
        position='relative'
        pl={4}
        py={1}
        _before={{
            content: '""',
            position: 'absolute',
            left: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            width: isActive ? '8px' : '1px',
            height: isActive ? '28px' : '24px',
            bg: '#bef264',
        }}
        _hover={{
            fontWeight: 'bold',
            cursor: 'pointer',
            _before: {
                width: '8px',
                height: '28px',
                bg: '#bef264',
            },
        }}
        {...rest}
    >
        {children}
    </Text>
);

export default MenuMarker;
