import {Box, Button, Card, CardActions, Skeleton} from '@mui/material'
import React, {useState} from 'react'
import Cat from '../../../models/Cat'
import { Link } from 'react-router-dom'
import styles from './styles'

export interface GalleryImageCardProps {
    cat: Cat
}

export const GalleryImageCard: React.FC<GalleryImageCardProps> = ({ cat }) => {
    const [isLoading, setIsLoading] = useState(true)
    const to = `/${cat.id}`
    return (
        <Box sx={styles.root}>
            <Card>
                <Box sx={styles.body}>
                    {isLoading && <Skeleton variant="rectangular" animation="wave" height={180}/>}
                    <img onLoad={() => setIsLoading(false)}
                         style={styles.image(isLoading)}
                         key={ cat.id }
                         src={ cat.url }/>
                </Box>
                <Box>
                    <CardActions>
                        <Button component={Link} to={to} size="small">View Details</Button>
                    </CardActions>
                </Box>
            </Card>
        </Box>
    )
}

export default GalleryImageCard