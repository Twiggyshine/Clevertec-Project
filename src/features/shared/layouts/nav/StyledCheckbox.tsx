import { Checkbox, CheckboxProps } from '@chakra-ui/react';

export const StyledCheckbox = (props: CheckboxProps) => (
    <Checkbox
        {...props}
        sx={{
            '.chakra-checkbox__control': {
                _checked: { bg: '#b1ff2e' },
                borderRadius: '2px',
                p: 2,
                colorScheme: 'red',
                border: '1px solid #b1ff2e',
            },
        }}
    />
);
