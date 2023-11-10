import {drawer} from "../Utils/Constants";

import {useMediaQuery, useTheme} from "@mui/material";


const useBreakpoint = () => {
    const theme = useTheme();

    const isXs = useMediaQuery(theme.breakpoints.only('xs'));
    const isSm = useMediaQuery(theme.breakpoints.only('sm'));
    const isMd = useMediaQuery(theme.breakpoints.only('md'));
    const isLg = useMediaQuery(theme.breakpoints.only('lg'));
    const isXl = useMediaQuery(theme.breakpoints.only('xl'));

    const getBreakPointName = () => {
        if (isXs) return window.innerWidth;
        if (isSm) return (window.innerWidth - drawer.width);
        if (isMd) return (window.innerWidth - drawer.width) / 2;
        if (isLg) return (window.innerWidth - drawer.width) / 3;
        if (isXl) return (window.innerWidth - drawer.width) / 4;
    }


    return {
        imageWidth: getBreakPointName()
    }
}

export default useBreakpoint
