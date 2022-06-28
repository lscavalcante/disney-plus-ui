import { useState } from 'react';
import { DrawerIcon } from '../../components/DrawerIcon';
import { Movie } from '../../models/movie';
import { Menu } from '../Menu';
import styles from './styles.module.scss';

// movies: Movie[]

interface IHeaderProps {
    movies: Movie[]
    selectMovie: (data: Movie) => void
}

export function Header(props: IHeaderProps) {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            <header className={styles.box}>
                <img src="/src/assets/images/logo.png" alt="logo disney" />
                <DrawerIcon isOpen={isOpen} onTap={() => setIsOpen(!isOpen)} />
            </header>
            <Menu movies={props.movies} isOpen={isOpen} selectMovie={(movie) => {props.selectMovie(movie), setIsOpen(false)}} />
        </>
    )
}