import {drawer} from "../Utils/Constants";

import {useMediaQuery, useTheme} from "@mui/material";


const useBreakpoint = () => {
    const theme = useTheme();

    const mq_xs = useMediaQuery(theme.breakpoints.only('xs'));
    const mq_sm = useMediaQuery(theme.breakpoints.only('sm'));
    const mq_md = useMediaQuery(theme.breakpoints.only('md'));
    const mq_lg = useMediaQuery(theme.breakpoints.only('lg'));
    const mq_xl = useMediaQuery(theme.breakpoints.only('xl'));

    const getBreakPointName = () => {
        if (mq_xs) return window.innerWidth;
        if (mq_sm) return (window.innerWidth - drawer.width);
        if (mq_md) return (window.innerWidth - drawer.width) / 2;
        if (mq_lg) return (window.innerWidth - drawer.width) / 3;
        if (mq_xl) return (window.innerWidth - drawer.width) / 4;
    }


    return {
        imageWidth: getBreakPointName()
    }
}

export default useBreakpoint
