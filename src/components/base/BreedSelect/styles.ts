const BreedSelectStyles = {
    formControl: {
      m: 1,
      minWidth: {
          xs: 120,
          md: 200,
      }
    },
    select: {
        '& .MuiSelect-standard': {
            color: 'white',
            fontSize: {
                xs: 12,
                md: 18
            }
        },
        ':after': {
            borderBottomColor: '#fe77ff',
        },
        ':hover:not(.Mui-disabled):before': {
            borderBottomColor: '#510b66',
        },
        ':before': {
            borderBottomColor: '##510b66',
        },
        '& .MuiSelect-icon': {
            color: '#6d008f'
        }
    }
}

export default BreedSelectStyles