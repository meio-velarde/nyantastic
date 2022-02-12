
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Typography } from '@mui/material'
import styles from './styles'
import BreedSelect, { BreedSelectProps } from '../../base/BreedSelect'

export interface TopBarProps extends BreedSelectProps {
    title: string
}

const TopBar: React.FC<TopBarProps> = ({title, ...breedSelectProps}) => {
    return <AppBar position="static" sx={styles.appbar}>
            <Toolbar variant="dense" sx={styles.toolbar}>
                    <Typography variant="h6" sx={styles.title}>{title} </Typography>
                    <BreedSelect {...breedSelectProps}/>
            </Toolbar>
    </AppBar>
}


export default TopBar

