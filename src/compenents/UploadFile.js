
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import VisuallyHiddenInput from './VisuallyHiddenInput';
import './UploadFile.css';
import { green } from '@mui/material/colors';

const UploadFile = () => {
    return (
        <>

            <h1>Upload a file</h1>
            <div className='div-upload'>
                <span>Upload a text file with valid phone numbers separated by commas.</span>
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    sx={{
                        backgroundColor: '#49326b',
                        '&:hover': {
                            backgroundColor: '#564a69',
                        },
                    }}
                >
                    Upload
                    <VisuallyHiddenInput
                        type="file"
                        onChange={(event) => console.log(event.target.files)}
                        multiple
                    />
                </Button>
            </div>
        </>
    );
};
export default UploadFile;