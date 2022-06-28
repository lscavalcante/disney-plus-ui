import  styles from  './styles.module.scss';

export function Button() {
    return <button type='button' className={styles.container}>
        <img src="assets/images/play_icon.png" alt="play icon" />
        <span>Watch Now</span>
    </button>

}