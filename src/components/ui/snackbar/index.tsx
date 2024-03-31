import { useAppSelector } from 'app/store/hooks'
import styles from './styles.module.scss'
import { Snackbar } from 'hooks/useSnackbar'

export const SnackbarQueue = () => {
    const {snackbars} = useAppSelector(state=>state.snackbarReducer)
    return (
        <div className={styles.queue}>
            {snackbars.map(s=><Snackbar key={s.id} id={s.id} message={s.message}/>)}
        </div>
    )
}