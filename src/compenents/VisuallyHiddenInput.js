import React from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const VisuallyHiddenInput = ({ type, onChange, multiple }) => (
    <input
        type={type}
        onChange={onChange}
        multiple={multiple}
        style={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: 0,
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            border: 0,
        }}
    />
);

export default VisuallyHiddenInput;
