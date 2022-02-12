import {Box, CircularProgress, Grid } from '@mui/material'
import React from 'react'
import Cat from '../../models/Cat'
import GalleryImageCard from '../base/GalleryImageCard'

export interface GalleryProps {
    cats: Cat[]
    isGalleryLoading: boolean
}

export const Gallery: React.FC<GalleryProps> = ({ cats, isGalleryLoading }) => {

    return (
        <Box sx={{flexGrow: 1, margin: 2}}>
            {
                isGalleryLoading
                    ? <CircularProgress/>
                    : <Grid container direction="row" spacing={2}>
                        { cats.map(cat =>
                            <Grid item key={cat.id} xs={10} md={6} lg={4} xl={2}>
                                <GalleryImageCard cat={cat}/>
                            </Grid>)
                        }
                        </Grid>
            }
        </Box>
    )
}

export default Gallery