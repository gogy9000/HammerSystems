import {Link, useLocation} from "react-router-dom";
import {memo} from "react";

export const MenuItem = memo(({icon, path, label}) => {

    const {pathname} = useLocation()
    const pathnameArray = pathname.split('/')
    const slicedPathname = pathnameArray.slice(0, pathnameArray.length - 1).join('/')

    return (
        <>
            {icon}
            <span>{label}</span>
            <Link to={`${slicedPathname}/${path}`}/>
        </>
    )
})