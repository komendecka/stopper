import styles from './Container.scss'

const Container = ({ children }) => (
    <div className={styles.container}>
        {children}
    </div>
)

export default Container;