const DetailsCardStyles = {
    root: {
        margin: 4,
    },
    '& .MuiCard-root': {
        margin: 16
    },
    body: {
        width: '100%',
        height: '100%',
        '& img': {
            objectFit: 'cover',
            height: '100%',
            width: '100%'
        },
    },
    skeletonImage: {backgroundColor: '#D3D3D3', width: '100%', height: '100%'},
    image: (isLoading: boolean) => ({display: isLoading ? 'none': 'block'}),
    heading: {
        fontFamily: "'Press Start 2P'",
        color: '#7761ff',
    },
    typography: {
        margin: 4,
        '& .MuiTypography-root': {
            textAlign: 'left'
        }
    }
}

export default DetailsCardStyles