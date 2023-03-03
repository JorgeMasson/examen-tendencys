import { Button } from '@chakra-ui/react';


const PlatformButton = ({ children, ghost, secondary, link, ...props }) => {
    if (ghost) return <Button fontWeight="normal" {...props} colorScheme="black" color="black" variant="ghost">{children}</Button>
    if (link) return <Button fontWeight="normal" {...props} color="linkblue" variant="link" textDecoration="underline" >{children}</Button>
    if (secondary) return <Button fontWeight="normal" {...props} colorScheme="brand" color="black" borderColor="green" variant="outline">{children}</Button>
    return <Button fontWeight="normal" {...props} colorScheme="green" color="white">{children}</Button>
};

export default PlatformButton;