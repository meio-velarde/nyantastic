const GalleryImageCardStyles = {
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    '& .MuiCard-root': {
        margin: 16
    },
    body: {
        height: 180,
        '& img': {
            objectFit: 'cover',
            height: '100%',
            width: '100%'
        },
    },
    skeletonImage: {backgroundColor: '#D3D3D3', width: '100%', height: '100%'},
    image: (isLoading: boolean) => ({display: isLoading ? 'none': 'block'})
}

export default GalleryImageCardStyles