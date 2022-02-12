import {Box, Button, CircularProgress } from '@mui/material'
import React from 'react'
import {ArrowDropDown} from "@mui/icons-material";

export interface LoadMoreButtonProps {
    onClick: () => void
    isLoadMoreLoading: boolean
    isDisabled: boolean
}

export const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick, isLoadMoreLoading, isDisabled }) => {
    return (
        <Box>
            {isLoadMoreLoading ? <CircularProgress/> :
                <Button onClick={onClick} variant={"contained"} disabled={isDisabled}>
                    <ArrowDropDown/>
                </Button>
            }
        </Box>
    )
}

export default LoadMoreButton