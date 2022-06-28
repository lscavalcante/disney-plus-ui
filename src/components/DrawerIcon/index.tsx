import styles from './styles.module.scss';

interface IDrawerIcon {
    isOpen: boolean;
    onTap: () => void;
}

export function DrawerIcon(props: IDrawerIcon) {
    return (
        <div onClick={props.onTap} className={`${styles.button__menu} ${props.isOpen ? styles.active : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}