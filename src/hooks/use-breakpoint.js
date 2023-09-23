import { useMediaQuery, useTheme } from "@mui/material";
import {drawer} from "../Utils/Constants";

/**
 * useBreakpoint
 *
 * @returns
 */
const useBreakpoint = () => {

    /**
     * useTheme
     */
    const theme = useTheme();

    /**
     * useMediaQuery
     *
     */
    const mq_xs = useMediaQuery(theme.breakpoints.only('xs'));
    const mq_sm = useMediaQuery(theme.breakpoints.only('sm'));
    const mq_md = useMediaQuery(theme.breakpoints.only('md'));
    const mq_lg = useMediaQuery(theme.breakpoints.only('lg'));
    const mq_xl = useMediaQuery(theme.breakpoints.only('xl'));

    /**
     * getBreakPointName
     *
     */
    const getBreakPointName = () => {

        if(mq_xs){
            return window.innerWidth;
            // return {col: 1, drawerWidth: 0};
            // return "xs"
        }
        if(mq_sm){
            return (window.innerWidth - drawer.width);
            // return {col: 1, drawerWidth: drawer.width};
            // return "sm"
        }
        if(mq_md){
            return (window.innerWidth - drawer.width) / 2;
            // return {col: 2, drawerWidth: drawer.width};
            // return "md"
        }
        if(mq_lg){
            return (window.innerWidth - drawer.width) / 3;
            // return {col: 3, drawerWidth: drawer.width};
            // return "lg"
        }
        if(mq_xl){
            return (window.innerWidth - drawer.width) / 4;
            // return {col: 4, drawerWidth: drawer.width};
            // return "xl"
        }

    }

    return {
        imageWidth: getBreakPointName()
    }
}

export default useBreakpoint
