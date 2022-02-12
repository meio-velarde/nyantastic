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
            objectFit: 'fit',
            height: '100%',
            width: '100%',
            maxHeight: 600
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
            textAlign: 'left',
            fontSize: {
                xs: 12,
                md: 15,
                lg: 18,
            },
        },
        "& .MuiTypography-h4": {
            fontSize: {
                xs: 24,
                md: 26,
                lg: 28,
            },
        },
        "& .MuiTypography-h5": {
            fontSize: {
                xs: 18,
                md: 21,
                lg: 24,
            },
        },
        "& .MuiTypography-h6": {
            fontSize: {
                xs: 15,
                md: 18,
                lg: 21,
            },
        }
    }
}

export default DetailsCardStyles