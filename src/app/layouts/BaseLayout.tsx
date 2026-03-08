import { Outlet } from "react-router-dom"
import styles from './BaseLayout.module.css'

export const BaseLayout = () => {
    return (
        <>
            <h1>Base layout</h1>
            <div className={styles.baseLayout}>
                <Outlet />
            </div>
        </>
    )    
}