import React from 'react'
import { Box, Text } from "native-base";

export const EmptyList = () => {
    return (
        <Box flex={1} justifyContent="center" alignItems="center">
            <Text>En este momento no hay reservas.</Text>
        </Box>
    )
}
