import loading from "assets/icons/loading.svg"
import styles from './styles.module.scss'

export const Loading = () => {
    return (
        <img className={styles.loading} src={loading} alt="loading" />
    )
}