import { Pagination } from '@mui/material'
import React from 'react'

const CustomPagination = (props) => {
  return (
    <div className="flex justify-center py-4 bg-white border border-red-600 rounded-full my-4">
        <Pagination
          className="font-['Comic Neue'] text-white"
          count={props.count}
          size="large"
          onChange={props.onChange}
          page={props.page}
        />
      </div>
  )
}

export default CustomPagination