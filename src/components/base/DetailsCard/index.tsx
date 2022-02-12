import Cat from '../../../models/Cat'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {Box, Button, Card, CardActions, Skeleton, Typography} from '@mui/material'
import styles from './styles'

export interface DetailsCardProps {
    cat: Cat
}

export const DetailsCard: React.FC<DetailsCardProps> = ({cat}) => {
    const [ isLoading, setIsLoading ] = useState(true)
    const to = `/?breed=${cat.breed.id}`
    return (
        <Box sx={styles.root}>
            <Card>
                <Box>
                    <CardActions>
                        <Button component={Link} to={to} size="medium">Back</Button>
                    </CardActions>
                </Box>
                <Box sx={styles.body}>
                    {isLoading && <Skeleton variant="rectangular" animation="wave" height={180}/>}
                    <img onLoad={() => setIsLoading(false)}
                         style={styles.image(isLoading)}
                         key={ cat.id }
                         src={ cat.url }/>
                </Box>
                <Box sx={styles.typography}>
                    <Typography variant="h4" sx={styles.heading}> {cat.breed.name} </Typography>
                    <Typography variant="h5"> {cat.breed.origin} </Typography>
                    <Typography variant="h6"> {cat.breed.temperament} </Typography>
                    <Typography> {cat.breed.description} </Typography>
                </Box>
            </Card>
        </Box>
    )
}

export default DetailsCard